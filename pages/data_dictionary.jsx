import React from "react";
import { Layout } from "../components/";
import { requestDataDictionary } from "../actions/";
import { Typography } from "@material-ui/core";

import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableCell,
  TableRow,
} from "@material-ui/core";

function DataDictionary({ dataDictionary }) {

  return (
    <Layout>
		<Typography variant='h3'>Data dictionary</Typography>
		<br />
		<Typography variant="body1" gutterBottom align="justify">
		Names and definitions of output fields returned by the GNRS.
		</Typography>
		<br />

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Column Name</TableCell>
              <TableCell>Data Type</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataDictionary.map((row) => (
              <TableRow key={row.col_name}>
                <TableCell>
                  {row.col_name}
                </TableCell>
                <TableCell>
                  {row.data_type}
                </TableCell>
                <TableCell>
                  {row.description}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Layout>
  );
}

// making initial props available
DataDictionary.getInitialProps = async () => {
  let dict = await requestDataDictionary();
  return { dataDictionary: dict };
};

export default DataDictionary;
