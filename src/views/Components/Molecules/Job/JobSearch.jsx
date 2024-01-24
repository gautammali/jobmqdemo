import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateFilter } from "../../../../features/job/jobListSlice";

export default function JobSearch() {
  const dispatch = useDispatch();
  const [location, setLocation] = useState("");
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(updateFilter({ location, keyword }));
    setTimeout(() => {
      navigate("/jobs");
    }, 200);
  };
  return (
    <form
      onSubmit={handleSearch}
      className="container flex flex-col sm:flex-row justify-center items-center gap-4 py-10 bg-white shadow-md"
    >
      <input
        onChange={(e) => setKeyword(e.target.value)}
        type="text"
        id="keywords"
        name="keywords"
        placeholder="Enter search keywords"
        className="border border-site- border-200 max-w-[422px] w-full h-[57px] rounded-[5px] text-[17px] font-normal font-roboto leading-[26px] flex justify-center items-center boxShadow px-4"
      />



      <input
        onChange={(e) => setLocation(e.target.value)}
        type="text"
        id="location"
        name="location"
        placeholder="Enter search location"
        className="border border-site- border-200 max-w-[422px] w-full h-[57px] rounded-[5px] text-[17px] font-normal font-roboto leading-[26px] flex justify-center items-center boxShadow px-4"
      />

      <button
        type="submit"
        className="max-w-[140px] w-full h-[57px] bg-site-bg-300 rounded-[5px] text-white text-[22px] font-normal font-roboto leading-[33px] flex justify-center items-center boxShadow"
      >
        Search
      </button>
    </form>
  );
}
