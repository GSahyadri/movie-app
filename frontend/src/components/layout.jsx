import MoviesProvider from "../context/movie-provider";
import Navbar from "./navbar";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <MoviesProvider>
      <div className="app-container">
        <Navbar />
        {/* route path component will be rendered here */}
        <Outlet />
      </div>
    </MoviesProvider>
  );
};

export default Layout;