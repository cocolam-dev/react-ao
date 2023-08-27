import LoginExistingUser from "./LoginExistingUser";
import LoginNewUser from "./LoginNewUser";
import { useGlobalContext } from "./GlobalContext";

const Login = ({ setCurrentPage }) => {
  const { isLoggedIn, setIsLoggedIn } = useGlobalContext();
  return (
    <div className="LoginPage">
      <section>
        <h1>AUSTRAC Online</h1>
        <div className="LoginContainer">
          <LoginExistingUser />
          <LoginNewUser setCurrentPage={setCurrentPage} />
        </div>
      </section>
      <footer className="LoginFooter">
        <p>
          If you require assistance, please contact the AUSTRAC Contact Centre
          on email: contact@austrac.gov.au
        </p>
        <p>
          Ph (within Australia): 1300 021 037 - Ph (international): +61 2 9950
          0055
        </p>
        <p>
          If you need a translator in order to speak to AUSTRAC, please call the
          Translating and Interpreting Service on 131 450
        </p>
        <p>and ask them to call AUSTRAC on 1300 021 037.</p>
        <p>
          For more information about AUSTRAC, please visit the
          <a href="https://www.austrac.gov.au/" target="_blank">
            {" AUSTRAC website"}
          </a>
          .
        </p>
      </footer>
    </div>
  );
};

export default Login;
