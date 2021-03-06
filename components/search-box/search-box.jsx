import { useState, React } from "react";
import { useStyles } from "./search-box.style";
import {
  Paper,
  TextField,
  Box,
  Button,
  CircularProgress,
} from "@material-ui/core";

export function SearchBox({ onSubmit, isProcessing }) {
  const [names, setNames] = useState("");

  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        height={1}
      >
        <Box p={2}>
          <TextField
            rows={10}
            multiline
            lael="Multiline"
            fullWidth
            variant="outlined"
            label="Records to check"
            value={names}
            helperText="Enter up to 5000 record"
            onChange={(e) => setNames(e.target.value)}
          />
        </Box>
        <Box
          p={2}
          pt={0}
          display="flex"
          flexDirection="row"
          alignItems="center"
        >
          <Box>
            <Button
              // disable={loadingStatus.toString()}
              onClick={() => onSubmit(names)}
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
          </Box>
          <Box>
            <Button
              onClick={() => setNames("")}
              variant="contained"
              color="secondary"
            >
              Clear
            </Button>
          </Box>
          <Box flexGrow={1} />
          <Box>{isProcessing && <CircularProgress size={30} />}</Box>
        </Box>
      </Box>
   </Paper>
  );
}
