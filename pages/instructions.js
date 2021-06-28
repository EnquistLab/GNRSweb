import { Layout } from "../components";
import Head from "next/head";

import { Typography, makeStyles } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import axios from "axios";
import Link from "next/link";

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

function InstructionsApp() {
  const classes = useStyles();

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
                  	1. <strong>Enter political division names</strong>. 
                  	Type or paste political division names into the input box. 
                  	Enter up to three nested political divisions per line, 
                  	comma separated, in 
                  	this order: country, state/province, county/parish. Country 
                  	is required. The remaining political division levels are 
                  	optional, but you MUST include the commas even if the value
                  	itself is missing. Also, if you enter a value for 
                  	county/parish then it must be preceded by a value for 
                  	state/province. If any political 
                  	division name includes commas, then it must be surrounded by 
                  	double quotes. 
                  	You can submit up to 5000 political division triplets 
                  	at a time.
                	</Typography>
            	</ListItem>
            	
            	<ListItem>
					<Typography variant="body1">
					The screenshot below shows the various ways in which political division names can be entered:
					</Typography>
            	</ListItem>
				
				<img src="/dataentryexample.png" />
				<br />
            	
            	<ListItem>
                	<Typography variant="body1">
					  2. <strong>Download results</strong>. 
					  Download your results by clicking on the "Download Data" 
					  control, selecting either a comma-delimitted
					  or tab-delimitted file.
					</Typography>
            	</ListItem>
             
            	<ListItem>
					<Typography variant="body1">
					  3. <strong>Cite</strong>. 
					  Please cite the GNRS and all GNRS data sources used
					  in any publication which includes political divisions 		
					  names resolved using the GNRS. 
					  See <a href="/cite">Cite</a>{" "}for details.
					</Typography>
        		</ListItem>
            
        	</List>
          </Typography>
      </Layout>
    </>
  );
}

export default InstructionsApp;
