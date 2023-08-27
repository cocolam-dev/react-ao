import { MdOutlineOpenInNew } from "react-icons/md";
import { useGlobalContext } from "./GlobalContext";

const AOHome = () => {
  const { currentUser } = useGlobalContext();
  return (
    <div className="AOHomePage">
      <section>
        <h1>Welcome, {currentUser.Username}, to AUSTRAC Online</h1>
        <h2 className="DemoWarning">DEMO ONLY</h2>
        <h2>Announcements</h2>
        <hr />
        <p>
          A reminder that any changes to your AUSTRAC enrolment details must be
          updated within 14 days.
        </p>
        <p>
          To update your enrolment details, please go to "Account Details" page.
        </p>
        <hr />
        <a
          href="https://www.austrac.gov.au/business/austrac-online"
          target="_blank"
        >
          <span>AUSTRAC Online User Guide</span>
          <MdOutlineOpenInNew />
        </a>
      </section>
    </div>
  );
};
export default AOHome;
