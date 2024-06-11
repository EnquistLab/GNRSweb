import { Box } from "@mui/material";
import Head from "next/head";

import { TopBar, Footer, ContainerLG } from "../";

export function Layout(props) {
    return (
        <>
            <Head>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-6QPVNY9KLT"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6QPVNY9KLT');
            `
                    }}
                />
                <title>GNRS - Geographic Name Resolution Service</title>
                <meta name="description"
                      content="An online tool for the standardization of global political division names."/>
                <meta name="keywords"
                      content="Geographic Name Resolution, GNRS, Global Political Division Standardization, Name Standardization Tool, Online Geographic Tool, Geographic Name Standardization, Global Name Resolution, Political Division Names, Standardize Place Names, Geographic Database Tool, Place Name Resolution, Political Geography, Geographic Names Online, Geographic Information System, GIS Name Standardization, Global Place Names, Location Name Resolution, International Political Boundaries, Geographic Terminology, Geopolitical Name Standardization, Cartographic Names, Toponymy, Place Name Database, Geographic Research, Mapping Tools, Geospatial Data, Location Standardization, Geographic Information, Geographical Names Database, Political Boundary Names, Place Name Management, Geospatial Technology, Global Naming Conventions, Geographic Data Integration, Geographic Studies, Political Geography Tool, Global Mapping, Geospatial Analysis"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="theme-color" content="#ffffff"/>
                <meta property="og:title" content="GNRS - Geographic Name Resolution Service"/>
                <meta property="og:description"
                      content="An online tool for the standardization of global political division names."/>
                <meta property="og:image" content="/favicon-32x32.png"/>
                <meta property="og:url" content="https://gnrs.biendata.org"/>
                <meta name="twitter:title" content="GNRS - Geographic Name Resolution Service"/>
                <meta name="twitter:description"
                      content="An online tool for the standardization of global political division names."/>
                <meta name="twitter:url" content="https://gnrs.biendata.org"/>
                <meta name="twitter:image" content="/favicon-32x32.png"/>
                <meta name="twitter:card"
                      content="An online tool for the standardization of global political division names."/>
                <link rel="canonical" href="https://gnrs.biendata.org"/>
            </Head>
            <Box display="flex" flexDirection="column" minHeight="100vh">
                <Box>
                    <TopBar/>
                </Box>
                <Box flexGrow={1} my={2}>
                    <ContainerLG>{props.children}</ContainerLG>
                </Box>
                <Box>
                    <Footer/>
                </Box>
            </Box>
        </>
    );
}
