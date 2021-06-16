import React, { useState } from "react";
import { readString } from "react-papaparse";
import { Layout, SearchBox, ResolveTable } from "../components/";
import { requestResolveNames } from "../actions/";
import { Typography, Paper, Box } from "@material-ui/core";

export default function Index() {
  const [resolvedNames, setResolvedNames] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isBadInput, setIsBadInput] = useState(false);

  const handleResolveNames = async (names) => {
    // clear the table after submiting
    setResolvedNames([]);
    // show spinner
    setIsProcessing(true);
    setIsBadInput(false);

    // use the CSV library to read the names
    let splitNames = readString(names)["data"];
    // when we pass it to the API we add one empty column
    splitNames = splitNames
      .filter((row) => row.length == 3) // this will remove blank lines
      .map((row) => [""].concat(row));

    // check if all elements have 4 columns
    if (splitNames.every((row) => row.length == 4) == false) {
      setIsProcessing(false);
      setIsBadInput(true);
      return;
    }

    // resolve the names
    let resolvedNames = await requestResolveNames(splitNames);
    setResolvedNames(resolvedNames);

    // hide spinner
    setIsProcessing(false);
  };

  return (
    <Layout>
      <SearchBox onSubmit={handleResolveNames} isProcessing={isProcessing} />
      {isBadInput && (
        <Box pt={2}>
          <Paper color="primary" variant="outlined">
            <Box m={2}>
              <Typography>All rows must have 3 columns</Typography>
            </Box>
          </Paper>
        </Box>
      )}
      <ResolveTable tableData={resolvedNames} />
    </Layout>
  );
}
