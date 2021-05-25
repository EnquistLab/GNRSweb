import React, { useState } from "react";

import {
  Layout,
  SearchBox,
  ResolveTable,
} from "../components/";
import { requestResolveNames } from "../actions/";

import {Typography, Paper, Box} from "@material-ui/core";

export default function Index() {
  const [resolvedNames, setResolvedNames] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isBadInput, setIsBadInput] = useState(false);
  const handleResolveNames = async (names, separator) => {
    // clear the table after submiting
    setResolvedNames([]);
    // show spinner
    setIsProcessing(true);
    setIsBadInput(false);
    // split names
    let arrayNames = names
      .split("\n")
      // remove empty rows
      .filter((row) => row)
      // split fields and concatenate empty id
        .map((rows) => [""].concat(rows.split(separator)));

    // check if all elements have 4 columns
    if (arrayNames.every((row) => row.length == 4) == false) {
      setIsProcessing(false);
      setIsBadInput(true);
      return;
    }
    // resolve the names
    let resolvedNames = await requestResolveNames(arrayNames);
    // console.log(resolvedNames)
    setResolvedNames(resolvedNames);
    // hide spinner
    setIsProcessing(false);
  };

  return (
    <Layout>
      <SearchBox onSubmit={handleResolveNames} isProcessing={isProcessing} />
      {isBadInput && (
      <Box pt={2}>
        <Paper color='primary' variant='outlined'>
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
