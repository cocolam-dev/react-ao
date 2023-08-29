import { useState } from "react";
import Users from "../Users";
import { useGlobalContext } from "./GlobalContext";
import { Alert } from "@mui/material";

const AccountDetails = () => {
  const {
    currentUser,
    setCurrentUser,
    isLoggedIn,
    setIsLoggedIn,
    setCurrentPage,
  } = useGlobalContext();

  const [isDisabled, setIsDisabled] = useState(isLoggedIn);

  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

  const handleChange = (e) => {
    setCurrentUser({ ...currentUser, [e.target.name]: e.target.value });
  };

  const handleFormSubmission = (e, action) => {
    e.preventDefault();
    // const formData = new FormData(e.currentTarget);
    // const newUser = Object.fromEntries(formData);

    if (action === "submit" && isLoggedIn) {
      setIsDisabled(true);
      setIsSubmitSuccessful(true);
    } else if (action === "cancel" && isLoggedIn) {
      setIsDisabled(true);
    } else if (action === "submit" && !isLoggedIn) {
      setCurrentPage("AOHome");
      setIsLoggedIn(true);
    } else if (action === "edit") {
      setIsDisabled(false);
      setIsSubmitSuccessful(false);
    } else if (action === "cancel" && !isLoggedIn) {
      setCurrentPage("Login");
    } else {
      throw new Error("unhandled condition");
    }
  };

  return (
    <div className="AccountDetailsPage">
      <h1>Account Details</h1>
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
      <form className="AccountDetailsForm">
        <div className="AccountDetailInputField">
          <label htmlFor="Username">Username</label>
          <input
            type="text"
            name="Username"
            id="Username"
            value={currentUser.Username}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </div>
        <div className="AccountDetailInputField">
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            name="Password"
            value={currentUser.Password}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </div>
        <div className="AccountDetailInputField">
          <label htmlFor="ConfirmPassword">Confirm Password</label>
          <input
            type="password"
            name="ConfirmPassword"
            value={currentUser.Password}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </div>
        <div className="AccountDetailInputField">
          <label htmlFor="FirstName">First Name</label>
          <input
            type="text"
            name="FirstName"
            value={currentUser.FirstName}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </div>
        <div className="AccountDetailInputField">
          <label htmlFor="Surname">Surname</label>
          <input
            type="text"
            name="Surname"
            value={currentUser.Surname}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </div>
        <div className="AccountDetailInputField">
          <label htmlFor="WorkTitle">Work Title</label>
          <input
            type="text"
            name="WorkTitle"
            value={currentUser.WorkTitle}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </div>
        <div className="AccountDetailInputField">
          <label htmlFor="AccessType">Access Type</label>
          <select
            name="AccessType"
            value={currentUser.AccessType}
            disabled={isDisabled}
            onChange={handleChange}
          >
            <option value="Administrator">Administrator</option>
            <option value="ApprovalandSubmission">
              Approval and Submission
            </option>
            <option value="DataEntry">Data Entry</option>
          </select>
        </div>
        <div className="AccountDetailInputField">
          <label htmlFor="BusinessName">Business Name</label>
          <input
            type="text"
            name="BusinessName"
            value={currentUser.BusinessName}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </div>
        <div className="AccountDetailInputField">
          <label htmlFor="BusinessAddressLine1">Business Address line 1</label>
          <input
            type="text"
            name="BusinessAddressLine1"
            value={currentUser.BusinessAddressLine1}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </div>
        <div className="AccountDetailInputField">
          <label htmlFor="BusinessAddressLine2">Business Address line 2</label>
          <input
            type="text"
            name="BusinessAddressLine2"
            value={currentUser.BusinessAddressLine2}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </div>
        <div className="AccountDetailInputField">
          <label htmlFor="Suburb">Suburb</label>
          <input
            type="text"
            name="Suburb"
            value={currentUser.Suburb}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </div>
        <div className="AccountDetailInputField">
          <label htmlFor="State">State</label>
          <select
            name="State"
            disabled={isDisabled}
            onChange={handleChange}
            value={currentUser.State}
          >
            <option name="State" value="NSW">
              NSW
            </option>
            <option name="State" value="ACT">
              ACT
            </option>
            <option name="State" value="NT">
              NT
            </option>
            <option name="State" value="QLD">
              QLD
            </option>
            <option name="State" value="SA">
              SA
            </option>
            <option name="State" value="TAS">
              TAS
            </option>
            <option name="State" value="WA">
              WA
            </option>
          </select>
        </div>
        <div className="AccountDetailInputField">
          <label htmlFor="Postcode">Postcode</label>
          <input
            type="number"
            name="Postcode"
            value={currentUser.Postcode}
            maxLength="4"
            onChange={handleChange}
            disabled={isDisabled}
          />
        </div>
        <div className="AccountDetailInputField">
          <label htmlFor="PhoneNumber">Phone Number</label>
          <input
            type="number"
            name="PhoneNumber"
            value={currentUser.PhoneNumber}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </div>

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
