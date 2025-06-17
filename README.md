# 🎓 AssignMates - Assignment Management Web App
AssignMates is a full-stack MERN web application designed to simplify group study and assignment management for students and instructors. This app supports assignment creation, submission, evaluation, role-based access control, JWT authentication, dark/light mode, and more.
## 🚀 Features

### 👤 Authentication
- Register/Login with email/password
- Google Sign-In integration
- JWT token-based protected routes
- Role-based access: **Student** and **Instructor**

### 📚 Assignments
- **Create Assignment:** Instructors can post new assignments with marks, deadlines, difficulty, and thumbnails.
- **View Assignments:** Public page to browse all assignments.
- **Assignment Details:** Protected route to view individual assignment details.
- **Submit Assignment:** Students can submit Google Docs links and notes.
- **Pending Assignments:** Instructors can view submissions from others and give marks + feedback.
- **My Submissions:** Students can view only their submitted assignments.
- **Delete/Update:** Only the creator of an assignment can delete/update it.

### 📝 Evaluation
- Instructors can:
  - View pending submissions (excluding their own).
  - Give marks and feedback.
  - Update the submission’s status to `completed`.

### 🎯 Filtering & Search
- Filter assignments by difficulty.
- Search by assignment title.

### 🌙 UI/UX
- Light/Dark theme toggle
- Responsive and accessible layout
- Alerts and modals for feedback and confirmations

## 🛠️ Tech Stack

### 🔧 Frontend
- React
- React Router DOM
- Tailwind CSS
- Context API (AuthContext)
- Firebase Authentication
- SweetAlert2
- React Hook Form

### ⚙️ Backend
- Node.js
- Express.js
- MongoDB
- JWT (jsonwebtoken)
- Dotenv
- CORS

## Documentation 
[Live Link](https://my-online-assignment-project.web.app) 

[Client Side](https://github.com/Programming-Hero-Web-Course4/b11a11-client-side-AmenaGithub678)

[Server Side](https://github.com/Programming-Hero-Web-Course4/b11a11-server-side-AmenaGithub678)




