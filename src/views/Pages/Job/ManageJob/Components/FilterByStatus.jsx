import React from "react";

export default function FilterByStatus({ columns }) {
  const statusColumn = columns?.find((col) => col.Header === "Status");

  const { filterValue, setFilter } = statusColumn;
  return (
    <select
      value={filterValue || ""}
      onChange={(e) => setFilter(e.target.value || undefined)}
      name="allStatus"
      id="allStatus"
      className="border mx-2 px-4 py-2 max-w-[130px] rounded"
    >
      <option value="">All Status</option>
      {[
        "Submitted",
        "Under Review",
        "On Hold",
        "Rejected",
        "Interview Scheduled",
        "Hired",
        "More Information",
      ].map((item) => (
        <option key={item} value={item}>{item}</option>
      ))}
      
    </select>
  );
}
