import { useStyles } from "./search-box.style";
import {
  Paper,
  TextField,
  Box,
  Button,
  CircularProgress,
} from "@material-ui/core";

export function SearchBox() {
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
            //value={input}
            helperText="Enter up to 5000 record"
            onChange={(e) => alert(e.target.value)}
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
              // onClick={() => onSearch(input)}
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
          </Box>
          <Box>
            <Button
              // onClick={() => setInput("")}
              variant="contained"
              color="secondary"
            >
              Clear
            </Button>
          </Box>
          <Box flexGrow={1} />
          <Box>{/* loadingStatus && <CircularProgress size={30} /> */}</Box>
        </Box>
      </Box>
    </Paper>
  );
}
