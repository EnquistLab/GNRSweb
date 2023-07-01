import { useState, useEffect, React } from "react";
import { requestMeta } from "../../actions";

import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Link,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";

import MoreVertIcon from "@mui/icons-material/MoreVert";

import { ContainerLG } from "../";

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

  return (
    <AppBar position="static">
      <ContainerLG>
        <Toolbar>
          <Box mr={2}>
            <img height="40" src="/logo.png" />
          </Box>

          <Link href="/" color="inherit" variant="h6" sx={{ pr: 2 }} underline="none">
            GNRS
          </Link>

          <Box sx={{ flexGrow: 1 }}></Box>
          <Typography variant="caption" >
            Geographic Name Resolution Service 1.7.2
          </Typography>
          <Box sx={{ flexGrow: 1 }}></Box>

          <Button color="inherit" href="/">Home</Button>
          <Button color="inherit" href="/about">About</Button>
          <Button color="inherit" href="/instructions">Instructions</Button>
          <Button color="inherit" href="/gnrsapi">API</Button>
          <Button color="inherit" href="/sources">Sources</Button>
          <Button color="inherit" href="/cite">Cite</Button>
          <Button color="inherit" href="/data_dictionary">Data Dictionary</Button>
        </Toolbar>
      </ContainerLG>
    </AppBar>

  );
}

