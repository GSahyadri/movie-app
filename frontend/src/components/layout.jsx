import Navbar from "./navbar";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="app-container">
      <Navbar />
      {/* route path component will be rendered here */}
      <Outlet />
    </div>
  );
};

export default Layout;