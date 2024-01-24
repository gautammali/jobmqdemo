import React from "react";
import { BsWhatsapp } from "react-icons/bs";
export default function CandidateName({ data }) {

  return (
    <div className="pl-2">
      <h6 className="text-black font-bold">{data.name}</h6>
      <p className="italic">{data?.email}</p>
      <p className="italic flex items-center gap-1.5">
        Phone: <span>{data?.contactNo}</span>
        <a href={`https://wa.me/${data?.contactNo}`} target="_blank" rel="noopener noreferrer">
          <BsWhatsapp fontSize={15} />
        </a>
      </p>
    </div>
  );
}
