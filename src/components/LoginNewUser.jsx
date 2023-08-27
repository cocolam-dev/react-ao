import { useGlobalContext } from "./GlobalContext";

const LoginNewUser = () => {
  const { setCurrentPage } = useGlobalContext();
  return (
    <div className="LoginNewUserContainer">
      <h2>New User</h2>
      <button
        className="GreenBtn"
        onClick={() => setCurrentPage("AccountDetails")}
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
