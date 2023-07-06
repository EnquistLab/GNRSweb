import { React, useState } from "react";
import {
  Box,
  Dialog,
  DialogTitle,
  Button,
  TableContainer,
  TableRow,
  TableCell,
  TableBody,
  Table,
  Popover,
  Typography,
} from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";

// shows the dialog with details of each row
export default function DetailsDialog(props) {
  let { onClose, open, row, dataDictionary } = props;
  // make a copy of the object being displayed
  let dataToDisplay = { ...row };
  // delete rows
  // delete dataToDisplay.ID;

  return (
    <Dialog open={open} maxWidth="lg">
      <DialogTitle>Name submited: {dataToDisplay.Name_submitted}</DialogTitle>
      <Box m={4} mt={0}>
        <TableContainer>
          <Table size="small">
            <TableBody>
              {Object.entries(dataToDisplay).map(([key, value], idx) => (
                <TableRow key={idx}>
                  <TableCell>
                    <DataDictionaryPopover
                      field={key}
                      description={dataDictionary[key]}
                    />
                  </TableCell>
                  <TableCell>{value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button variant="contained" color="primary" onClick={onClose}>
          Close
        </Button>
      </Box>
    </Dialog>
  );
}

function DataDictionaryPopover({ field, description }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  return (
    <div>
      <Box display='flex' alignItems='center' flexDirection='row'>
        <Box>
          {field}
        </Box>
        <Box>
          <HelpIcon
            style={{ width: 12, height: 12 }}
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          />
        </Box>
      </Box>

      <Popover
        open={open}
        anchorEl={anchorEl}
        style={{ pointerEvents: "none", }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Box m={2} maxWidth='300px'>
          <Typography>{description}</Typography>
        </Box>
      </Popover>
    </div>
  );
}
