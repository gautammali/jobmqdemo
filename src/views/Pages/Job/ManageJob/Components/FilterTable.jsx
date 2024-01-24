import React from "react";
import { useAsyncDebounce } from "react-table";
export default function FilterTable({ globalFilter, setGlobalFilter }) {
  const [value, setValue] = React.useState(globalFilter);

  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 1000);
  return (
    <div className="flex items-center gap-2">
      <h4>Search: </h4>
      <input
        type="text"
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        className="border mx-2 px-4 py-1 rounded"
        placeholder="Search by Candidate"
      />
    </div>
  );
}
