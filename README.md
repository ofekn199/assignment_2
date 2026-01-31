# Assignment 2 – Users & Authentication API (Node.js + Express + MongoDB)

This project implements a complete **Users CRUD API** with **JWT authentication**, built using:

- Node.js
- Express
- TypeScript
- MongoDB (Mongoose)
- JWT (Access + Refresh Tokens)

The project follows a clean **MVC architecture** and is fully testable using the provided `request.rest` file.

---

## 📁 Project Structure
src/
│
├── controllers/ # Business logic (auth, users)
├── routes/ # Express routes
├── middlewares/ # JWT authentication middleware
├── models/ # Mongoose schemas
├── config/ # DB connection
├── utils/ # JWT helpers
├── app.ts # Express app
└── server.ts # Entry point

---

## ⚙️ Installation & Run

### 1. Install dependencies
```bash
npm install

2. Create .env file in project root
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
JWT_REFRESH_SECRET=your_refresh_secret

3. Run the server
npm run dev

You should see:
  Server running on port 3000

🧪 Manual Testing (Very Important)

All tests are done using the provided:
request.rest

Make sure this line exists at the top:
@baseUrl = http://localhost:3000

🔐 Authentication Flow
1. Register
POST /auth/register
2. Login
POST /auth/login

Response contains:
accessToken
refreshToken
user id

Copy the accessToken for the next requests.

👤 Users Endpoints

All Users endpoints require:

Authorization: Bearer <accessToken>
Get all users
GET /users
Get user by id
GET /users/:id
Update user (self only)
PUT /users/:id

You can update:
username
email
password

Delete user (self only)
DELETE /users/:id

❗ Important Behaviors
* Password is never returned in responses
* MongoDB ObjectId is validated
* A user can update/delete only himself
* JWT middleware protects all Users routes
* Password hashing is handled automatically by Mongoose pre-save hook

🔁 Token Management
Refresh access token
POST /auth/refresh-token
Logout (invalidate refresh token)
POST /auth/logout

🧠 Architecture Highlights
MVC separation
JWT based authentication
Middleware authorization
Clean route/controller separation
Proper error handling (400 / 401 / 403 / 404)
Git workflow using feature branches

✅ How the tester (lecturer) should check the project
Run server
Use request.rest
Register a user
Login and copy accessToken
Test:
GET users
GET user by id
PUT user
DELETE user

Everything should work as expected.
