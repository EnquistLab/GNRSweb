import React from "react";
import { Layout} from "../components";

import {
  Typography,
  Link,
} from "@material-ui/core";

function ApiApp() {

  return (
    <>
      <Layout>
        <Typography variant="h3" align="justify" display="block" gutterBottom>
          GNRS Application Programming Interfaces
        </Typography>
        <div id="tnrsapi">
          <Typography variant="h5" gutterBottom align="justify">
            GNRS API
          </Typography>

          <Typography variant="body1" gutterBottom align="justify">
            The GNRS web interface uses the{" "}
            <Link href="https://github.com/ojalaquellueva/gnrs/tree/master/api" target="_blank">
              GNRS API
            </Link>{" "}
            to access the {" "}
            <Link
              href="https://github.com/ojalaquellueva/gnrs"
              target="_blank"
            >
              GNRS database and search engine
            </Link>
            . The GNRS API functions handles all traffic between external
            applications and the GNRS search engine. The API can be
            used to process large batches of names (exceeding the current limit
            of 5000 names) rapidly by looping through large name lists in
            batches of 5000. The GNRS API can be used by third-party developers
            wishing to include GNRS content and search capabilities in their
            applications. For more information on the GNRS API and detailed
            instructions and examples of how to access the API in languages such
            as R and PHP, see documentation on the{" "}
            <Link href="https://github.com/ojalaquellueva/gnrs/tree/master/api" target="_blank">
              GNRS API GitHub repository
            </Link>
          </Typography>
          <br />
        </div>

        <div id="rtnrs">
          <Typography variant="h5" gutterBottom align="justify">
            GNRS R package
          </Typography>

          <Typography variant="body1" gutterBottom align="justify">
            Users who are familiar with the{" "}
            <Link href="https://www.r-project.org/" target="_blank">
              R programming language
            </Link>{" "}
            may prefer to access the GNRS using the{" "}
            <Link href="https://github.com/EnquistLab/RGNRS" target="_blank">
              RGNRS R package
            </Link>
            . All options available from the GNRS API are also exposed via the R package.
          </Typography>
          <br />
        </div>

      </Layout>
    </>
  );
}


export default ApiApp;
