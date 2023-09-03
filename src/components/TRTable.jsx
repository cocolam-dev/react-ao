import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TRS from "../TRs";
import { useGlobalContext } from "./GlobalContext";
import { styled } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#5ec4b4",
    color: theme.palette.common.white,
    fontWeight: "bold",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function TRTable() {
  const { currentUser, tRList, setTRList } = useGlobalContext();
  const rows = tRList;
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>Receipt Number</StyledTableCell>
              <StyledTableCell align="right">Report Type</StyledTableCell>
              <StyledTableCell align="right">File Name</StyledTableCell>
              <StyledTableCell align="right">Submit Method</StyledTableCell>
              <StyledTableCell align="right">Submission Date</StyledTableCell>
              <StyledTableCell align="right">User</StyledTableCell>
              <StyledTableCell align="right">Reporting Entity</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow
                key={row.ReceiptNumber}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">
                  {row.ReceiptNumber}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.ReportType}
                </StyledTableCell>
                <StyledTableCell align="right">{row.FileName}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.SubmitMethod}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.SubmissionDate}
                </StyledTableCell>
                <StyledTableCell align="right">{row.User}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.ReportingEntity}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <hr />
    </>
  );
}
