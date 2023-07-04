import React, { useState } from "react";
import { readString } from "react-papaparse";
import { Layout, SearchBox, ResolveTable } from "../components/";
import { requestResolveNames } from "../actions/";
import { Typography, Paper, Box } from "@mui/material";

export default function Index() {
  const [resolvedNames, setResolvedNames] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isBadInput, setIsBadInput] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const displayError = (errorMessage) => {
    setErrorMessage(errorMessage);
    setIsProcessing(false);
    setIsBadInput(true);
  }

  const handleResolveNames = async (names, threshold) => {
    // clear the table after submiting
    setResolvedNames([]);
    // show spinner
    setIsProcessing(true);
    setIsBadInput(false);

    // use the CSV library to read the names
    let splitNames = readString(names)["data"];
    // when we pass it to the API we add one empty column

    // client error handling
    // check if all elements have 4 columns
    if (splitNames.every((row) => row.length == 3) == false) {
      displayError("All rows must have 3 columns");
      return;
    }

    // filter out lines that have more or less than 3 columns
    splitNames = splitNames
      .filter((row) => row.length == 3)
      .map((row) => [""].concat(row)); // add an extra column to the data structure
    // the API expects 4 columns, where the first column is the ID
    // if the user submits "USA,," the final result will be ['', 'USA', '', '']

    // resolve the names
    let resolvedNames = await requestResolveNames(splitNames, threshold, displayError);

    // error with API
    if (resolvedNames == undefined) {
      return
    }

    // server side error handling
    // if the response of the API is a string instead of an object
    // it is because the API returned an error
    if (typeof resolvedNames === "string") {
      // here resolved names should contain the error returned by the API
      displayError(resolvedNames)
      return;
    }
    console.log(resolvedNames)
    // hide spinner and change the state
    setResolvedNames(resolvedNames);
    setIsProcessing(false);
  };

  return (
    <Layout>
      <SearchBox onSubmit={handleResolveNames} isProcessing={isProcessing} />
      {isBadInput && (
        <Box pt={2}>
          <Paper color="primary" variant="outlined">
            <Box m={2}>
              <Typography>{errorMessage}</Typography>
            </Box>
          </Paper>
        </Box>
      )}
      <ResolveTable tableData={resolvedNames} />
    </Layout>
  );
}
