import "./App.css";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccountDetails from "./components/AccountDetails";
import AOHome from "./components/AOHome";
import { useGlobalContext } from "./components/GlobalContext";
import TR from "./components/TR";
import SharedLayout from "./components/SharedLayout";
import Error from "./components/Error";
import ProtectedRoute from "./components/ProtectedRoute";

// const DisplayCurrentPage = () => {
//   const { currentPage } = useGlobalContext();
//   // window.scrollTo(0, 0);

//   if (currentPage === "Login") {
//     return <Login />;
//   }

//   if (currentPage === "AccountDetails") {
//     return <AccountDetails />;
//   }

//   if (currentPage === "TR") {
//     return <TR />;
//   }

//   if (currentPage === "AOHome") {
//     return <AOHome />;
//   }
// };

function App() {
  const { isLoggedIn } = useGlobalContext();
  return (
    <BrowserRouter basename="/react-ao">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Login />} />
          <Route
            path="home"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <AOHome />
              </ProtectedRoute>
            }
          />
          <Route path="accountdetails" element={<AccountDetails />} />
          <Route
            path="tr"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <TR />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
