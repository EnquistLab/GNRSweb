import React from "react";

import { Layout } from "../components/";
import { requestCollaborators } from "../actions/";
import { Typography } from "@material-ui/core";

function About() {
  return (
    <Layout>
      <Typography>Test</Typography>
    </Layout>
  );
}

About.getInitialProps = async () => {
  let sources = await requestCollaborators();
  return { sources: sources };
};

export default About;
