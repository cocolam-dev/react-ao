import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import logo from "./images/austrac-logo.svg";
import AccountDetails from "./components/AccountDetails";
import AOHome from "./components/AOHome";
import { useGlobalContext } from "./components/GlobalContext";
import SideMenu from "./components/SideMenu";
import TR from "./components/TR";

const DisplayCurrentPage = () => {
  const { currentPage, setCurrentPage } = useGlobalContext();

  if (currentPage === "Login") {
    return <Login />;
  }

  if (currentPage === "AccountDetails") {
    return <AccountDetails />;
  }

  if (currentPage === "TR") {
    return <TR />;
  }

  if (currentPage === "AOHome") {
    return <AOHome />;
  }
};

function App() {
  const { isLoggedIn } = useGlobalContext();
  return (
    <>
      <Navbar />
      {isLoggedIn && <SideMenu />}
      <DisplayCurrentPage />
    </>
  );
}

export default App;