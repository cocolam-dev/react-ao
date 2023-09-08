import { createContext, useContext, useState } from "react";
import TRS from "../TRs";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState("Login");
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const [tRList, setTRList] = useState(TRS);

  return (
    <GlobalContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        isLoggedIn,
        setIsLoggedIn,
        currentPage,
        setCurrentPage,
        isMenuExpanded,
        setIsMenuExpanded,
        tRList,
        setTRList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
