import "./App.css";
import { Routes, Route } from "react-router";
import Login from "./pages/login";
import SignUp from "./pages/sign-up";
import Movies from "./pages/movies";
import AddMovie from "./pages/add-movie";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/add-movie" element={<AddMovie />} />
      </Routes>
    </>
  );
}

export default App;
