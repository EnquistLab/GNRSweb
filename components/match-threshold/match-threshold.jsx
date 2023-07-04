import PropTypes from 'prop-types';
import { React, useState } from "react";

import {
  Box,
  Popover,
  Button,
  Slider,
} from "@mui/material";

// shows the dialog with details of each row
export function MatchThreshold({ threshold, onChangeThreshold }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (e, v) => {
    onChangeThreshold(v)
  }

  const open = Boolean(anchorEl);
  const id = open ? 'match-threshold-popover' : undefined;

  var label;
  switch (threshold) {
    case 0:
      label = 'all'
      break;
    case 1:
      label = 'exact'
      break;
    default:
      label = threshold
  }

  return (
    <>
      <Button aria-describedby={id} variant="outlined" onClick={handleClick}>
        Match Threshold: {label}
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
            value={threshold}
            valueLabelDisplay="on"
            onChange={handleChange}
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
  threshold: PropTypes.number,
  onChangeThreshold: PropTypes.func
};

