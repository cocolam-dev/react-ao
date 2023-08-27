import { IoIosArrowForward, IoIosMenu, IoMdClose } from "react-icons/io";
import { useGlobalContext } from "./GlobalContext";
import MenuContent from "./MenuContent";

const SideMenu = () => {
  const {
    isLoggedIn,
    setIsLoggedIn,
    currentPage,
    setCurrentPage,
    isMenuExpanded,
    setIsMenuExpanded,
  } = useGlobalContext();

  return (
    <>
      <div className="MenuIcon">
        {isMenuExpanded ? (
          <IoMdClose onClick={() => setIsMenuExpanded(false)} />
        ) : (
          <IoIosMenu onClick={() => setIsMenuExpanded(true)} />
        )}

        <span className="MenuIconName">Menu</span>
      </div>
      <MenuContent />
    </>
  );
};
export default SideMenu;
