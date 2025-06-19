import React, { useState } from 'react';
import axios from 'axios';

function FeedbackForm({ onFeedbackSubmitted }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setError('All fields are required');
      return;
    }

    setLoading(true);
    setError('');

    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/feedbacks`, {
        name,
        email,
        message,
      });
      setName('');
      setEmail('');
      setMessage('');
      onFeedbackSubmitted(); // refresh list
    } catch (err) {
      setError('Failed to submit feedback');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-xl p-6 max-w-xl mx-auto mt-10 space-y-4 border border-gray-200">
      <h2 className="text-2xl font-bold text-center text-gray-800">Leave Feedback</h2>
      
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
      />
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows="4"
        className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200"
      >
        {loading ? 'Sending...' : 'Submit Feedback'}
      </button>
    </form>
  );
}

export default FeedbackForm;
