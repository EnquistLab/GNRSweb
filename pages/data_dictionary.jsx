import React from "react";
import { Layout } from "../components/";
import { requestDataDictionary } from "../actions/";

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
