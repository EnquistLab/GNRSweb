import { useState, useEffect, React } from "react";
import Link from "next/link";
import { requestMeta } from "../../actions";

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
  // API version
  const [apiVersion, setApiVersion] = useState("");
  useEffect(() => {
    let metaPromise = requestMeta();
    metaPromise.then((meta) => {
      let codeVersion = meta[0]["code_version"];
      setApiVersion(codeVersion);
    });
  }, []);

  const classes = useStyles();
  return (
    <AppBar position="static">
      <Container className={classes.container}>
        <Toolbar>
          <Box mr={2}>
            <img height="40" src="/logo.png" />
          </Box>
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
            <Link href="/cite" passHref>
              <Typography variant="overline" className={classes.title}>
                Geographic Name Resolution Service
                {" " + apiVersion}
              </Typography>
            </Link>
            <Link href="/" passHref>
              <Button component="a" color="inherit">
                Home
              </Button>
            </Link>
            <Link href="/about" passHref>
              <Button component="a" color="inherit">
                About
              </Button>
            </Link>
            <Link href="/instructions" passHref>
              <Button component="a" color="inherit">
                Instructions
              </Button>
            </Link>
            <Link href="/gnrsapi" passHref>
              <Button component="a" color="inherit">
                API
              </Button>
            </Link>
            <Link href="/sources" passHref>
              <Button component="a" color="inherit">
                Sources
              </Button>
            </Link>
            <Link href="/cite" passHref>
              <Button component="a" color="inherit">
                Cite
              </Button>
            </Link>
            <Link href="/data_dictionary" passHref>
              <Button component="a" color="inherit">
                Data Dictionary
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
        <MenuItem onClick={handleClose} component={MUILink} href="/about">
          About
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          component={MUILink}
          href="/data_dictionary"
        >
          Data Dictionary
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          component={MUILink}
          href="/instructions"
        >
          Instructions
        </MenuItem>
        <MenuItem onClick={handleClose} component={MUILink} href="/gnrsapi">
          API
        </MenuItem>
        <MenuItem onClick={handleClose} component={MUILink} href="/sources">
          Sources
        </MenuItem>
        <MenuItem onClick={handleClose} component={MUILink} href="/cite">
          Cite
        </MenuItem>
      </Menu>
    </div>
  );
}
