import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function SearchJob({ jobListing }) {
  const jobListData = useSelector((state) => state.jobList);
  const [location, setLocation] = useState("");
  const [keyword, setKeyword] = useState("");

  const handleSearch = (e) => {
    jobListing({ ...jobListData, location, keyword });
    e.preventDefault();
  };
  return (
    <>
      <form
        onSubmit={handleSearch}
        className="container grid grid-cols-5 py-4 bg-white shadow-md"
      >
        <div className="col-span-2 p-5  space-y-2">
          <label htmlFor="keywords" className="font-bold">
            Keywords
          </label>
          <div className="relative border rounded-lg border-gray-600 overflow-hidden">
            <input
              onChange={(e) => setKeyword(e.target.value)}
              type="text"
              id="keywords"
              name="keywords"
              placeholder="Enter search keywords"
              className="w-full border-0 outline-0 pr-8 pl-12 py-2"
            />
            <FaSearch className="absolute left-3 top-3 " />
          </div>
        </div>
        <div className="col-span-2 p-5 pl-0 space-y-2">
          <label htmlFor="location" className="font-bold">
            location
          </label>
          <div className="relative border rounded-lg border-gray-600 overflow-hidden">
            <input
              onChange={(e) => setLocation(e.target.value)}
              type="text"
              id="location"
              name="location"
              placeholder="Enter search location"
              className="w-full border-0 outline-0 pr-8 pl-12 py-2"
            />
            <FaSearch className="absolute left-3 top-3 " />
          </div>
        </div>
        <div className="col-span-1 flex items-center w-fit text-white font-semibold pt-6">
          <button
            type="submit"
            className="px-8 py-3 rounded-full flex gap-2 w-max items-center bg-[#0076BD]"
          >
            {" "}
            <FaSearch /> Search
          </button>
        </div>
      </form>
      {/* <form onSubmit={handleSearch} className="h-12 flex gap-3 ">
        <div className="flex border border-gray-400 rounded-lg h-full ">
          <div className="relative">
            <input
              onChange={(e) => setDesingnation(e.target.value)}
              type="text"
              className="border-none outline-none rounded-lg h-full px-2 capitalize"
            />
            <p className="absolute -top-6 left-8">Role</p>
          </div>
          <div className="bg-sky-400 flex justify-center items-center text-white w-14 h-full text-2xl">
            <FaLinkedinIn />
          </div>
          <div className="relative">
            <input
              onChange={(e) => setLocation(e.target.value)}
              type="text"
              className="border-none outline-none rounded-lg h-full px-2 capitalize"
            />
            <p className="absolute -top-6 left-8">Where</p>
          </div>
        </div>
        <div className="w-[223px] h-full">
          <button
            type="submit"
            className="font-bold text-white text-lg w-full h-full  bg-sky-700 rounded-lg"
          >
            Search
          </button>
        </div>
      </form> */}
    </>
  );
}
