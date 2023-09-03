import { useGlobalContext } from "./GlobalContext";
import { IoIosArrowForward } from "react-icons/io";

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

  return (
    <div className={isMenuExpanded ? "SideMenu" : "MenuHidden SideMenu"}>
      <h3 className="MenuTitle">Menu</h3>
      <div className={currentPage === "AOHome" ? "SelectedBtn" : "MenuOption"}>
        <button
          className="MenuBtn"
          onClick={() => {
            setCurrentPage("AOHome");

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
            setCurrentPage("AccountDetails");

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
            setCurrentPage("TR");

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
            setCurrentPage("Login");
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
