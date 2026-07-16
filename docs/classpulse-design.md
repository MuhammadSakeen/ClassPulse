# ClassPulse Design Document

## Project Overview

**Project Name:** ClassPulse

**Title:** Smart Classroom Presence and Engagement System

### Objective

### Objective

ClassPulse is a smart classroom platform that streamlines attendance management and classroom engagement through dynamic session codes, live quizzes, attendance tracking, and real-time analytics.
---

# User Roles

## Student

- Join classroom session
- Attend live quiz
- View attendance history
- View quiz scores
- View class presence analytics
- View today's class schedule
- Manage profile

---

## Faculty

- Create classroom session
- Monitor student attendance
- Create quizzes
- Start live quiz
- View attendance reports
- View previous sessions
- Manage profile

---

# System Workflow

## Student Flow

Login
    ↓
Student Dashboard
    ↓
Join Session
    ↓
Enter Dynamic Session Code
    ↓
Wait for Faculty
    ↓
Quiz Starts
    ↓
Submit Quiz
    ↓
Attendance Confirmed
    ↓
View Attendance History & Analytics

---

## Faculty Flow

Login
    ↓
Faculty Dashboard
    ↓
Create Session
    ↓
Dynamic Session Code Generated
    ↓
Students Join
    ↓
Attendance Window Closes
    ↓
Start Quiz
    ↓
View Quiz Results
    ↓
Generate Attendance Report

---

# System Modules

## Authentication Module

- User Registration
- User Login
- Forgot Password
- Logout

---

## Student Module

- Dashboard
- Join Session
- Attendance History
- Quiz Scores
- Presence Analytics
- Profile

---

## Faculty Module

- Dashboard
- Create Session
- Attendance Monitor
- Create Quiz
- Start Quiz
- Reports
- Session History
- Profile

---

## Session Module

- Generate Dynamic Session Code
- Validate Session Code
- Join Session
- Close Session Automatically

---

## Quiz Module

- Create Quiz
- Start Quiz
- Submit Quiz
- Evaluate Quiz
- Store Results

---

## Analytics Module

- Attendance Percentage
- Quiz Performance
- Student Participation
- Faculty Reports

---

# Technology Stack

## Frontend

- React
- React Router
- CSS
- JavaScript

## Authentication

- Firebase Authentication

## Backend

- Node.js
- Express.js

## Database

- MongoDB

## Deployment

- Vercel (Frontend)
- Render/Railway (Backend)
- MongoDB Atlas

---

# Database Collections

## users

Stores both student and faculty information.

## sessions

Stores classroom session details and dynamic session codes.

## attendance

Stores attendance records of students for each session.

## quizzes

Stores quiz information created by faculty.

## submissions

Stores student quiz submissions and scores.

---

# Database Relationships

One User
    ↓
Can Join
Many Sessions

One Session
    ↓
Can Have
Many Students

One Quiz
    ↓
Can Have
Many Submissions

One Student
    ↓
Can Submit
Many Quiz Submissions

---

# Attendance Verification Logic

Faculty creates a classroom session.

↓

A dynamic session code is generated.

↓

The session code changes every 5 seconds.

↓

Students enter the current session code.

↓

Attendance window closes automatically.

↓

Faculty starts the live quiz.

↓

Students submit quiz.

↓

Attendance is confirmed.

↓

Attendance records and quiz data are stored.

---

# Future Enhancements

- QR Code support for mobile application
- Push Notifications
- Face Recognition Integration
- Mobile Application

---

# Security

- Firebase Authentication
- Protected Routes
- Role-based Access
- Dynamic Session Code
- One Active Session Per Student