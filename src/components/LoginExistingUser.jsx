import { useState } from "react";
import { useGlobalContext } from "./GlobalContext";
import { Alert } from "@mui/material";

const LoginExistingUser = () => {
  const {
    currentUser,
    setCurrentUser,
    currentPage,
    setCurrentPage,
    isLoggedIn,
    setIsLoggedIn,
  } = useGlobalContext();

  const [isLoginSuccessful, setIsLoginSuccessful] = useState(true);

  const handleChange = (e) => {
    let newUser = {
      ...currentUser,
      [e.target.name]: e.target.value,
    };
    setCurrentUser(newUser);
    console.log(newUser);
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    if (e.target.form.checkValidity()) {
      setIsLoginSuccessful(true);
      setIsLoggedIn(true);
      setCurrentPage("AOHome");
      console.log(currentUser);
    } else {
      setIsLoginSuccessful(false);
      return;
    }
  };

  return (
    <div className="LoginExistingUserContainer">
      <h2>Existing User</h2>

      <div className="AlertContainer">
        {!isLoginSuccessful && (
          <Alert severity="warning">The login details are invalid.</Alert>
        )}
      </div>

      <form className="UserLoginForm">
        <label htmlFor="Email">Email Address</label>
        <input
          type="Email"
          name="Email"
          id="Email"
          onChange={handleChange}
          required
        />
        <label htmlFor="Password">Password</label>
        <input
          type="password"
          name="Password"
          id="Password"
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="GreenBtn"
          onClick={(e) => handleFormSubmission(e)}
        >
          Login
        </button>
      </form>
      <p>
        <a href="#">Forgot your password?</a>
      </p>
    </div>
  );
};
export default LoginExistingUser;
