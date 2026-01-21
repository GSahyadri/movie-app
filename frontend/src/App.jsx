import "./App.css";
import { Routes, Route } from "react-router";
import Login from "./pages/login";
import SignUp from "./pages/sign-up";

function App() {
  return (
    <>
      <h1 className="header">Movie App !</h1>
      <Routes>
         {/* <Route index element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
