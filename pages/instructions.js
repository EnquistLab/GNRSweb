import React from "react";
import { Layout } from "../components";

import { Typography } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

function InstructionsApp() {
  return (
    <>
      <Layout>
        <Typography variant="h3" align="justify" display="block" gutterBottom>
          How To Use The GNRS
        </Typography>

        <Typography variant="body1" gutterBottom align="justify">
          <List>
            <ListItem>
              <Typography variant="body1">
                1. <strong>Enter political division names</strong>. Type or
                paste political division names into the input box. Enter up to
                three nested political divisions per line, comma separated, in
                this order: country, state/province, county/parish. Country is
                required. The remaining political division levels are optional,
                but you MUST include the commas even if the value itself is
                missing. Also, if you enter a value for county/parish then it
                must be preceded by a value for state/province. If any political
                division name includes commas, then it must be surrounded by
                double quotes. You can submit up to 5000 political division
                triplets at a time.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography variant="body1">
                The screenshot below shows the various ways in which political
                division names can be entered:
              </Typography>
            </ListItem>

            <img src="/dataentryexample.png" />
            <br />

            <ListItem>
              <Typography variant="body1">
                2. <strong>Download results</strong>. Download your results by
                clicking on the "Download Data" control, selecting either a
                comma-delimitted or tab-delimitted file.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography variant="body1">
                3. <strong>Cite</strong>. Please cite the GNRS and all GNRS data
                sources used in any publication which includes political
                divisions names resolved using the GNRS. See{" "}
                <a href="/cite">Cite</a> for details.
              </Typography>
            </ListItem>
          </List>
        </Typography>
      </Layout>
    </>
  );
}

export default InstructionsApp;
