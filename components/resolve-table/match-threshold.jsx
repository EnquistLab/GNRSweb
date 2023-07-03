import PropTypes from 'prop-types';
import { React, useState } from "react";

import {
  Box,
  Popover,
  Button,
  Slider,
} from "@mui/material";

// shows the dialog with details of each row
function MatchThreshold({ onChangeThreshold }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'match-threshold-popover' : undefined;

  return (
    <>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Match Threshold
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Box sx={{ width: 300, px: 3, pt: 5 }}>
          <Slider
            aria-label="Match Threshold"
            defaultValue={0.5}
            valueLabelDisplay="on"
            step={0.01}
            marks
            min={0}
            max={1}
          />

        </Box>
      </Popover>
    </>
  )
}

MatchThreshold.propTypes = {
  onChangeThreshold: PropTypes.func
};

export default MatchThreshold;
