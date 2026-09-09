# ClassPulse

> Smart Classroom Attendance and Engagement System

ClassPulse is a full-stack classroom platform designed to simplify attendance management and improve classroom engagement through dynamic session codes, quizzes, attendance tracking, and performance analytics.

## 🚀 Features

### 👨‍🎓 Student
- Student dashboard
- Attendance overview
- Quiz performance tracking
- Recent classroom activity
- Upcoming classes
- Quick access to classroom features

### 👨‍🏫 Faculty
- Faculty dashboard
- Active session overview
- Student statistics
- Average attendance tracking
- Recent classroom activities
- Upcoming classes
- Quick access to session and quiz management

### 🔐 Authentication
- Student and faculty accounts
- Secure password hashing using bcrypt
- JWT-based authentication
- Role-based access control
- Protected student and faculty routes

> Authentication and role-based authorization are currently under development.

### 📊 Planned Classroom Features
- Dynamic classroom session codes
- Student session joining
- Automatic attendance recording
- Live quizzes
- Attendance analytics
- Student performance analytics

---

## 🛠️ Tech Stack

### Frontend
- React
- JavaScript
- HTML5
- CSS3

### Backend
- Node.js
- Express.js
- REST API

### Database
- MongoDB
- MongoDB Atlas
- Mongoose

### Authentication
- JWT
- bcrypt

### Development Tools
- Git
- GitHub
- Nodemon
- VS Code

---

## 🏗️ Project Architecture

```text
                    ClassPulse
                        │
                        ▼
                ┌───────────────┐
                │ React Frontend│
                └───────┬───────┘
                        │
                     HTTP/API
                        │
                        ▼
                ┌───────────────┐
                │ Node.js       │
                │ Express.js    │
                └───────┬───────┘
                        │
                    Mongoose
                        │
                        ▼
                ┌───────────────┐
                │ MongoDB Atlas │
                └───────────────┘
```

---

## 📁 Project Structure

```text
ClassPulse/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── styles/
│   └── ...
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── docs/
│
└── README.md
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Navigate to the project

```bash
cd ClassPulse
```

### 3. Install frontend dependencies

```bash
cd frontend
npm install
```

### 4. Install backend dependencies

Open another terminal:

```bash
cd backend
npm install
```

### 5. Configure environment variables

Create a `.env` file inside the `backend` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

> Never commit your `.env` file or expose your database credentials or JWT secret.

### 6. Start the backend

```bash
npm run dev
```

The backend will run on:

```text
http://localhost:5000
```

### 7. Start the frontend

Inside the `frontend` folder:

```bash
npm run dev
```

The frontend will run on the development server provided by Vite.

---

## 🧪 Backend Health Check

The backend currently provides a health-check endpoint:

```http
GET /api/health
```

Example response:

```json
{
  "message": "ClassPulse backend is running"
}
```

This endpoint is used to verify that the Express server is running correctly.

---

## 🔄 Application Flow

The planned application flow is:

```text
User
  │
  ▼
Login / Register
  │
  ▼
JWT Authentication
  │
  ▼
Role Verification
  │
  ├───────────────┐
  ▼               ▼
Student         Faculty
Dashboard       Dashboard
  │               │
  ▼               ▼
Join Session    Create Session
  │               │
  └───────┬───────┘
          ▼
     Attendance
          │
          ▼
        Quiz
          │
          ▼
      Analytics
```

---

## 🎯 Project Goals

ClassPulse aims to:

- Reduce manual attendance work
- Make classroom attendance faster and more reliable
- Provide students with a clear view of their attendance and performance
- Help faculty manage classroom sessions efficiently
- Introduce interactive quizzes for classroom engagement
- Provide meaningful attendance and performance analytics

---

## 🔮 Future Improvements

Planned improvements include:

- Real-time classroom updates
- Live quiz participation
- Advanced analytics dashboards
- Attendance history and reports
- Automated notifications
- Improved security and authorization
- Deployment for production use

---

## 📌 Current Status

### Completed

- [x] Landing Page
- [x] Login UI
- [x] Registration UI
- [x] Student Dashboard
- [x] Faculty Dashboard
- [x] Reusable Dashboard Components
- [x] Express Backend Setup
- [x] MongoDB Atlas Connection
- [x] Mongoose Configuration
- [x] Backend Health Check API
- [x] Git/GitHub Repository Setup

### In Progress

- [ ] User Model
- [ ] Registration API
- [ ] Login API
- [ ] Password Hashing
- [ ] JWT Authentication
- [ ] Role-Based Authorization
- [ ] Classroom Session Management
- [ ] Attendance System
- [ ] Quiz System
- [ ] Analytics

---

## 👨‍💻 Development

ClassPulse is being developed as a full-stack application using the MERN ecosystem.

The project follows a modular architecture separating:

- Frontend UI
- Backend routes
- Controllers
- Middleware
- Database models
- Database configuration

This structure makes the application easier to maintain, test, and extend.

---

## 📄 License

This project is currently developed for educational and project purposes.
