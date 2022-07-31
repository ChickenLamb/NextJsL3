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
import MyInfo from "./MyInfo";
import MyCourse from "./MyCourse";
import MyActivity from "./MyActivity";
import AddCourse from "./AddCourse";
import DashboardHome from "./DashboardHome";
import Logo from "../Icons/LOGO.svg";
import L3EDUCATION from "../Icons/L3_EDUCATION.svg";
import ONLINETUITION from "../Icons/ONLINE_TUITION.svg";
import Dashboardsvg from "../Icons/Home.svg";
import COURSES from "../Icons/Calendar.svg";
import EXCERCISE from "../Icons/Tick_Square.svg";
import Bookmarks from "../Icons/Bookmark.svg";
import AddCoursesvg from "../Icons/Add_Course.svg";
import InviteFriends from "../Icons/+.svg";
import down from "../Icons/down.svg";
import right from "../Icons/right.svg";
import left from "../Icons/left.svg";
import Settingssvg from "../Icons/Setting.svg";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

import { Button } from "@mui/material";
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

const drawerWidth = 265;

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
    // transition: theme.transitions.create("width", {
    //   easing: theme.transitions.easing.sharp,
    //   duration: theme.transitions.duration.enteringScreen,
    // }),
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
  const [AppBarStatus, setAppBarStatus] = React.useState("Dashboard");
  const [RightSideBarOpen, setRightSideBarOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: "flex", height: "100vh" }}>
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

          <Drawer
            variant="permanent"
            open={open}
            sx={{ height: "100vh", overflowY: "auto" }}
          >
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
            <List component="nav">
              <ListItemButton
                sx={{ marginTop: 8, marginBottom: 2 }}
                onClick={() => setAppBarStatus("Dashboard")}
              >
                <ListItemIcon>
                  <Image src={Dashboardsvg} height={30} width={30} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <span style={{ fontFamily: "'Advent Pro', sans-serif" }}>
                      Dashboard
                    </span>
                  }
                />
              </ListItemButton>
              <ListItemButton
                sx={{ my: 1 }}
                onClick={() => setAppBarStatus("MyCourse")}
              >
                <ListItemIcon>
                  <Image src={COURSES} height={30} width={30} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <span style={{ fontFamily: "'Advent Pro', sans-serif" }}>
                      My Course
                    </span>
                  }
                />
              </ListItemButton>
              <ListItemButton
                sx={{ my: 1 }}
                onClick={() => setAppBarStatus("MyActivity")}
              >
                <ListItemIcon>
                  <Image src={EXCERCISE} height={30} width={30} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <span style={{ fontFamily: "'Advent Pro', sans-serif" }}>
                      My Activity
                    </span>
                  }
                />
              </ListItemButton>
              <ListSubheader
                component="div"
                sx={{
                  marginTop: 6,
                  fontFamily: "'Advent Pro', sans-serif",
                  backgroundColor: "#FBE081",
                  fontSize: "1.1em",
                  px: 3,
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  spacing={1}
                >
                  MORE&nbsp;&nbsp;
                  <Image src={down} height={12} width={9.6} />
                </Stack>
              </ListSubheader>
              <ListItemButton
                sx={{ my: 1 }}
                onClick={() => setAppBarStatus("AddCourse")}
              >
                <ListItemIcon>
                  <Image src={AddCoursesvg} height={30} width={30} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <span style={{ fontFamily: "'Advent Pro', sans-serif" }}>
                      Add Course
                    </span>
                  }
                />
              </ListItemButton>
              <ListItemButton
                sx={{ my: 1 }}
                onClick={() => setAppBarStatus("MyInfo")}
              >
                <ListItemIcon>
                  <Image src={Bookmarks} height={30} width={30} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <span style={{ fontFamily: "'Advent Pro', sans-serif" }}>
                      My Info
                    </span>
                  }
                />
              </ListItemButton>
              <ListItemButton sx={{ my: 1 }}>
                <ListItemIcon>
                  <Image src={Settingssvg} height={30} width={30} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <span style={{ fontFamily: "'Advent Pro', sans-serif" }}>
                      Setting
                    </span>
                  }
                />
              </ListItemButton>
              <ListSubheader
                component="div"
                sx={{
                  marginTop: 6,
                  fontFamily: "'Advent Pro', sans-serif",
                  backgroundColor: "#FBE081",
                  fontSize: "1.1em",
                  px: 3,
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  spacing={1}
                >
                  Payment&nbsp;&nbsp;
                  <Image src={right} height={12} width={9.6} />
                </Stack>
              </ListSubheader>
              <ListItemButton sx={{ my: 1 }}>
                <ListItemIcon>
                  <Image src={InviteFriends} height={30} width={30} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <span style={{ fontFamily: "'Advent Pro', sans-serif" }}>
                      Invite Friends
                    </span>
                  }
                />
              </ListItemButton>
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
            <Container maxWidth="lg" sx={{ mt: 0, mb: 4 }}>
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
                      {/* GET */}
                      <DashboardHome token={props.token} />
                    </Paper>
                  </Grid>
                )}
                {AppBarStatus === "MyCourse" && (
                  <Grid item xs={12}>
                    <Paper
                      sx={{ p: 2, display: "flex", flexDirection: "column" }}
                    >
                      {/* GET */}
                      <MyCourse token={props.token} />
                    </Paper>
                  </Grid>
                )}
                {AppBarStatus === "MyActivity" && (
                  <Grid item xs={12}>
                    <Paper
                      sx={{ p: 2, display: "flex", flexDirection: "column" }}
                    >
                      {/* GET */}
                      <MyActivity token={props.token} />
                    </Paper>
                  </Grid>
                )}
                {AppBarStatus === "AddCourse" && (
                  <Grid item xs={12}>
                    <Paper
                      sx={{ p: 2, display: "flex", flexDirection: "column" }}
                    >
                      {/* GET && POST */}
                      {<AddCourse token={props.token} />}
                    </Paper>
                  </Grid>
                )}
                {AppBarStatus === "MyInfo" && (
                  <Grid item xs={12}>
                    <Paper
                      sx={{ p: 2, display: "flex", flexDirection: "column" }}
                    >
                      {/* POST */}
                      <MyInfo userData={props.userData} token={props.token} />
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
              width: RightSideBarOpen ? drawerWidth + 130 : 60,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: RightSideBarOpen ? drawerWidth + 130 : 60,
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
                <Grid item xs={1} my={"auto"}>
                  <Paper
                    elevation={0}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      onClick={() => {
                        RightSideBarOpen
                          ? setRightSideBarOpen(false)
                          : setRightSideBarOpen(true);
                      }}
                    >
                      <Image src={left} height={25} width={25} />
                    </Button>
                  </Paper>
                </Grid>
                {RightSideBarOpen && (
                  <Grid
                    item
                    xs={11}
                    sx={{ height: "100vh", overflowY: "auto" }}
                  >
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
                )}
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
