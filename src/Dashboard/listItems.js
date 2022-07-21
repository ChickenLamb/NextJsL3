import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Stack from "@mui/material/Stack";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Image from "next/image";
import Dashboard from "../Icons/Home.svg";
import COURSES from "../Icons/Calendar.svg";
import Settings from "../Icons/Setting.svg";
import EXCERCISE from "../Icons/Tick_Square.svg";
import TodaySheduled from "../Icons/Time_Square.svg";
import Bookmarks from "../Icons/Bookmark.svg";
import AddCourse from "../Icons/Add_Course.svg";
import InviteFriends from "../Icons/+.svg";
import down from "../Icons/down.svg";
import right from "../Icons/right.svg";
export const mainListItems = (
  <React.Fragment>
    <ListItemButton sx={{ marginTop: 8, marginBottom: 2 }}>
      <ListItemIcon>
        <Image src={Dashboard} height={30} width={30} />
      </ListItemIcon>
      <ListItemText
        primary={
          <span style={{ fontFamily: "'Advent Pro', sans-serif" }}>
            Dashboard
          </span>
        }
      />
    </ListItemButton>
    <ListItemButton sx={{ my: 1 }}>
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
    <ListItemButton sx={{ my: 1 }}>
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
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
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
    <ListItemButton sx={{ my: 1 }}>
      <ListItemIcon>
        <Image src={AddCourse} height={30} width={30} />
      </ListItemIcon>
      <ListItemText
        primary={
          <span style={{ fontFamily: "'Advent Pro', sans-serif" }}>
            Add Course
          </span>
        }
      />
    </ListItemButton>
    <ListItemButton sx={{ my: 1 }}>
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
        <Image src={Settings} height={30} width={30} />
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
  </React.Fragment>
);
