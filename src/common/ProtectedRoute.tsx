import { Navigate, Outlet } from "react-router-dom";
import { useGlobalContext } from "./GlobalContext";

const ProtectedRoute = () => {
  const { isLoggedIn } = useGlobalContext();
  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

// const ProtectedRoute = ({ children, isLoggedIn }) => {
//   if (!isLoggedIn) {
//     return <Navigate to="/" />;
//   }
//   return children;
// };

export default ProtectedRoute;
