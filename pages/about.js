import React from "react";

import { Layout } from "../components/";
import { requestCollaborators } from "../actions/";
import { Typography } from "@material-ui/core";
import Link from "next/link";

function About() {
	return (
		<Layout>
			<Typography variant='h3'>About the GNRS</Typography>
			<br />
        
			<Typography variant="body1" gutterBottom align="justify">
			   <Link href="#what">What is the GNRS?</Link>
			  <br />
			  <Link href="#whyuse">Why use the GNRS?</Link>
			  <br />
			  <Link href="#development">Project development</Link>
			  <br />
			  <Link href="#sourcecode">Source code</Link>
			  <br />
			  <Link href="#funding">Funding</Link>
			  <br />
			</Typography>
			<br />

            <div id="what">
			<Typography variant="h5" gutterBottom align="justify">
			What is the GNRS?
			</Typography>
			<Typography variant="body1" gutterBottom align="justify">
			The Geographic Name Resolution Service (GNRS) is a tool for resolving,  standardizing, and indexing political division names. The GNRS resolves political division names against standard world political units in the <Link href="https://www.geonames.org/" target="_blank">Geonames</Link> and <Link href="https://gadm.org/" target="_blank">Global Administrative Areas (GADM)</Link> databases. Names are resolved to three levels: country, state/province and county/parish. The GNRS uses both exact and fuzzy matching to match starndard and alternative political division names in a variety of languages, as well as abbreviations and codes such as ISO and FIPS codes.
			Results returned by the GNRS include the original names submitted,  the standard names and codes of the political units matched, unique identifiers from the Geonames and GADM databases, and additional fields describe how each name was resolved. An overall match score from 0-1 describes how closely the submitted names matches standard names, where 1 is a perfect match. For more details on the information returned by the GNRS, see our <Link href="/data_dictionary">Data Dictionary</Link>
			</Typography>
			</div>
            <div id="whyuse">
			<Typography variant="h5" gutterBottom align="justify">
			Why use the GNRS?
			</Typography>
			<Typography variant="body1" gutterBottom align="justify">
			Resolving political division names with the GNRS is a critical step in checking the accuracy of geocoordinates accompanied by political divisions. For example, once the political division has been resolved to a political unit in the GADM database, the geocoordinates can then be joined to the shapefile for that political unit. Points falling outside the political unit can then be excluded from further analysis, or investigated and corrected. 
			</Typography>
			</div>
			
        <div id="development">
          <Typography variant="h5" gutterBottom align="justify">
            Project development
          </Typography>

          	<Typography variant="body1" align="justify">
            The GNRS was developed by the <Link href="https://bien.nceas.ucsb.edu/bien/" target="_blank">Botanical Information and Ecology Network (BIEN)</Link> as a data validation tool for the BIEN botanical observation database. 
          	</Typography>
        	<br />
           <Typography variant="body1" gutterBottom align="justify">
            <strong>Project conception and direction</strong>
            <br />
            Brad Boyle{" "}
            <Link href="https://eeb.arizona.edu/" target="_blank">
              University of Arizona
            </Link>
            <br />
            Brian Enquist{" "}
            <Link href="https://eeb.arizona.edu/" target="_blank">
              University of Arizona
            </Link>
            <br />
          </Typography>

         <Typography variant="body1" gutterBottom align="justify">
            <strong>Application development</strong>
            <br />
            Brad Boyle:{" "} 
            <Link href="https://github.com/ojalaquellueva/gnrs" target="_blank">
              GNRS database, search engine and api.
            </Link>
            <br />
            Brian Maitner:{" "} 
            <Link href="https://github.com/EnquistLab/RGNRS" target="_blank">
              RGNRS R package.
            </Link>
            <br />
            George C. Barbosa:{" "} 
            <Link href="https://github.com/EnquistLab/GNRSweb" target="_blank">
              GNRSweb
            </Link>{" "}
            React/Node.js user interface.
            <br />
           </Typography>
        </div>

        <div id="sourcecode">
          <Typography variant="h5" gutterBottom align="justify">
            Source code
          </Typography>

          <Typography variant="body1" gutterBottom align="justify">
            Source code for all GNRS components is publicly available from the
            following repositories:
            <br />
          </Typography>

          <Typography variant="body1" gutterBottom align="justify">
            GNRS Search Engine, Database and API:{" "}
            <Link href="https://github.com/ojalaquellueva/gnrs"
              target="_blank">
              https://github.com/ojalaquellueva/gnrs
            </Link>
            <br />
            Geonames-to-Postgres (dependency):{" "}
            <Link href="https://github.com/ojalaquellueva/geonames" target="_blank">
              https://github.com/ojalaquellueva/geonames
            </Link>
            <br />
            GADM-to-Postgres (dependency):{" "}
            <Link href="https://github.com/ojalaquellueva/gadm"
              target="_blank">
              https://github.com/ojalaquellueva/gadm</Link>{" "}
            <br />
            GNRS R package:{" "}
            <Link href="https://github.com/EnquistLab/RGNRS" target="_blank">
              https://github.com/EnquistLab/RGNRS
            </Link>
            <br />
          </Typography>
        </div>

        <div id="funding">
          <Typography variant="h5" gutterBottom align="justify">
            Funding
          </Typography>

          <Typography variant="body1" align="justify">
            Funding provided by the National Science Foundation Plant
            Cyberinfrastructure Program (grant #DBI-0735191) and National
            Science Foundation Harnessing the Data Revolution Grant HDR 1934790
            to Brian J. Enquist.
          </Typography>
          <br />
          <br />
        </div>

			
    </Layout>
  );
}

export default About;
