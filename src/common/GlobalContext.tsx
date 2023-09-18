import { ReactNode, createContext, useContext, useState } from "react";
import TRS from "../pages/TR/TRs";
import { IUser, ITR, IGlobalContext } from "./TSInterface";
import Users from "../pages/login/Users";

const GlobalContext = createContext<IGlobalContext>({} as IGlobalContext);

export const useGlobalContext = () => useContext(GlobalContext);

//https://stackoverflow.com/questions/66651902/passing-child-nodes-to-a-functional-react-component-written-typescript
//children type: can use {children}:any but not good practice: https://www.typescriptlang.org/docs/handbook/2/generics.html#handbook-content

const AppContext = ({ children }: { children?: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<IUser>({} as IUser);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<string>("Login");

  const [isMenuExpanded, setIsMenuExpanded] = useState<boolean>(false);

  const [tRList, setTRList] = useState<ITR[]>(TRS as ITR[]);

  const [isEditing, setIsEditing] = useState<boolean>(true);

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState<boolean>(false);

  const [isError, setIsError] = useState<boolean>(false);

  const [tempUser, setTempUser] = useState<IUser>(Users[1]);

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
        isEditing,
        setIsEditing,
        isSubmitted,
        setIsSubmitted,
        isSubmitSuccessful,
        setIsSubmitSuccessful,
        isError,
        setIsError,
        tempUser,
        setTempUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
