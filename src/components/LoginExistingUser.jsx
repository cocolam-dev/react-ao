import { useGlobalContext } from "./GlobalContext";

const LoginExistingUser = () => {
  const { currentPage, setCurrentPage, isLoggedIn, setIsLoggedIn } =
    useGlobalContext();
  const handleFormInput = (e) => {
    console.log(e.target.value);
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    alert("Form submitted");
  };

  return (
    <div className="LoginExistingUserContainer">
      <h2>Existing User</h2>
      <form action="" className="UserLoginForm">
        <label name="UserName">User / Email Address</label>
        <input type="text" value="MockUser" onChange={handleFormInput} />
        <label name="Password">Password</label>
        <input
          type="password"
          value="MockPassword"
          onChange={handleFormInput}
        />
        <button
          className="GreenBtn"
          onClick={() => {
            setIsLoggedIn(true);
            setCurrentPage("AOHome");
          }}
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
