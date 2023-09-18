import { ChangeEvent, MouseEvent } from "react";
import { useGlobalContext } from "../../common/GlobalContext";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../common/TSInterface";
import { Action } from "./Action";
import { Alert } from "@mui/material";

const Form = () => {
  const {
    currentUser,
    setCurrentUser,
    isLoggedIn,
    setIsLoggedIn,
    isEditing,
    setIsEditing,
    isSubmitted,
    setIsSubmitted,
    isSubmitSuccessful,
    setIsSubmitSuccessful,
    isError,
    setIsError,
    tempUser,
    setTempUser,
    setCurrentPage,
  } = useGlobalContext();

  const navigate = useNavigate();

  //   const [isDisabled, setIsDisabled] = useState<boolean>(isLoggedIn);

  //   const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  //   const [isSubmitSuccessful, setIsSubmitSuccessful] = useState<boolean>(false);

  //   const [isError, setIsError] = useState<boolean>(false);

  //https://stackoverflow.com/questions/42081549/typescript-react-event-types
  //https://claritydev.net/blog/typescript-typing-form-events-in-react

  const handleFormSubmission = (
    e:
      | ChangeEvent<
          | HTMLFormElement
          | HTMLInputElement
          | HTMLTextAreaElement
          | HTMLSelectElement
        >
      | MouseEvent<HTMLButtonElement>,
    action: Action
  ) => {
    e.preventDefault();
    setIsSubmitted(true);

    const target = e.target as HTMLFormElement;

    if (action === Action.SUBMIT && isLoggedIn) {
      if (!target.form.checkValidity()) {
        setIsError(true);
        return;
      } else {
        setIsEditing(false);
        setIsSubmitSuccessful(true);
        setIsError(false);

        setCurrentUser(tempUser);
      }

      // const formData = new FormData(e.currentTarget);
      // const newUser = Object.fromEntries(formData);
      // console.log(newUser);
    } else if (action === Action.CANCEL && isLoggedIn) {
      setIsEditing(false);
      setTempUser(currentUser);
      setIsError(false);
    } else if (action === Action.SUBMIT && !isLoggedIn) {
      if (!target.form.checkValidity()) {
        setIsError(true);
        return;
      } else {
        navigate("/home");
        setIsLoggedIn(true);
        setIsEditing(false);
        setCurrentPage("AOHome");
        setCurrentUser(tempUser);

        // const formData = new FormData(e.currentTarget);
        // console.log(formData);
      }
    } else if (action === Action.EDIT) {
      setIsEditing(true);
      setIsSubmitSuccessful(false);
    } else if (action === Action.CANCEL && !isLoggedIn) {
      setCurrentUser({} as IUser);
      navigate("/home");
    } else {
      throw new Error("unhandled condition");
    }
  };

  const handleChange = (
    e: ChangeEvent<
      | HTMLFormElement
      | HTMLInputElement
      | HTMLTextAreaElement
      | HTMLSelectElement
    >
  ) => {
    let newUser = {
      ...tempUser,
      [e.target.name]: e.target.value,
    };
    if (newUser.BusinessStructure !== "Other") {
      newUser.BusinessStructureDescription = "";
    }
    setTempUser(newUser);
  };

  return (
    <form
      className={
        isSubmitted ? "AccountDetailsForm Submitted" : "AccountDetailsForm"
      }
      // onSubmit={(e: ChangeEvent<HTMLFormElement>) =>
      //   handleFormSubmission(e, Action.SUBMIT)
      // }
    >
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
          <Alert
            severity="warning"
            onClose={() => {
              setIsError(false);
            }}
          >
            The form contains error(s). Please review and submit again. You can
            hover over each input field to view the requirement.
          </Alert>
        )}
      </div>
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
          value={tempUser.BusinessName}
          onChange={handleChange}
          disabled={!isEditing}
          maxLength={100}
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
          value={tempUser.BusinessStructure}
          onChange={handleChange}
          disabled={!isEditing}
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
            value={tempUser.BusinessStructureDescription}
            onChange={handleChange}
            disabled={!isEditing}
            placeholder="Please enter a description for the business structure"
            maxLength={100}
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
          value={tempUser.ABN}
          onChange={handleChange}
          disabled={!isEditing}
          required
          pattern="[0-9]{11}"
          minLength={11}
          maxLength={11}
          onInput={(e: ChangeEvent<HTMLInputElement>) => {
            const target = e.target as HTMLInputElement;
            const nativeEvent = e.nativeEvent as unknown as HTMLFormElement;
            (target.value = target.value.slice(0, 11)) &&
              (nativeEvent.data === "." ||
                nativeEvent.data === " " ||
                isNaN(target.value as any)) &&
              (target.value = currentUser.ABN);
          }}
          //unsure of the use of unknown and any
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
          value={tempUser.FirstName}
          onChange={handleChange}
          disabled={!isEditing}
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
          value={tempUser.Surname}
          onChange={handleChange}
          disabled={!isEditing}
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
          value={tempUser.Email}
          onChange={handleChange}
          disabled={!isEditing}
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
          maxLength={50}
          value={tempUser.Password}
          onChange={handleChange}
          disabled={!isEditing}
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
          value={tempUser.DOB}
          onChange={handleChange}
          disabled={!isEditing}
          max={new Date().toISOString().slice(0, -8).split("T")[0]}
          required
        />
        <span></span>
      </li>
      {/* Setting max date to today: https://stackoverflow.com/questions/67423091/react-jsx-add-min-date-time-to-datetime-local-input */}

      <div className="AccountDetailButtons">
        {!isEditing ? (
          <button
            className="GreenBtn"
            onClick={(e: MouseEvent<HTMLButtonElement>) =>
              handleFormSubmission(e, Action.EDIT)
            }
          >
            Edit
          </button>
        ) : (
          <>
            <button
              className="GreyBtn"
              onClick={(e: MouseEvent<HTMLButtonElement>) =>
                handleFormSubmission(e, Action.CANCEL)
              }
            >
              Cancel
            </button>
            <button
              type="submit"
              className="GreenBtn"
              onClick={(e: MouseEvent<HTMLButtonElement>) =>
                handleFormSubmission(e, Action.SUBMIT)
              }
            >
              Submit
            </button>
          </>
        )}
      </div>
    </form>
  );
};
export default Form;
