import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProTip from "../src/ProTip";
import Link from "../src/Link";
import Copyright from "../src/Copyright";
import Head from "next/head";
function preventDefault(event) {
  event.preventDefault();
}
export default function Index() {
  return (
    <>
      <Head>
        {/* paste here previous copy links form the google font website */}
        <title>L3 EDUCATION </title>
      </Head>
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Next.js example
          </Typography>
          <Link href="/about" color="secondary">
            Go to the about page
          </Link>

          <Link
            href="/Profile"
            color="secondary"
            target="_blank"
            rel="noopener"
          >
            Go to Profile
          </Link>
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </>
  );
}
