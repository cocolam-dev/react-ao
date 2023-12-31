import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import SideMenu from "./SideMenu";
import { useGlobalContext } from "../common/GlobalContext";

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
