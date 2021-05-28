import React from "react";
import { Layout } from "../components/";
import { Typography } from "@material-ui/core";
import { requestDataDictionary } from "../actions/";

function DataDictionary({ dataDictionary }) {
  return (
    <Layout>
      <Typography>
        {JSON.stringify(dataDictionary)}
        Placeholder
      </Typography>
    </Layout>
  );
}

// making initial props available
DataDictionary.getInitialProps = async () => {
  let dict = await requestDataDictionary();
  return { dataDictionary: dict };
};

export default DataDictionary;
