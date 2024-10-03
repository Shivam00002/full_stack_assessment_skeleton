# Full Stack Assessment Solution

This README documents the solution for the full stack assessment, covering the database, React SPA, and backend API development tasks.

## 1. Database

### Solution

I have refactored the initial `user_home` table into a normalized set of tables using SQL. The changes are documented in the `99_final_db_dump.sql` file located in the `sql` directory. The main changes include:

- Created a `user` table to store user attributes (username, email)
- Created a `home` table to store home attributes
- Created a junction table `user_home` to represent the many-to-many relationship between users and homes
- Added appropriate primary and foreign key constraints

To apply these changes, run the `99_final_db_dump.sql` script against the initial database state.

## 2. React SPA

### Solution

The frontend is built using React with Vite, Tailwind CSS for styling, and Redux Toolkit for state management. Key features include:

- Homes for user page with a dropdown to select users
- Responsive design for home cards
- Edit User functionality with a modal
- Data fetching handled using RTK Query

To run the frontend:

1. Navigate to the `frontend` directory
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

The frontend will be available at `http://localhost:3000` (or the port specified by Vite).

## 3. Backend API Development on Node

### Solution

The backend is built using Express.js and TypeORM for database interactions. The following REST APIs have been implemented:

- GET `/user/find-all`: Returns all users
- GET `/home/find-by-user`: Returns homes related to a user
- GET `/user/find-by-home`: Returns users related to a home
- POST `/home/update-users`: Updates users related to a home

To run the backend:

1. Navigate to the `backend` directory
2. Install dependencies: `npm install`
3. Start the server: `npm start`

The backend will be running on `http://localhost:4000`.

## Running the Complete Solution

1. Start the MySQL database using Docker:
   ```
   docker-compose -f docker-compose.final.yml up --build -d
   ```

2. Start the backend server (on port 4000)

3. Start the frontend development server

4. Access the application through the frontend URL (typically `http://localhost:3000`)

Note: Make sure to check the `.env` files in both frontend and backend directories for any necessary environment variables.