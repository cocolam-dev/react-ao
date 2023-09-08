import Users from "../Users";
import { useGlobalContext } from "./GlobalContext";
import { useNavigate } from "react-router-dom";

const LoginNewUser = () => {
  const navigate = useNavigate();

  const { setCurrentPage, setCurrentUser } = useGlobalContext();
  return (
    <div className="LoginNewUserContainer">
      <h2>New User</h2>
      <button
        className="GreenBtn"
        onClick={() => {
          setCurrentUser(Users[1]);
          navigate("/accountdetails");
        }}
      >
        Sign Up
      </button>
      <p>
        <a
          href="https://www.austrac.gov.au/business/new-to-austrac/check-if-you-need-enrol-or-register"
          target="_blank"
        >
          Who needs to sign up?
        </a>
      </p>
    </div>
  );
};
export default LoginNewUser;
