import Users from "./Users";
import { useGlobalContext } from "../../common/GlobalContext";
import { useNavigate } from "react-router-dom";

const NewUserSignUp = () => {
  const navigate = useNavigate();

  const { setCurrentUser, setIsError, setTempUser, setCurrentPage } =
    useGlobalContext();
  return (
    <div className="LoginNewUserContainer">
      <h2>New User</h2>
      <button
        className="GreenBtn"
        onClick={() => {
          setCurrentUser(Users[1]);
          setTempUser(Users[1]);
          setIsError(false);
          setCurrentPage("SignUpDetails")
          navigate("/signup");
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
export default NewUserSignUp;
