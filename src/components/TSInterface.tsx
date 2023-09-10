export interface IUser {
  BusinessName: string;
  BusinessStructure: string;
  BusinessStructureDescription: string;
  ABN: string;
  FirstName: string;
  Surname: string;
  Email: string;
  Password: string;
  DOB: string;
}

export interface ITR {
  ReceiptNumber: string;
  ReportType: string;
  FileName: string;
  SubmitMethod: string;
  SubmissionDate: string;
  User: string;
  ReportingEntity: string;
}

export interface IGlobalContext {
  currentUser: IUser;
  setCurrentUser: (user: IUser) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  currentPage: string;
  setCurrentPage: (setCurrentPage: string) => void;
  isMenuExpanded: boolean;
  setIsMenuExpanded: (setIsMenuExpanded: boolean) => void;
  tRList: ITR[];
  setTRList: (setTRList: ITR[]) => void;
}
