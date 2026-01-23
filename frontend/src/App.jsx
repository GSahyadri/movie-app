import "./App.css";
import { Routes, Route } from "react-router";
import Login from "./pages/login";
import SignUp from "./pages/sign-up";
import Movies from "./pages/movies";
import AddMovie from "./pages/add-movie";
import Layout from "./components/layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Movies />} />
          <Route path="/add-movie" element={<AddMovie />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
