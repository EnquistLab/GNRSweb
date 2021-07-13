import { React, useState } from "react";

import { Layout } from "../components/";
import { requestCitations, requestMeta } from "../actions/";

const Cite = require("citation-js");

import {
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Link,
} from "@material-ui/core";

const renderCitations = (citationsAvailable) => {
  var result = {};
  citationsAvailable.map((citation) => {
    // parse data
    let parsed = new Cite(citation.citation);
    // get today's data
    let options = { year: "numeric", month: "short", day: "numeric" };
    let today = new Date();
    // fill accessed_date
    var accessed_date =
      ", " +
      parsed.data[0].note?.replace(
        "<date_of_access>",
        today.toLocaleDateString("en-US", options)
      );
    // check if note was empty
    if (accessed_date == ", undefined") {
      accessed_date = "";
    }

    let parsedRendered =
      parsed
        .format("bibliography", {
          format: "text",
          template: "apa",
          lang: "en-US",
          // remove part of the html that contains the closing div tag
          // and add the accessed date
        })
        .slice(0, -1) + accessed_date;

    result[citation.source] = (
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html: parsedRendered,
          }}
        ></div>
        <BibTexDialog displayText={citation.citation} />
        <br />
      </div>
    );
  });
  return result;
};

function BibTexDialog({ displayText }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Link href="#" onClick={handleClickOpen}>
        [bibtex]
      </Link>
      <Dialog maxWidth={"md"} fullWidth open={open} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">{"BibTeX entry"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {displayText.split("\n").map((line, index) => {
              if ((index > 0) & (line != "}")) {
                line = "\xa0\xa0\xa0\xa0" + line;
              }
              return (
                <span key={index}>
                  {line}
                  <br />
                </span>
              );
            })}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

function CiteApp({ citations, meta }) {
  let renderedCitations = renderCitations(citations);
  let citationsList = Object.keys(renderedCitations);
  return (
    <Layout>
      <Typography variant="h3" gutterBottom>
        How to Cite the GNRS
      </Typography>
      {citationsList.map((v) => renderedCitations[v])}
      <Typography variant="h6">
        API Version
      </Typography>
    <Typography variant="body1" gutterBottom>
      {meta[0]['code_version']}
    </Typography>
    </Layout>
  );
}

CiteApp.getInitialProps = async () => {
  let sources = await requestCitations();
  let meta = await requestMeta();
  return { citations: sources, meta: meta };
};

export default CiteApp;
