import { useGlobalContext } from "./GlobalContext";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const MenuContent = () => {
  const {
    isLoggedIn,
    setIsLoggedIn,
    currentPage,
    setCurrentPage,
    setCurrentUser,
    isMenuExpanded,
    setIsMenuExpanded,
  } = useGlobalContext();

  const navigate = useNavigate();

  return (
    <div className={isMenuExpanded ? "SideMenu" : "MenuHidden SideMenu"}>
      <h3 className="MenuTitle">Menu</h3>
      <div className={currentPage === "AOHome" ? "SelectedBtn" : "MenuOption"}>
        <button
          className="MenuBtn"
          onClick={() => {
            navigate("/home");
            setIsMenuExpanded(false);
          }}
        >
          Home
          <span className="MenuGoBtn">
            <IoIosArrowForward />
          </span>
        </button>
      </div>
      <div
        className={
          currentPage === "AccountDetails" ? "SelectedBtn" : "MenuOption"
        }
      >
        <button
          className="MenuBtn"
          onClick={() => {
            navigate("/accountdetails");
            setIsMenuExpanded(false);
          }}
        >
          Account Details
          <span className="MenuGoBtn">
            <IoIosArrowForward />
          </span>
        </button>
      </div>
      <div className={currentPage === "TR" ? "SelectedBtn" : "MenuOption"}>
        <button
          className="MenuBtn"
          onClick={() => {
            navigate("/tr");
            setIsMenuExpanded(false);
          }}
        >
          Transaction Reporting
          <span className="MenuGoBtn">
            <IoIosArrowForward />
          </span>
        </button>
      </div>
      <div className={currentPage === "Login" ? " SelectedBtn" : "MenuOption"}>
        <button
          className="MenuBtn"
          onClick={() => {
            setIsLoggedIn(false);
            setCurrentUser({});
            navigate("/");
            setIsMenuExpanded(false);
          }}
        >
          <span className="MenuGoBtn">
            <IoIosArrowForward />
          </span>
          Logout
        </button>
      </div>
    </div>
  );
};

export default MenuContent;
