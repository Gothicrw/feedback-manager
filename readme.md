📝 Project Summary: Simple Feedback Manager (MERN Stack)
The Simple Feedback Manager is a full-stack web application built using the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to submit feedback through a form and view all previously submitted feedback in a neatly styled list. This project demonstrates the core functionality of a CRUD-based app, focusing on the Create, Read, and optional Delete operations, with a responsive UI powered by Tailwind CSS.

🔧 Backend (Node.js + Express + MongoDB)
Uses Express to create RESTful API routes.

Connects to MongoDB Atlas using Mongoose.

Defines a Feedback model with fields: name, email, message, and createdAt.

API Endpoints:

POST /api/feedbacks — Accepts new feedback and saves it to MongoDB.

GET /api/feedbacks — Returns all feedback, sorted by creation date.

DELETE /api/feedbacks/:id — (Optional) Deletes specific feedback by ID.

🎨 Frontend (React + Tailwind CSS)
A responsive feedback form for submitting name, email, and message.

Displays feedback entries using cards with name, email, message, and timestamp.

Includes error handling, loading states, and optional delete button with confirmation.

Uses Axios to make HTTP requests to the backend API.

The UI is styled with Tailwind CSS, and optionally enhanced with Lucide React icons.

🌐 Environment Setup
Uses environment variables to configure backend API base URL.

Tailwind and PostCSS setup initialized via npx tailwindcss init -p.

dotenv is used in the server to keep MongoDB credentials secure.

This project is ideal for demonstrating your ability to:

Build and connect a full-stack MERN app.

Structure a React frontend with clean UI/UX.

Write and document RESTful APIs.

Use MongoDB effectively with validation and schema design.

