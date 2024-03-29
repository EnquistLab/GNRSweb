import React, { useState, useEffect } from "react";

import {
  Box,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  TableCell,
  TableBody,
  TableSortLabel,
  Link,
  Table,
  Paper,
} from "@mui/material";

import DetailsDialog from "./resolve-details-dialog";

import { TablePaginationActions, DownloadResults, } from "../";
import { requestDataDictionary } from "../../actions/";
import { getComparator, stableSort } from "../../actions";

export function ResolveTable({ tableData }) {
  // states
  const [dataPopUpOpen, setDataPopUpOpen] = useState(false);
  const [popUpDetails, setPopUpDetails] = useState({});
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // for enhanced table head
  const [orderBy, setOrderBy] = useState("");
  const [order, setOrder] = useState("asc");

  // used to show the data dictionary popover
  const [dataDictionary, setDataDictionary] = useState({});
  useEffect(() => {
    let dict = requestDataDictionary();
    let dictObj = {};
    dict.then((data) => {
      data.map((row) => {
        let tmp = new Object();
        tmp[row["col_name"]] = row["description"];
        dictObj = { ...dictObj, ...tmp };
      });
      setDataDictionary(dictObj);
    });
  }, []);

  //
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  //
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleClickClose = () => {
    setDataPopUpOpen(false);
  };

  const getRowData = (id) => {
    return tableData.filter((row) => row.poldiv_full == id)[0];
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const renderRow = (row, id) => {
    let rowData = getRowData(row.poldiv_full);
    return (
      <TableRow key={id}>
        <TableCell>
          {[
            row.country_verbatim,
            row.state_province_verbatim,
            row.county_parish_verbatim,
          ]
            .filter((row) => row)
            .join(":")}
        </TableCell>
        <TableCell>{row.country}</TableCell>
        <TableCell>{row.state_province}</TableCell>
        <TableCell>{row.county_parish}</TableCell>
        <TableCell>{row.overall_score}</TableCell>
        <TableCell>
          {
            <Link
              href="#"
              onClick={() => {
                setDataPopUpOpen(true);
                setPopUpDetails(rowData);
              }}
            >
              Details
            </Link>
          }
        </TableCell>
      </TableRow>
    );
  };

  // only show the table when data is available
  if (tableData.length > 0)
    return <>
      <Paper>
        <Box pt={2} m={2} mb={0}>
          <DownloadResults data={tableData} />
        </Box>
        <Box m={2}>
          <TableContainer>
            <Table size="small">
              <EnhancedTableHead
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
              />
              <TableBody>
                {stableSort(tableData, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map(renderRow)}
              </TableBody>
            </Table>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={tableData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableContainer>
        </Box>
        <DetailsDialog
          open={dataPopUpOpen}
          onClose={handleClickClose}
          row={popUpDetails}
          dataDictionary={dataDictionary}
        />
      </Paper>
    </>;
  else return <></>;
}

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
  // to save space we define a vector with the names of the columns
  let tableColumns = [
    ["country_verbatim", "Political Division Submitted"],
    ["country", "Country"],
    ["state_province", "State Province"],
    ["county_parish", "County"],
  ];

  // we render the names using a map
  let tableColumnsJsx = tableColumns.map((names, idx) => {
    return (
      <TableCell key={idx}>
        <TableSortLabel
          active={orderBy === names[0]}
          direction={orderBy === names[0] ? order : "asc"}
          onClick={createSortHandler(names[0])}
        >
          {names[1]}
        </TableSortLabel>
      </TableCell>
    );
  });

  return (
    <TableHead>
      <TableRow>
        {
          // here we add the previously rendered table cells
          tableColumnsJsx
        }
        <TableCell>Overall Score</TableCell>
        <TableCell>Details</TableCell>
      </TableRow>
    </TableHead>
  );
}
