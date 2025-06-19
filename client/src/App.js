import React from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <FeedbackForm />
      <FeedbackList />
    </div>
  );
}

export default App;
