import moment from "moment";
import Action from "./Components/Action";
// import Attachment from "./Components/Attachment";
// import Comments from "./Components/Comments";
// import Status from "./Components/Status";

export const COLUMNS = [
  {
    Header: "Application ID",
    accessor: "applicationID",
    Cell: ({ row }) => (<p className="pl-3">{row?.original?.applicationID}</p>),
  },
  // {
  //   Header: "JOB ID",
  //   accessor: "jobId",
  //   // Cell: ({ row }) => ( <CandidateName data={row.original} />),
  // },
  {
    Header: "JOB Tittle",
    accessor: "jobTitle",
    // Cell: ({ row }) => ( <CandidateName data={row.original} />),
  },
  {
    Header: "Organization Name",
    accessor: "companyName",
  },
  {
    Header: "Application Date",
    accessor: "appliedDate",//this is not used for this column it's comming from the candidate table
    Cell: ({ row }) => <p>{moment(row.original.appliedDate).format("MMM DD YYYY")}</p>,

  },
  {
    Header: "Comments",
    accessor: "comment",//this is not used for this column it's comming from the candidate table
    Cell: ({ row }) => row.original.comment ?? "No comment",

  },
  {
    Header: "Interview Date",
    Cell: ({ row }) => <p>{moment(row.original.interviewDate).format("MMM DD YYYY")}</p>,

  },
  {
    Header: "Status",
    accessor: "status",
    // Cell: ({ row }) => <Status data={row.original.status} />,


  },
  {
    Header: "Action",
    Cell: ({ row }) =><Action data={row.original} />,

  },
];
