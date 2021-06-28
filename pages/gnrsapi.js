import { Layout } from "../components";
import Head from "next/head";

import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import axios from "axios";
import Link from "next/link";

import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Box,
  Divider,
} from "@material-ui/core";

const apiServer = process.env.apiServer;
const apiEndPoint = process.env.apiEndPoint;

const useStyles = makeStyles((theme) => ({
  page: {
    padding: theme.spacing(0.5),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  root: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  header: {
    color: theme.palette.grey[400],
    height: "15px",
  },
  image: {
    padding: theme.spacing(0),
    objectFit: "none",
    flex: 1,
    flexGrow: 1,
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  action: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    // alignSelf: "center",
    // bottom: 0,
    // flex: 1
  },
}));

function ApiApp({  }) {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>GNRS - API</title>
        <Link rel="icon" href="/favicon.ico" />
      </Head>
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
