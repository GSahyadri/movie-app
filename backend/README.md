# Movie App Backend

A Node.js/Express REST API server for a movie management application with user authentication, authorization, and movie CRUD operations.

## Installation

1. Clone the repository
2. Navigate to the backend directory
3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the backend directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   FRONTEND_URL=http://localhost:5173
   ```

## Available Scripts

- **`npm start`**: Run the server in production mode
- **`npm run dev`**: Run the server with nodemon for development (auto-reload on file changes)

## API Endpoints

### Authentication Routes (`/auth`)
- `POST /auth/login` - Login user, returns JWT token
- `POST /auth/logout` - Logout user

### Registration Routes (`/register`)
- `POST /register` - Register a new user account

### Movie Routes (`/movies`)
- `GET /movies` - Get all movies (requires authentication)
- `GET /movies/search` - Search movies by title or description (requires authentication)
- `GET /movies/sorted` - Get sorted movies (requires authentication)
- `POST /movies` - Add a new movie (admin only)
- `PUT /movies/:id` - Update a movie (admin only)
- `DELETE /movies/:id` - Delete a movie (admin only)

## Environment Variables

- `PORT` - Server port (default: 5000)
- `DATABASE_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT signing
- `FRONTEND_URL` - Frontend URL for CORS configuration
- `NODE_ENV` - development | production 

## Running the Server

For development:
```bash
npm run dev
```

For production:
```bash
npm start
```

The server will connect to MongoDB and listen on the specified PORT