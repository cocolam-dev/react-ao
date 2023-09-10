import { useState } from "react";
import { useGlobalContext } from "./GlobalContext";
import { Alert } from "@mui/material";
import Users from "../Users";
import { useNavigate } from "react-router-dom";
import { IUser } from "./TSInterface";

const LoginExistingUser = () => {
  const { currentUser, setCurrentUser, setIsLoggedIn, setCurrentPage } =
    useGlobalContext();

  const navigate = useNavigate();

  const [isLoginSuccessful, setIsLoginSuccessful] = useState<boolean>(true);

  const handleChange = (e) => {
    let newUser: IUser = {
      ...currentUser,
      [e.target.name]: e.target.value,
    };
    setCurrentUser(newUser);
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();

    if (e.target.form.checkValidity()) {
      setCurrentUser({ ...Users[0], ...currentUser });
      setIsLoginSuccessful(true);
      setIsLoggedIn(true);
      navigate("/home");
      setCurrentPage("AOHome");
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
