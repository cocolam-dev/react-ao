import "./App.css";
import Login from "./pages/login/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccountDetails from "./pages/AccountDetails/Index";
import AOHome from "./pages/AOHome";
import TR from "./pages/TR/Index";
import SharedLayout from "./components/SharedLayout";
import Error from "./pages/Error";
import ProtectedRoute from "./common/ProtectedRoute";
import Signup from "./pages/AccountDetails/SignUpDetails";

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
  return (
    <BrowserRouter basename="/react-ao">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<Error />} />

          <Route element={<ProtectedRoute />}>
            <Route path="home" element={<AOHome />} />
            <Route path="tr" element={<TR />} />
            <Route path="accountdetails" element={<AccountDetails />} />
          </Route>

          {/* <Route
            path="home"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <AOHome />
              </ProtectedRoute>
            }
          />
          <Route
            path="accountdetails"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <AccountDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="tr"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <TR />
              </ProtectedRoute>
            }
          /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
