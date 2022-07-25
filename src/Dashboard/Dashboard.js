import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Image from "next/image";
import { mainListItems, secondaryListItems } from "./listItems";
import Profile from "./Profile";
import Chart from "./Chart";
import Deposits from "./Deposits";
import Orders from "./Orders";
import Settings from "./Settings";
import DashboardHome from "./DashboardHome";
import Logo from "../Icons/LOGO.svg";
import L3EDUCATION from "../Icons/L3_EDUCATION.svg";
import ONLINETUITION from "../Icons/ONLINE_TUITION.svg";
import Head from "next/head";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 295;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    width: drawerWidth,
    backgroundColor: "#FBE081",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

function DashboardContent(props) {
  const [open, setOpen] = React.useState(true);
  const [AppBarStatus, setAppBarStatus] = React.useState("Settings");
  const toggleDrawer = () => {
    setOpen(!open);
  };

  function setAppState(state) {
    setAppBarStatus(state);
  }

  return (
    <>
      <Head>
        <title>ALL COURSES </title>
      </Head>
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          {/* <AppBar position="absolute" open={open}>
            <Toolbar
              sx={{
                pr: "24px", // keep right padding when drawer closed
              }}
            >
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                sx={{
                  marginRight: "36px",
                  ...(open && { display: "none" }),
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
              >
                Dashboard
              </Typography>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Toolbar>
          </AppBar> */}

          <Drawer variant="permanent" open={open}>
            <Toolbar
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                px: [1],
              }}
            >
              <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={1}
                >
                  <Image src={Logo} height={53} width={56} />
                  <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="flex-start"
                    spacing={1}
                  >
                    <Image src={L3EDUCATION} height={16} width={132} />
                    <Image src={ONLINETUITION} height={22} width={144} />
                  </Stack>
                </Stack>
              </Container>

              {/* <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon />
              </IconButton> */}
            </Toolbar>
            <Divider />
            <List component="nav" setAppState={setAppState}>
              {mainListItems}

              {secondaryListItems}
            </List>
          </Drawer>

          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",
            }}
          >
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              <Grid container spacing={3}>
                {/* Chart */}
                {/* <Grid item xs={12} md={8} lg={9}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      height: 240,
                    }}
                  >
                    <Chart />
                  </Paper>
                </Grid> */}
                {/* Recent Deposits */}
                {/* <Grid item xs={12} md={4} lg={3}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      height: 240,
                    }}
                  >
                    <Deposits />
                  </Paper>
                </Grid> */}
                {/* Recent Orders */}
                {/* <Grid item xs={12}>
                  <Paper
                    sx={{ p: 2, display: "flex", flexDirection: "column" }}
                  >
                    <Orders />
                  </Paper>
                </Grid> */}
                {AppBarStatus === "Dashboard" && (
                  <Grid item xs={12}>
                    <Paper
                      sx={{ p: 2, display: "flex", flexDirection: "column" }}
                    >
                      <DashboardHome />
                    </Paper>
                  </Grid>
                )}
                {AppBarStatus === "Settings" && (
                  <Grid item xs={12}>
                    <Paper
                      sx={{ p: 2, display: "flex", flexDirection: "column" }}
                    >
                      <Settings userData={props.userData} token={props.token} />
                    </Paper>
                  </Grid>
                )}

                {/* <Grid item xs={12}>
                  <Paper
                    sx={{ p: 2, display: "flex", flexDirection: "column" }}
                  >
                    <Orders />
                  </Paper>
                </Grid> */}
              </Grid>

              <Copyright sx={{ pt: 4 }} />
            </Container>
          </Box>
          <Drawer
            sx={{
              width: drawerWidth + 130,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth + 130,
                backgroundColor: "#FFFFFF",
              },
            }}
            variant="permanent"
            anchor="right"
            open={open}
          >
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              <Grid container spacing={3}>
                {/* Profile */}
                <Grid item xs={12}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      wordBreak: "break-all",
                    }}
                  >
                    <Profile />
                  </Paper>
                </Grid>
              </Grid>
            </Container>
          </Drawer>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default function Dashboard(props) {
  return <DashboardContent userData={props.userData} token={props.token} />;
}
