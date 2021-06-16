import React from "react";

import { Layout } from "../components/";
import { Typography } from "@material-ui/core";
import { requestSources } from "../actions/";

function Cite({ sources }) {
  return (
    <Layout>
      <Typography variant="h3">How to Cite the GNRS</Typography>
      {JSON.stringify(sources)}
    </Layout>
  );
}

Cite.getInitialProps = async () => {
  let sources = await requestSources();
  return { sources: sources };
};

export default Cite;
