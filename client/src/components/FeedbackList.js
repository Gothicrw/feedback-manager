import React, { useEffect, useState } from "react";
import axios from "axios";
import { Trash2 } from "lucide-react";

function FeedbackList({ refreshKey }) {
  const [feedbacks, setFeedbacks] = useState([]);
  const [error, setError] = useState("");

  const fetchFeedbacks = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/feedbacks`)
      .then((res) => setFeedbacks(res.data))
      .catch(() => setError("Could not load feedbacks"));
  };

  useEffect(() => {
    fetchFeedbacks();
  }, [refreshKey]);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this feedback?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/feedbacks/${id}`);
      fetchFeedbacks(); // reload feedbacks
    } catch (err) {
      alert("Failed to delete feedback");
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-12 px-4">
      <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">All Feedback</h2>

      {error && <p className="text-red-600 text-center">{error}</p>}

      {feedbacks.length === 0 ? (
        <p className="text-gray-600 text-center">No feedback yet.</p>
      ) : (
        <ul className="space-y-5">
          {feedbacks.map((fb) => (
            <li
              key={fb._id}
              className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition border border-gray-200 relative"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold text-lg">{fb.name}</p>
                  <p className="text-gray-600 text-sm">{fb.email}</p>
                </div>
                <button
                  onClick={() => handleDelete(fb._id)}
                  className="text-red-500 hover:text-red-700 transition"
                  title="Delete Feedback"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
              <p className="text-gray-700 mt-3 italic">"{fb.message}"</p>
              <p className="text-xs text-gray-400 mt-2">
                {new Date(fb.createdAt).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FeedbackList;
