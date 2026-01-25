import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import MoviesContext from "../context/movie-context";

const AdminRoute = () => {
  const { isAdmin } = useContext(MoviesContext);
  if (!isAdmin) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};

export default AdminRoute;