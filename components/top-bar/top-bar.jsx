import { useState, useEffect, React } from "react";
import { requestMeta } from "../../actions";

import LowResBar from "./low-res-bar";


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

  const menuLinks = [
    { href: '/', name: 'Home' },
    { href: '/about', name: 'About' },
    { href: '/instructions', name: 'Instructions' },
    { href: '/gnrsapi', name: 'API' },
    { href: '/sources', name: 'Sources' },
    { href: '/cite', name: 'Cite' },
    { href: '/data_dictionary', name: 'Data Dictionary' },
  ]

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

          <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
            <Typography variant="caption" >
              Geographic Name Resolution Service {apiVersion}
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }}></Box>

          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {menuLinks.map((item, k) =>
              <Button key={k} color="inherit" href={item.href}>{item.name}</Button>
            )}
          </Box>

          <Box sx={{ display: { sm: 'block', md: 'none' } }}>
            <LowResBar menuLinks={menuLinks} />
          </Box>
        </Toolbar>
      </ContainerLG>
    </AppBar >

  );
}

