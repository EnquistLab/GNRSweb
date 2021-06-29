import React from "react";
import { Typography, Box, Grid, Divider } from "@material-ui/core";
import { ContainerLG } from "../";

function GNRSFooter() {
  return (
    <>
      <Box display="flex" flexDirection="row" alignItems="left" mt={4}>
        <Box>
          <Box display="flex" alignItems="flex-end">
            <Box>
              <img src="/world.png" height="80"></img>
            </Box>
            <Box ml={2}>
              <Typography variant="h3">GNRS</Typography>
              <Typography variant="h6">
                Geographic Name Resolution Service
              </Typography>
            </Box>
          </Box>
          <Box mt={1}>
            An online tool for the standardization of global political division
            names.
          </Box>
        </Box>
        <Box width={1 / 2}>
          <Grid container spacing={2} alignItems="center">
            <Grid xs={4} item>
              <Box display="flex">
                <Box flexGrow={1}></Box>
                <Box>
                  <img src="/bien.png" height="50"></img>
                </Box>
              </Box>
            </Grid>
            <Grid xs={8} item>
              The Botanical Information and Ecology Network
            </Grid>
            <Grid xs={4} item>
              <Box display="flex">
                <Box flexGrow={1}></Box>
                <Box>
                  <img src="/uoa.png" height="50"></img>
                </Box>
              </Box>
            </Grid>
            <Grid xs={8} item>
              The University of Arizona
            </Grid>
            <Grid xs={4} item>
              <Box display="flex">
                <Box flexGrow={1}></Box>
                <Box>
                  <img src="/nsf.png" height="50"></img>
                </Box>
              </Box>
            </Grid>
            <Grid xs={8} item>
              National Science Foundation
            </Grid>
            <Grid xs={4} item>
              <Box display="flex">
                <Box flexGrow={1}></Box>
                <Box>
                  <img src="/globe.png" height="50"></img>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={8}>
              GeoNames
            </Grid>
            <Grid item xs={4}>
              <Box display="flex">
                <Box flexGrow={1}></Box>
                <Box>
                  <img src="/lines.png" height="50"></img>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={8}>
              GADM
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export function Footer() {
  return (
    <footer>
      <Box py={4} bgcolor="">
        <ContainerLG>
          <Divider />
          <GNRSFooter />
        </ContainerLG>
      </Box>
    </footer>
  );
}
