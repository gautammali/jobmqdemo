import moment from "moment";
import Action from "./Components/Action";
import Attachment from "./Components/Attachment";
import CandidateName from "./Components/CandidateName";
import Message from "./Components/Message";
import Status from "./Components/Status";

export const COLUMNS = [
  {
    Header: "Candidate",
    accessor: "name",
    Cell: ({ row }) => ( <CandidateName data={row.original} />),
  },
  {
    Header: "Applied job",
    accessor: "jobTitle",
  },
  {
    Header: "Message",
    accessor: "email",//this is not used for this column it's comming from the candidate table
    Cell: ({ row }) => <Message job={row.original} />,
    
  },
  {
    Header: "Attachment",
    accessor: "contactNo",//this is not used for this column it's comming from the candidate table
    Cell: ({ row }) => <Attachment data={row.original.attachment} />,
    
  },
  {
    Header: "Applied Date",
    Cell: ({ row }) => <p>{moment(row.original.appliedDate).format("MMM DD YYYY")}</p>,
    
  },
  {
    Header: "Status",
    accessor: "status",
    Cell: ({ row }) => <Status data={row.original.status} />,
    
    
  },
  {
    Header: "Action",
    Cell: ({ row }) =><Action data={row.original} />,
    
  },
];
