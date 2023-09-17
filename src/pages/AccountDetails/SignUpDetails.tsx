import Form from "./Form";

const SignUpDetails = () => {
  return (
    <div className="AccountDetailsPage">
      <section className="AccountDetailsHeader">
        <h1>AUSTRAC Online Registration</h1>
        <p>
          AUSTRAC Online allows you to provide and receive information from
          AUSTRAC and assists you to meet your obligations under the Anti-Money
          Laundering and Counter-Terrorism Financing Act 2006 and the Financial
          Transaction Reports Act 1988.
        </p>
        <br />
        <p>
          Please
          <a
            href="https://www.austrac.gov.au/business/new-to-austrac/check-if-you-need-enrol-or-register"
            target="_blank"
          >
            {" click here "}
          </a>
          to check if you need to enrol or register.
        </p>
      </section>

      <h2 className="DemoWarning">DEMO ONLY</h2>

      <Form />
    </div>
  );
};
export default SignUpDetails;
