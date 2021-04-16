import { useState } from "react";
import Link from "next/link";

import {
  Box,
  AppBar,
  Container,
  Toolbar,
  Typography,
  Button,
  makeStyles,
  Hidden,
  Menu,
  MenuItem,
  IconButton,
  Link as MUILink,
} from "@material-ui/core";

import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  homeLink: {
    textDecoration: "none !important",
  },
  menuButton: {
    marginRight: theme.spacing(0),
    paddingRight: theme.spacing(0),
  },
  container: {
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(0),
    },
  },
}));

export function TopBar() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Container className={classes.container}>
        <Toolbar>
          <Box mr={1}>
            <Link href="/" passHref>
              <Typography
                className={classes.homeLink}
                component="a"
                color="inherit"
                variant="h6"
              >
                GNRS
              </Typography>
            </Link>
          </Box>
          <Box flexGrow={1} />
          <Hidden mdUp>
            <LowResMenu />
          </Hidden>
          <Hidden smDown>
            <Typography variant="overline" className={classes.title}>
              Geografic Name Resolution Service
            </Typography>
            <Link href="/" passHref>
              <Button component="a" color="inherit">
                Home
              </Button>
            </Link>
          </Hidden>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export function LowResMenu() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        className={classes.menuButton}
        onClick={handleClick}
        component="a"
        color="inherit"
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} component={MUILink} href="/">
          Home
        </MenuItem>
      </Menu>
    </div>
  );
}
