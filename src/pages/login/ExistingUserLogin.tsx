import { useState } from "react";
import { useGlobalContext } from "../../common/GlobalContext";
import { Alert } from "@mui/material";
import Users from "./Users";
import { useNavigate } from "react-router-dom";

const ExistingUserLogin = () => {
  const {
    setCurrentUser,
    setIsLoggedIn,
    setIsEditing,
    setTempUser,
    setCurrentPage,
  } = useGlobalContext();

  const navigate = useNavigate();

  const [isLoginSuccessful, setIsLoginSuccessful] = useState<boolean>(true);

  // const handleChange = (e) => {
  //   let newUser: IUser = {
  //     ...currentUser,
  //     [e.target.name]: e.target.value,
  //   };
  //   setCurrentUser(newUser);
  // };

  const handleFormSubmission = (e) => {
    e.preventDefault();

    // if (e.target.form.checkValidity()) {
    //   setCurrentUser({ ...Users[0], ...currentUser });
    //   setCurrentUser(Users[0]);
    //   setIsLoginSuccessful(true);
    //   setIsLoggedIn(true);
    //   setIsEditing(false);
    //   navigate("/home");
    // } else {
    //   setIsLoginSuccessful(false);
    //   return;
    // }

    const formData = new FormData(e.currentTarget);
    const emailEntered = formData.get("Email");
    const pwdEntered = formData.get("Password");

    if (emailEntered === Users[0].Email && pwdEntered === Users[0].Password) {
      setCurrentUser(Users[0]);
      setTempUser(Users[0]);
      setIsLoginSuccessful(true);
      setIsLoggedIn(true);
      setIsEditing(false);
      setCurrentPage("AOHome")
      navigate("/home");
    } else {
    }
    setIsLoginSuccessful(false);
  };

  return (
    <div className="LoginExistingUserContainer">
      <h2>Existing User</h2>

      <div className="AlertContainer">
        {!isLoginSuccessful && (
          <Alert severity="warning">The login details are invalid.</Alert>
        )}
      </div>

      <form className="UserLoginForm" onSubmit={handleFormSubmission}>
        <label htmlFor="Email">Email Address</label>
        <input
          type="Email"
          name="Email"
          id="Email"
          // onChange={handleChange}
          required
        />
        <label htmlFor="Password">Password</label>
        <input
          type="password"
          name="Password"
          id="Password"
          // onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="GreenBtn"
          // onClick={(e) => handleFormSubmission(e)}
        >
          Login
        </button>
      </form>
      <p>For testing, please enter:</p>
      <p>Email address: test@bank.com</p>
      <p>Password: test</p>
      <p>
        <a href="#">Forgot your password?</a>
      </p>
    </div>
  );
};
export default ExistingUserLogin;
