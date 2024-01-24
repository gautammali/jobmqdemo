import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useSelector } from "react-redux";
const data = [
  { sortBy: "DOC", sortOrder: "Desc", name: "Newest" },
  { sortBy: "DOC", sortOrder: "Asc", name: "Oldest" },
  { sortBy: "minSalary", sortOrder: "Desc", name: "Highest Paying" },
  { sortBy: "minSalary", sortOrder: "Asc", name: "Lowest Paying" },
];
export default function SortBy({ jobListing }) {
  const jobListData = useSelector((state) => state.jobList);
  const [select, setSelect] = React.useState(data[0]);

  const handleSort = (item) => {
    setSelect(item)
    jobListing({ ...jobListData,...item });
  };

  return (
    <Menu as="div" className="relative ml-3">
      <div className="flex justify-end items-center">
        <Menu.Button className="flex items-center gap-1 rounded-full  bg-white text-sm font-semibold hover:underline px-4 py-2">
          <span className="">Sort by</span>{" "}
          <span className="text-blue-600">{select?.name}</span>
          <MdOutlineKeyboardArrowDown className="text-lg" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none divide-y">
          {data.map((item, id) => (
            <Menu.Item>
              <p
                onClick={() => handleSort(item)}
                className={
                  "block px-4 py-2 text-sm font-semibold hover:bg-gray-100 text-gray-700 cursor-pointer"
                }
              >
                {item.name}
              </p>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
