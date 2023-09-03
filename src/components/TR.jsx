import { useState } from "react";
import { useGlobalContext } from "./GlobalContext";

import TRTable from "./TRTable";
import { Alert } from "@mui/material";

const TR = () => {
  //   const { isLoggedIn, setIsLoggedIn, currentPage, setCurrentPage } =
  //     useGlobalContext();

  const { tRList, setTRList, currentUser } = useGlobalContext();

  const [isFileSelected, setIsFileSelected] = useState(
    !!document.getElementById("TRUpload")?.value
  );

  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

  const [receiptNumber, setReceiptNumber] = useState(0);

  const handleTRSubmit = (e) => {
    e.preventDefault();

    const min = Math.ceil(1000000);
    const max = Math.floor(9999999);
    const newReceiptNumber = Math.floor(Math.random() * (max - min) + min);
    setReceiptNumber(newReceiptNumber);

    let current = new Date();
    let cDate =
      current.getDate() +
      "." +
      (current.getMonth() + 1) +
      "." +
      current.getFullYear();

    let cTime =
      current.getHours() +
      ":" +
      current.getMinutes() +
      ":" +
      current.getSeconds();
    let dateTime = cDate + " " + cTime;

    // https://stackoverflow.com/questions/857618/javascript-how-to-extract-filename-from-a-file-input-control

    var fullPath = document.getElementById("TRUpload").value;
    if (fullPath) {
      var startIndex =
        fullPath.indexOf("\\") >= 0
          ? fullPath.lastIndexOf("\\")
          : fullPath.lastIndexOf("/");
      var filename = fullPath.substring(startIndex);
      if (filename.indexOf("\\") === 0 || filename.indexOf("/") === 0) {
        filename = filename.substring(1);
      }
    }

    setTRList([
      ...tRList,
      {
        ReceiptNumber: newReceiptNumber,
        ReportType: "TR",
        FileName: filename,
        SubmitMethod: "Manual",
        SubmissionDate: dateTime,
        User: `${currentUser.FirstName} ${currentUser.Surname}`,
        ReportingEntity: currentUser.BusinessName,
      },
    ]);
    document.getElementById("TRUpload").value = "";
    setIsSubmitSuccessful(true);
    setIsFileSelected(false);
  };
  return (
    <div className="TRPage">
      <section>
        <h1>Transaction Reporting</h1>
        <h2 className="DemoWarning">DEMO ONLY</h2>
        {isSubmitSuccessful && (
          <Alert
            onClose={() => {
              setIsSubmitSuccessful(false);
            }}
          >
            Upload Successful. Receipt Number: {receiptNumber}
          </Alert>
        )}
        <h2>Upload a transaction report</h2>
        <form className="TRUploadForm">
          <label htmlFor="TRUpload" className="Instruction">
            1. Select a transaction report to upload:
          </label>
          <div>
            <input
              type="file"
              id="TRUpload"
              name="TRUpload"
              className="UploadInput"
              onChange={(e) => {
                setIsFileSelected(!!e?.target?.value);
              }}
            />
          </div>
          <p>
            Maximum file size is 40MB. Files larger than this must be zipped.
          </p>
          <hr />
          <p className="Instruction">
            2. Click the Submit button to transmit the file to AUSTRAC.
          </p>
          <div>
            <button
              className="GreenBtn"
              id="TRSubmit"
              disabled={!isFileSelected}
              onClick={handleTRSubmit}
            >
              Submit
            </button>
          </div>
        </form>
        <hr />
        <TRTable />
      </section>
    </div>
  );
};
export default TR;
