import { useEffect } from "react";
import { useGlobalContext } from "../../common/GlobalContext";
import Form from "./Form";

const AccountDetails = () => {
  const { setCurrentPage } = useGlobalContext();

  useEffect(() => {
    setCurrentPage("AccountDetails");
  }, []);

  return (
    <div className="AccountDetailsPage">
      <br />

      <section className="AccountDetailsHeader">
        <h1>Account Details</h1>
      </section>

      <h2 className="DemoWarning">DEMO ONLY</h2>

      <Form />
    </div>
  );
};
export default AccountDetails;
