import { useGlobalContext } from "../common/GlobalContext";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { IUser } from "../pages/TR/TSInterface";
import Users from "../pages/login/Users";

const MenuContent = () => {
  const {
    setIsLoggedIn,
    currentPage,
    setCurrentUser,
    isMenuExpanded,
    setIsMenuExpanded,
    setIsSubmitSuccessful,
    setIsEditing,
    setTempUser,
    setCurrentPage,
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
            setCurrentPage("AOHome");
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
            setCurrentPage("AccountDetails");
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
            setCurrentPage("TR");
          }}
        >
          Transaction Reporting
          <span className="MenuGoBtn">
            <IoIosArrowForward />
          </span>
        </button>
      </div>
      <div className="MenuOption">
        <button
          className="MenuBtn"
          onClick={() => {
            setIsLoggedIn(false);
            setCurrentUser({} as IUser);
            setTempUser(Users[1]);
            navigate("/");
            setIsMenuExpanded(false);
            setIsSubmitSuccessful(false);
            setIsEditing(true);
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
