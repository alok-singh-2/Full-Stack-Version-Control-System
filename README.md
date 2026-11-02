#  Full-Stack Version Control System

A full-stack GitHub-inspired application combined with a custom Git-like Command Line Interface (CLI). This project allows users to authenticate, manage repositories through a web interface, and perform version-control operations such as initializing repositories, adding files, committing changes, pushing data to AWS S3, pulling commits, and reverting to previous commits.

The project was built to understand how frontend applications, backend APIs, databases, cloud storage, authentication, and command-line tools can work together in a complete system.

---

## Features

### Web Application

- User Signup and Login
- JWT-based Authentication
- User session management using Local Storage
- Dashboard for viewing repositories
- Create new repositories
- Public and Private repository visibility
- Repository descriptions
- User Profile page
- Logout functionality

### Custom Git-like CLI

The backend also provides custom commands inspired by Git:

```bash
node index.js init
node index.js add <file>
node index.js commit "<message>"
node index.js push
node index.js pull
node index.js revert <commitID>
```

### Command Overview

#### Initialize Repository

```bash
node index.js init
```

Initializes a new Git-like repository.

#### Add Files

```bash
node index.js add <file>
```

Adds a file to the staging area.

#### Commit Changes

```bash
node index.js commit "<message>"
```

Creates a commit containing staged changes.

#### Push

```bash
node index.js push
```

Uploads commits to AWS S3.

#### Pull

```bash
node index.js pull
```

Retrieves commits from AWS S3.

#### Revert

```bash
node index.js revert <commitID>
```

Reverts the repository to a specific commit.

---

## Tech Stack

### Frontend

- React.js
- Vite
- React Router
- Axios
- Primer React
- CSS

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt.js
- Socket.IO

### Cloud

- AWS IAM
- Amazon S3

---

## Project Architecture

```text
GITHUB-CLONE
│
├── frontend
│   ├── React + Vite
│   ├── Authentication
│   ├── Dashboard
│   ├── Profile
│   └── Repository Creation
│
├── backend
│   ├── Express Server
│   ├── MongoDB
│   ├── Authentication APIs
│   ├── Repository APIs
│   └── Git-like CLI Commands
│
└── AWS S3
    ├── Push Commits
    └── Pull Commits
```

---

## Installation

### Clone the Repository

```bash
git clone <your-repository-url>
```

Navigate to the project directory:

```bash
cd GITHUB-CLONE
```

---

## Backend Setup

Navigate to the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file and add your environment variables:

```env
PORT=3002
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET_KEY=your_jwt_secret
```

Configure your AWS credentials securely before using the S3 push and pull functionality.

Start the backend server:

```bash
node index.js start
```

---

## Frontend Setup

Open another terminal and navigate to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will run locally through Vite.

---

## API Functionality

The backend includes functionality for:

- User registration
- User login
- JWT authentication
- Repository creation
- Fetching repositories
- Fetching repositories for the current user
- Updating repositories
- Deleting repositories
- Repository visibility management

---

## Testing

The following functionality has been tested successfully:

- User Signup
- User Login
- JWT Authentication
- Dashboard
- User Profile
- Create Repository
- Repository display on Dashboard
- CLI repository initialization
- Add files
- Commit changes
- Push commits to AWS S3
- Pull commits from AWS S3
- Revert commits

---

## Future Improvements

- Advanced repository search
- Complete Issue Management UI
- Repository collaboration features
- Improved commit history visualization
- Better error handling
- Production deployment
- Enhanced repository permissions

---

## Author

**Alok Singh**

GitHub: https://github.com/alok-singh-2

---

## Project Purpose

This project was built as a learning-focused full-stack application to gain practical experience with:

- Full-stack development
- REST APIs
- Authentication and authorization
- MongoDB database integration
- Cloud storage using AWS S3
- AWS IAM permissions
- Command-line application development
- Version-control concepts

Building this project helped me understand how different technologies can work together to create a complete software system.
