
import { React, useState, useEffect } from "react";
import PropTypes from 'prop-types';

import { Layout } from "../components/";
import { requestCitations, requestMeta } from "../actions/";

// const Cite = require("citation-js");
import Cite from "citation-js";

import {
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Link,
} from "@mui/material";

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
BibTexDialog.propTypes = {
  displayText: PropTypes.string
};

function CiteApp() {
  let [meta, setMeta] = useState([])
  let [citations, setCitations] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // get citations from the API
      let meta = await requestMeta();
      setMeta(meta[0])

      let citations = await requestCitations();
      var parsedCitations = []
      // parse them using citation-js
      for (let c in citations) {
        let parsed = new Cite(citations[c].citation);

        let formatted = parsed.format('bibliography', {
          format: 'html',
          template: 'apa',
          lang: 'en-US'
        })
        // push everything to the vector
        parsedCitations.push({ 'source': citations[c].source, 'parsed': parsed, 'raw': citations[c].citation, 'formatted': formatted })
      }
      setCitations(parsedCitations)
    }
    fetchData()
  }, [])

  return (
    <Layout>
      <Typography variant="h3" gutterBottom>
        How to Cite the GNRS
      </Typography>
      {/* {citationsList.map((v) => renderedCitations[v])} */}


      {citations.map((s, k) => (
        <div key={k}>
          <div
            dangerouslySetInnerHTML={{
              __html: s.formatted,
            }}
          ></div>
          <BibTexDialog displayText={s.raw} />
          <br />
        </div>
      ))
      }

      <Typography variant="h6">
        API Version
      </Typography>
      <Typography variant="body1" gutterBottom>
        {meta.code_version}
      </Typography>
    </Layout >
  );
}

export default CiteApp;
