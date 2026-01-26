# Movie App Frontend

A modern React-based web application for browsing, searching, and managing movies with user authentication and admin capabilities.

## Installation

1. Clone the repository
2. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the frontend directory (if needed) with:
    add backend base URL
   ```
   VITE_API_BASE_URL=http://localhost:5000
   ```

## Available Scripts

- **`npm run dev`** - Start the development server (default: `http://localhost:5173`)
- **`npm run build`** - Build for production
- **`npm run preview`** - Preview production build locally
- **`npm run lint`** - Run ESLint to check code quality

## Running the Application

1. Ensure the backend server is running on port 5000
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open your browser and navigate to `http://localhost:5173`

## Pages & Routes

- **`/login`** - User login page
- **`/sign-up`** - User registration page
- **`/`** - Main movies listing page (protected)
- **`/search-page`** - Search results page (protected)
- **`/add-movie`** - Add new movie page (admin only)
- **`/edit-movie/:id`** - Edit existing movie page (admin only)

## API Integration

The frontend communicates with the backend via:
- **Base URL**: Configured in `apiClient.js`
- **Authentication**: JWT tokens stored in cookies
- **Requests**: All API requests include authentication headers automatically

### Example API Calls
- Get movies: `GET /movies`
- Search movies: `GET /movies/search?input=${value}&option=${option}`
- Sort movies: `GET /movies/sorted?sortBy=${value}`
- Add movie: `POST /movies`
- Update movie: `PUT /movies/:id`
- Delete movie: `DELETE /movies/:id`
- Login: `POST /auth/login`
- Logout: `POST /auth/logout`