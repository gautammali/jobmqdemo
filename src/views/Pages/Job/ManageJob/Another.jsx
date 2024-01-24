import React from "react";

import {
  Column,
  Table,
  useReactTable,
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  getPaginationRowModel,
  sortingFns,
  getSortedRowModel,
  FilterFn,
  SortingFn,
  ColumnDef,
  flexRender,
  FilterFns,
} from "@tanstack/react-table";

export default function Another() {
  const columns = [
    {
      Header: "Candidate Name",
      accessor: "name",
      Cell: flexRender,
      width: 200,
      filter: "text",
      filterFn: (rows, id, filterValue) => {
        return rows.filter((row) => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true;
        });
      },
    },
    {
      Header: "Email",
      accessor: "email",
      Cell: flexRender,
      width: 200,
      filter: "text",
      filterFn: (rows, id, filterValue) => {
        return rows.filter((row) => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true;
        });
      },
    },
    {
      Header: "Applied job",
      accessor: "jobTitle",
      Cell: flexRender,
      width: 200,
      filter: "text",
      filterFn: (rows, id, filterValue) => {
        return rows.filter((row) => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true;
        });
      },
    },
    {
      Header: "Applied Date",
      accessor: "appliedDate",
      Cell: flexRender,
      width: 200,
      filter: "text",
      filterFn: (rows, id, filterValue) => {
        return rows.filter((row) => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true;
        });
      },
    },
    {
      Header: "Status",
      accessor: "status",
      Cell: flexRender,
      width: 200,
      filter: "text",
      filterFn: (rows, id, filterValue) => {
        return rows.filter((row) => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true;
        });
      },
    },
    {
      Header: "Action",
      accessor: "action",
      Cell: flexRender,
      width: 200,
      filter: "text",
      filterFn: (rows, id, filterValue) => {
        return rows.filter((row) => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true;
        });
      },
    },
  ];

    const data = [
    {
        name: "John Doe",
        email: "Johndoe@gmail.com",
        jobTitle: "Software Engineer",
        appliedDate: "2021-01-01",
        status: "Pending",
        action: "View Details",
    },
    {
        name: "John Doe",
        email: "sasfdasd@gamail.com",
        jobTitle: "Software Engineer",
        appliedDate: "2021-01-01",
        status: "Pending",
        action: "View Details",
    },
    {
        name: "John Dsdfoe",
        email: "dfasd@gmail.com",
        jobTitle: "Software Engineer",
        appliedDate: "2021-01-01",
        status: "Pending",
        action: "View Details",
    },
];

    const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    visibleColumns,
    state: { pageIndex, pageSize, sortBy, filters },
    } = useReactTable({
    columns,
    data,
    initialState: {
        pageIndex: 0,
        pageSize: 10,
        sortBy: [{ id: "name", desc: false }],
        filters: [],
    },
    });

    return (
    <div className="w-full">
        <Table
        getTableProps={getTableProps}
        getTableBodyProps={getTableBodyProps}
        headerGroups={headerGroups}
        rows={rows}
        prepareRow={prepareRow}
        visibleColumns={visibleColumns}
        />
    </div>  
    );
}

// Language: javascript
// Web site: https://react-table.tanstack.com/
// Last published: 2021-01-01T00:00:00.000Z     
// Last updated: 2021-01-01T00:00:00.000Z
// Version: 1.0.0
// License: MIT
// Authors: Tanstack
// Keywords: react, table, react-table, react table, react-table, react
// Description: React Table is a lightweight, fast and extendable datagrid for React.
// Language: javascript
// Web site: https://react-table.tanstack.com/
// Last published: 2021-01-01T00:00:00.000Z
// Last updated: 2021-01-01T00:00:00.000Z
// Version: 1.0.0
// License: MIT
// Authors: Tanstack
// Keywords: react, table, react-table, react table, react-table, react