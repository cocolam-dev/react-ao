import logo from "../images/austrac-logo.svg";

const Navbar = () => {
  return (
    <nav>
      <div className="Logo">
        <a href="https://www.austrac.gov.au/" target="_blank">
          <img src={logo} alt="AUSTRAC" />
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
