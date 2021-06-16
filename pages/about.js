import React from "react";

import { Layout } from "../components/";
import { requestCollaborators } from "../actions/";
import { Typography } from "@material-ui/core";

function About({sources}) {
  return (
    <Layout>
      <Typography variant='h3'>About</Typography>
      {sources}
    </Layout>
  );
}

About.getInitialProps = async () => {
  let sources = await requestCollaborators();
  return { sources: sources };
};

export default About;
