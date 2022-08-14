import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Bell from "../Icons/Bell.svg";
import Chat from "../Icons/Chat.svg";
import Activity from "../Icons/Activity.svg";
import Record from "../Icons/Video.svg";
const logoSize = 50;
const profilePicSize = 100;
const ColorButton = styled(Button)(({ theme }) => ({
  textTransform: "capitalize",
  width: "fit-content",
  height: "fit-content",
  color: "#000000",
  backgroundColor: "#FEFEFF",
  fontFamily: "'Advent Pro', sans-serif",
  fontSize: "0.9em",
  paddingLeft: 38,
  paddingRight: 38,
  marginTop: 5,
  marginBottom: 5,
  "&:hover": {
    backgroundColor: "#4F46BA",
    color: "#FFFFFF",
  },
}));
const ImageButton = styled(Button)(({ theme }) => ({
  width: logoSize,
  height: logoSize,
  color: "#000000",
  backgroundColor: "#FEFEFF",
  WebkitFilter: "grayscale(1)",
  filter: "grayscale(1)",

  "&:hover": {
    backgroundColor: "#b0b945",
    color: "#FFFFFF",
    WebkitFilter: "invert(1)",
    filter: "invert(1)",
  },
}));

function preventDefault(event) {
  event.preventDefault();
}

export default function Profile() {
  const { signOut, user } = useAuthenticator((context) => [context.user]);
  return (
    <React.Fragment>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={1}
        mb={5}
      >
        <Typography
          component="h6"
          variant="h6"
          color="black"
          gutterBottom
          sx={{ width: 0.539, fontFamily: "'Advent Pro', sans-serif" }}
        >
          Hi,
          {/* undefined is student otherwise role is:teacher or admin */}
          {user.signInUserSession.accessToken.payload["cognito:groups"] ===
          undefined
            ? "Student"
            : user.signInUserSession.accessToken.payload["cognito:groups"]}
        </Typography>

        <ImageButton variant="contained">
          <Image src={Chat} height={logoSize} width={logoSize} />
        </ImageButton>
        <ImageButton variant="contained">
          <Image src={Bell} height={logoSize} width={logoSize} />
        </ImageButton>
      </Stack>
      <Box
        component="div"
        sx={{ display: "flex", justifyContent: "center", py: 3 }}
      >
        <Image
          src={"https://picsum.photos/100/100"}
          height={profilePicSize}
          width={profilePicSize}
          layout={"fixed"}
          style={{ marginLeft: "auto", marginRight: "auto" }}
        />
      </Box>

      <Typography
        component="h6"
        variant="h6"
        color="#707A89"
        gutterBottom
        fontFamily={"'Advent Pro', sans-serif"}
        fontSize={"1em"}
        align={"center"}
      >
        {user.attributes.email}
      </Typography>
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={1}
        mb={1}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "center",
            py: 3,
            textAlign: "center",
            flexDirection: "column",
          }}
        >
          <Box component="span" fontFamily={"'Andada Pro', serif"}>
            5
          </Box>
          <Box
            component="span"
            fontFamily={"'Advent Pro', sans-serif"}
            fontSize={"0.8em"}
            color={"#707A89"}
          >
            Course
          </Box>
        </Box>
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "center",
            py: 3,
            textAlign: "center",
            flexDirection: "column",
          }}
        >
          <Box component="span" fontFamily={"'Andada Pro', serif"}>
            10
          </Box>
          <Box
            component="span"
            fontFamily={"'Advent Pro', sans-serif"}
            fontSize={"0.8em"}
            color={"#707A89"}
          >
            Activity
          </Box>
        </Box>
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "center",
            py: 3,
            textAlign: "center",
            flexDirection: "column",
          }}
        >
          <Box component="span" fontFamily={"'Andada Pro', serif"}>
            50
          </Box>
          <Box
            component="span"
            fontFamily={"'Advent Pro', sans-serif"}
            fontSize={"0.8em"}
            color={"#707A89"}
          >
            Like
          </Box>
        </Box>
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={1}
        mb={3}
      >
        <ColorButton variant="contained">My Info</ColorButton>
        <ColorButton variant="contained">Edit</ColorButton>
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={1}
        mb={5}
      >
        <ColorButton
          variant="contained"
          sx={{
            width: 152,
            height: 187,
            backgroundColor: "#F2E9FF",
            boxShadow: "2px 4px #888888",
            borderRadius: 3,
            "&:hover": {
              backgroundColor: "#F2E9FF",
              transform: "scale(0.99)",

              borderRadius: 3,
            },
          }}
        >
          <Image src={Record} layout={"fill"} priority />
        </ColorButton>
        <ColorButton
          variant="contained"
          sx={{
            width: 152,
            height: 187,
            backgroundColor: "#FEF3F0",
            boxShadow: "2px 4px #888888",
            borderRadius: 3,
            "&:hover": {
              backgroundColor: "#FEF3F0",
              transform: "scale(0.99)",

              borderRadius: 3,
            },
          }}
        >
          <Image src={Activity} layout={"fill"} priority />
        </ColorButton>
      </Stack>
      <ColorButton
        sx={{
          backgroundColor: "#FBE082",
          color: "#11243D",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        onClick={signOut}
        variant="contained"
      >
        Sign Out
      </ColorButton>
      {/* <Typography component="h5" variant="h5" color="black" gutterBottom>
        token:
      </Typography>
      <Typography
        component="p"
        variant="p"
        color="black"
        gutterBottom
        sx={{
          height: "35vh",
          overflowY: "scroll",
          cursor: "pointer",
          "&:hover": {
            background: "#efefef",
          },
        }}
      >
        {user.signInUserSession.accessToken.jwtToken}
      </Typography> */}
    </React.Fragment>
  );
}
