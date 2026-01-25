import "./App.css";
import { Routes, Route } from "react-router";
import Login from "./pages/login";
import SignUp from "./pages/sign-up";
import Movies from "./pages/movies";
import AddMovie from "./pages/add-movie";
import Layout from "./components/layout";
import SearchMovies from "./pages/search-page";
import AdminRoute from "./components/admin-route";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route element={<Layout />}>
            <Route path="/" element={<Movies />} />
            <Route path="/search-page" element={<SearchMovies />} />
            <Route element={<AdminRoute />}>
              <Route path="/add-movie" element={<AddMovie mode="add" />} /> 
              <Route path="/edit-movie/:id" element={<AddMovie mode="edit" />} />
            </Route>
            </Route>
      </Routes>
    </>
  );
}

export default App;
