import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import SideMenu from "./SideMenu";
import { useGlobalContext } from "./GlobalContext";

const SharedLayout = () => {
  const { isLoggedIn } = useGlobalContext();
  return (
    <>
      <Navbar />
      {isLoggedIn && <SideMenu />}
      <Outlet />
    </>
  );
};
export default SharedLayout;
