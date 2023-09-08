import { useState } from "react";
import Users from "../Users";
import { useGlobalContext } from "./GlobalContext";
import { Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AccountDetails = () => {
  const {
    currentUser,
    setCurrentUser,
    isLoggedIn,
    setIsLoggedIn,
    setCurrentPage,
  } = useGlobalContext();

  const navigate = useNavigate();

  const [isDisabled, setIsDisabled] = useState(isLoggedIn);

  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

  const [isError, setIsError] = useState(false);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    let newUser = {
      ...currentUser,
      [e.target.name]: e.target.value,
    };
    if (newUser.BusinessStructure !== "Other") {
      newUser.BusinessStructureDescription = "";
    }
    setCurrentUser(newUser);
  };

  const handleFormSubmission = (e, action) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (action === "submit" && isLoggedIn) {
      if (!e.target.form.checkValidity()) {
        setIsError(true);
        return;
      } else {
        setIsDisabled(true);
        setIsSubmitSuccessful(true);
        setIsError(false);
      }
    } else if (action === "cancel" && isLoggedIn) {
      setIsDisabled(true);
    } else if (action === "submit" && !isLoggedIn) {
      if (!e.target.form.checkValidity()) {
        setIsError(true);
        return;
      } else {
        navigate("/home");
        setIsLoggedIn(true);
      }
    } else if (action === "edit") {
      setIsDisabled(false);
      setIsSubmitSuccessful(false);
    } else if (action === "cancel" && !isLoggedIn) {
      setCurrentUser({});
      navigate("/home");
    } else {
      throw new Error("unhandled condition");
    }
  };

  return (
    <div className="AccountDetailsPage">
      <br />
      {isLoggedIn ? (
        <section className="AccountDetailsHeader">
          <h1>Account Details</h1>
        </section>
      ) : (
        <section className="AccountDetailsHeader">
          <h1>AUSTRAC Online Registration</h1>
          <p>
            AUSTRAC Online allows you to provide and receive information from
            AUSTRAC and assists you to meet your obligations under the
            Anti-Money Laundering and Counter-Terrorism Financing Act 2006 and
            the Financial Transaction Reports Act 1988.
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
      )}
      <h2 className="DemoWarning">DEMO ONLY</h2>
      <div className="AlertContainer">
        {isSubmitSuccessful && (
          <Alert
            onClose={() => {
              setIsSubmitSuccessful(false);
            }}
          >
            Update successful.
          </Alert>
        )}
      </div>
      <div className="AlertContainer">
        {isError && (
          <Alert severity="warning">
            The form contains error(s). Please review and submit again. You can
            hover over each input field to view the requirement.
          </Alert>
        )}
      </div>
      <form
        className={
          isSubmitted ? "AccountDetailsForm Submitted" : "AccountDetailsForm"
        }
      >
        <br />
        <p>Fields marked with an asterisk (*) are mandatory.</p>
        <br />
        <h3>Business Details</h3>
        <br />
        <li className="AccountDetailInputField">
          <label htmlFor="BusinessName">Business Name*</label>
          <input
            type="text"
            name="BusinessName"
            id="BusinessName"
            title="Mandatory. Maximum length allowed is 100 letters"
            value={currentUser.BusinessName}
            onChange={handleChange}
            disabled={isDisabled}
            maxLength="100"
            required
          />
          <span></span>
        </li>

        <li className="AccountDetailInputField">
          <label htmlFor="BusinessStructure">Business Structure*</label>
          <select
            name="BusinessStructure"
            id="BusinessStructure"
            title="Mandatory. Please select one."
            value={currentUser.BusinessStructure}
            onChange={handleChange}
            disabled={isDisabled}
            required
          >
            <option value="">-- Please select --</option>
            <option value="Company">Company</option>
            <option value="SoleTrader">Sole Trader</option>
            <option value="Partnership">Partnership</option>
            <option value="Trustee">Trustee</option>
            <option value="Other">Other</option>
          </select>
          <span></span>
        </li>
        {currentUser.BusinessStructure === "Other" && (
          <li className="AccountDetailInputField">
            <label htmlFor="BusinessStructureDescription">
              Business Structure Description
            </label>
            <textarea
              name="BusinessStructureDescription"
              id="BusinessStructureDescription"
              title="Mandatory if business structure 'Other' is selected. Maximum length allowed is 100 letters"
              value={currentUser.BusinessStructureDescription}
              onChange={handleChange}
              disabled={isDisabled}
              placeholder="Please enter a description for the business structure"
              maxLength="100"
              required
            ></textarea>
            <span></span>
          </li>
        )}
        <li className="AccountDetailInputField">
          <label htmlFor="ABN">ABN*</label>

          <input
            type="text"
            name="ABN"
            id="ABN"
            title="Mandatory. Must be 11 digits in length."
            value={currentUser.ABN}
            onChange={handleChange}
            disabled={isDisabled}
            required
            pattern="[0-9]{11}"
            minLength="11"
            maxLength="11"
            onInput={(e) =>
              (e.target.value = e.target.value.slice(0, 11)) &&
              (e.nativeEvent.data === "." ||
                e.nativeEvent.data === " " ||
                isNaN(e.target.value)) &&
              (e.target.value = currentUser.ABN)
            }
          />
          <span></span>
        </li>
        {/* How to set max numeric length using onInput: https://stackoverflow.com/questions/18510845/maxlength-ignored-for-input-type-number-in-chrome */}
        <br />
        <br />
        <h3>Declaration</h3>
        <br />
        <li className="AccountDetailInputField">
          <label htmlFor="FirstName">First Name*</label>
          <input
            type="text"
            name="FirstName"
            title="Mandatory. Maximum length allowed is 100 letters"
            value={currentUser.FirstName}
            onChange={handleChange}
            disabled={isDisabled}
            required
          />
          <span></span>
        </li>
        <li className="AccountDetailInputField">
          <label htmlFor="Surname">Surname*</label>
          <input
            type="text"
            name="Surname"
            title="Mandatory. Maximum length allowed is 100 letters"
            value={currentUser.Surname}
            onChange={handleChange}
            disabled={isDisabled}
            required
          />
          <span></span>
        </li>
        <li className="AccountDetailInputField">
          <label htmlFor="Email">Email*</label>
          <input
            type="email"
            name="Email"
            id="Email"
            title="Mandatory. Please enter a valid email address."
            value={currentUser.Email}
            onChange={handleChange}
            disabled={isDisabled}
            required
          />
          <span></span>
        </li>
        <li className="AccountDetailInputField">
          <label htmlFor="Password">Password*</label>
          <input
            type="password"
            name="Password"
            id="Password"
            title="Mandatory. Maximum length allowed is 50 characters"
            maxLength="50"
            value={currentUser.Password}
            onChange={handleChange}
            disabled={isDisabled}
            required
          />
          <span></span>
        </li>
        <li className="AccountDetailInputField">
          <label htmlFor="DOB">Date of Birth*</label>
          <input
            type="date"
            name="DOB"
            title="Mandatory"
            value={currentUser.DOB}
            onChange={handleChange}
            disabled={isDisabled}
            max={new Date().toISOString().slice(0, -8).split("T")[0]}
            required
          />
          <span></span>
        </li>
        {/* Setting max date to today: https://stackoverflow.com/questions/67423091/react-jsx-add-min-date-time-to-datetime-local-input */}

        <div className="AccountDetailButtons">
          {isDisabled ? (
            <button
              className="GreenBtn"
              onClick={(e) => handleFormSubmission(e, "edit")}
            >
              Edit
            </button>
          ) : (
            <>
              <button
                className="GreyBtn"
                onClick={(e) => handleFormSubmission(e, "cancel")}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="GreenBtn"
                onClick={(e) => handleFormSubmission(e, "submit")}
              >
                Submit
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
};
export default AccountDetails;
