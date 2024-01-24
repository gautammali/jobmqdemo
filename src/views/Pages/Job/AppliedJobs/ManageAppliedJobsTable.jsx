import React, { useMemo } from "react";
import { useTable, useFilters, useGlobalFilter, usePagination, useRowSelect } from "react-table";
import { COLUMNS } from "./columns";
// import { CheckBox } from "./Components/CheckBox";

export default function ManageAppliedJobsTable({ data: dataTable }) {
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => dataTable, [dataTable]);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        // setPageSize,
        gotoPage,
        prepareRow,
        // selectedFlatRows,
        state,
        // setGlobalFilter,
        // columns: column,

    } = useTable(
        {
            columns,
            data,
        },
        useFilters,
        useGlobalFilter,
        usePagination,
        useRowSelect,
        (hooks) => {
            hooks.visibleColumns.push((columns) => columns);
        }
    );
    // const { globalFilter } = state;
    return (
        <div className="sm:px-6 lg:px-8 py-4 overflow-x-auto ">
            {/* <div className="flex justify-between items-center py-3">
                <BulkAction data={selectedFlatRows} />

                <div className="flex items-center">
                    <h4 className="text-xl font-semibold">Filter:</h4>
                    <FilterByDesingnation
                        data={data}
                        columns={column}
                    />
                    <FilterByStatus
                        columns={column}
                    />
                </div>
            </div>

            <div className=" py-4 flex justify-between items-center">
                <div className="flex items-center gap-2 ">
                    <h4>Show:</h4>
                    <select
                        onChange={(e) => setPageSize(Number(e.target.value))}
                        name="entries"
                        id=""
                        className="border mx-2 px-4 py-1 rounded"
                    >
                        {[1, 25, 50, 100].map((item) => (
                            <option key={item} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                    <span>entries</span>
                </div>
                <FilterTable
                    globalFilter={globalFilter}
                    setGlobalFilter={setGlobalFilter}
                />
            </div> */}

            <table {...getTableProps()} className={"w-full min-w-[1286px] shadow"}>
                <thead className="">
                    {headerGroups.map((headerGroup) => (
                        <tr className="h-10" {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th
                                    className={`${((column.render("Header") === "Attachment" &&
                                        "text-center") ||
                                        (column.render("Header") === "Application ID" &&
                                            "text-start pl-2") ||
                                        (column.render("Header") === "Status" && "text-center") ||
                                        (column.render("Header") === "Action" &&
                                            "text-end pr-4") ||
                                        (column.render("Header") === "Message" &&
                                            "text-center") ||
                                        "text-start ") + " bg-site-bg-300 text-white font-medium font-roboto "
                                        }`}
                                    {...column.getHeaderProps()}
                                >
                                    {column.render("Header")}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row) => {
                        prepareRow(row);
                        return (
                            <tr className="" {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return (
                                        <td className="border-b py-3" {...cell.getCellProps()}>
                                            {cell.render("Cell")}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>

                <tfoot>
                    <tr>
                        <td colSpan="10000">
                            <div className="flex justify-between items-center py-3">
                                <div className="flex items-center gap-2">
                                    <span>
                                        Page{" "}
                                        <strong>
                                            {state.pageIndex + 1} of {pageOptions.length}
                                        </strong>{" "}
                                    </span>
                                    <span>
                                        | Go to page:{" "}
                                        <select
                                            name=""
                                            id=""
                                            className="border mx-2 px-4 py-1 rounded"
                                            onChange={(e) => {
                                                const page = e.target.value
                                                    ? Number(e.target.value) - 1
                                                    : 0;
                                                gotoPage(page);
                                            }}
                                        >
                                            {pageOptions.map((page) => (
                                                <option key={page} value={page + 1}>
                                                    {page + 1}
                                                </option>
                                            ))}
                                        </select>
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button
                                        type="button"
                                        disabled={!canPreviousPage}
                                        onClick={() => previousPage()}
                                        className="inline-flex w-full justify-center rounded border border-transparent px-4 py-1 text-base font-semibold text-white shadow-sm bg-[#0076bd] hover:bg-primary-800 sm:w-auto sm:text-lg transition_1"
                                    >
                                        Previous
                                    </button>

                                    <button
                                        type="button"
                                        disabled={!canNextPage}
                                        onClick={() => nextPage()}
                                        className="inline-flex w-full justify-center rounded border border-transparent px-4 py-1 text-base font-semibold text-white shadow-sm bg-[#0076bd] hover:bg-primary-800 sm:w-auto sm:text-lg transition_1"
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}
