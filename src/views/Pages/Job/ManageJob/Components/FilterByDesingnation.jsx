import React from "react";

export default function FilterByDesingnation({
  data,
  columns
}) {
  const options = data.map((item) => item.jobTitle);
  const statusColumn = columns?.find((col) => col.Header === "Applied job");
  const { filterValue, setFilter } = statusColumn;
  return (
    <div className="">
      <select
      
        value={filterValue || ""}
        onChange={(e) => 
          setFilter(e.target.value)
        }
        name="designation"
        id="designation"
        className="border mx-2 px-4 py-2 max-w-[120px] rounded"
      >
        <option value="">All jobs</option>
        {options?.map((item, id) => (
          <option key={id} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
