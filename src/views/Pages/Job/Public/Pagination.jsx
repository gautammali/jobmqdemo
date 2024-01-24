import { Fragment, useEffect, useState } from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { useSelector } from "react-redux";

export default function Pagination({ pagesize, totalCount, jobListing }) {
  // const [jobListing, { data, isLoading }] = useJobListingMutation();
  const jobListData = useSelector((state) => state.jobList);
  const [paginateDate, setPaginateDate] = useState([]);
  // const totalRecords = totalCount;
  // const pageSize = pagesize;
  // const currentPage = jobListData?.pageNo;

  useEffect(() => {
    setPaginateDate(
      generatePaginationHistory(jobListData?.pageNo, totalCount, pagesize)
    );
    return () => {};
  }, [jobListData?.pageNo, pagesize, totalCount]);

  const handleJobListing = (pageNo) => {
    jobListing({ ...jobListData, pageNo });
  };
  return (
    <div className="container flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <p className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
          Previous
        </p>
        <p className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
          Next
        </p>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to{" "}
            <span className="font-medium">
              {pagesize > totalCount ? totalCount : pagesize}
            </span>{" "}
            of <span className="font-medium">{totalCount}</span> results
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            {paginateDate.map((item, id) => (
              <Fragment key={id}>
                {item.type === "prev" && (
                  <p
                    className={`${
                      item.value === null && "cursor-not-allowed "
                    } relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20`}
                    onClick={() => handleJobListing(item.value)}
                  >
                    <span className="sr-only">Previous</span>
                    <HiOutlineChevronLeft
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  </p>
                )}
                {item.type === "currentPage" && (
                  <p
                    onClick={() => handleJobListing(item.value)}
                    className="relative z-10 inline-flex items-center cursor-pointer border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20"
                  >
                    {item.value}
                  </p>
                )}
                {item.type === "page" && (
                  <p
                    onClick={() => handleJobListing(item.value)}
                    className="relative inline-flex items-center cursor-pointer border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                  >
                    {item.value}
                  </p>
                )}
                {item.type === "next" && (
                  <p
                    onClick={() => handleJobListing(item.value)}
                    className={`${
                      item.value === null && "cursor-not-allowed "
                    } relative inline-flex items-center cursor-pointer rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20`}
                  >
                    <span className="sr-only">Next</span>
                    <HiOutlineChevronRight
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  </p>
                )}
              </Fragment>
            ))}

            {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
          </nav>
        </div>
      </div>
    </div>
  );
}

function calculateNumberOfPages(totalRecords, pageSize) {
  return Math.ceil(totalRecords / pageSize);
}

function generatePaginationHistory(currentPage, totalRecords, pageSize) {
  const totalPages = calculateNumberOfPages(totalRecords, pageSize);
  const history = [];

  // Add previous button if not on the first page
  if (currentPage > 1) {
    history.push({ type: "prev", value: currentPage - 1 });
  } else {
    history.push({ type: "prev", value: null });
  }

  // Add previous button if not on the first page
  if (currentPage > 2) {
    // Add first 3 pages
    for (let i = currentPage - 2; i <= currentPage - 1; i++) {
      if (i <= totalPages) {
        history.push({ type: "page", value: i });
      }
    }
  }

  // Add current page
  history.push({ type: "currentPage", value: currentPage });

  // Add next 3 pages
  for (let i = currentPage + 1; i <= currentPage + 2; i++) {
    if (i <= totalPages) {
      history.push({ type: "page", value: i });
    }
  }

  // Add next button if not on the last page
  if (currentPage < totalPages) {
    history.push({ type: "next", value: currentPage + 1 });
  } else {
    history.push({ type: "next", value: null });
  }

  return history;
}
