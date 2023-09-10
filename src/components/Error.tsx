import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="ErrorPage">
      <h1>404 Error</h1>
      <p>Page not found</p>

      <Link to="/" className="GreenBtn">
        Login
      </Link>
    </section>
  );
};

export default Error;
