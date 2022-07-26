import * as React from "react";
import Link from "@mui/material/Link";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import API from "../API.js";
const profilePicSize = 150;
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
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function MyInfo(props) {
  function SubmitForm() {
    API("post", "/student/create", props.token, values).then((res) => {
      //   console.log(values);
      if (res.status === 200 && res.message === "CREATE SUCCESS") {
        console.log("User Data Updated");
      }
    });
  }
  const [values, setValues] = React.useState({
    active: "Y",
    classInSchool: props.userData.classInSchool,
    cognitoId: props.userData.cognitoId,
    dob: props.userData.dob,
    email: props.userData.email,
    hpNo: props.userData.hpNo,
    id: "string",
    name: props.userData.name,
    parentHpNo: props.userData.parentHpNo,
    parentName: props.userData.parentName,
    school: props.userData.school,
  });

  const handleChangeForm = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
    console.log(values);
  };

  return (
    <React.Fragment>
      <Typography
        sx={{ fontFamily: "'Andada Pro', serif", fontWeight: "bold" }}
        component="h4"
        variant="h4"
        color="black"
        gutterBottom
      >
        My Info
      </Typography>
      <Box
        component="div"
        sx={{ display: "flex", justifyContent: "center", py: 3 }}
      >
        <Image
          src={"https://picsum.photos/150/150"}
          height={profilePicSize}
          width={profilePicSize}
          layout={"fixed"}
          style={{ marginLeft: "auto", marginRight: "auto" }}
        />
      </Box>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={12}>
            <Item elevation={0}>
              Email:
              <br />
              <TextField
                disabled
                id="filled-disabled"
                label="Registered Email"
                defaultValue={props.userData.email}
                variant="filled"
              />
            </Item>
          </Grid>
          <Grid item xs={12} md={6}>
            <Item elevation={0}>
              Name:
              <br />
              <TextField
                required
                id="filled-required"
                label="Required"
                defaultValue={props.userData.name}
                onChange={handleChangeForm("name")}
                variant="filled"
              />
            </Item>
          </Grid>
          <Grid item xs={12} md={6}>
            <Item elevation={0}>
              Date Of Birth:
              <br />
              <TextField
                id="filled-number"
                label="Required"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                defaultValue={props.userData.dob}
                onChange={handleChangeForm("dob")}
                variant="filled"
              />
            </Item>
          </Grid>

          <Grid item xs={12} md={6}>
            <Item elevation={0}>
              Phone Number:
              <br />
              <TextField
                id="filled-number"
                label="Required"
                type="tel"
                InputLabelProps={{
                  shrink: true,
                }}
                defaultValue={props.userData.hpNo}
                onChange={handleChangeForm("hpNo")}
                variant="filled"
              />
            </Item>
          </Grid>

          <Grid item xs={12} md={6}>
            <Item elevation={0}>
              School's Name:
              <br />
              <TextField
                id="filled-number"
                label="Required"
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
                defaultValue={props.userData.school}
                onChange={handleChangeForm("school")}
                variant="filled"
              />
            </Item>
          </Grid>
          <Grid item xs={12} md={6}>
            <Item elevation={0}>
              Class In School:
              <br />
              <TextField
                id="filled-number"
                label="Required"
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
                defaultValue={props.userData.classInSchool}
                onChange={handleChangeForm("classInSchool")}
                variant="filled"
              />
            </Item>
          </Grid>
          <Grid item xs={12} md={6}></Grid>
          <Grid item xs={12} md={6}>
            <Item elevation={0}>
              Parent's Name:
              <br />
              <TextField
                id="filled-number"
                label="Required"
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
                defaultValue={props.userData.parentName}
                onChange={handleChangeForm("parentName")}
                variant="filled"
              />
            </Item>
          </Grid>

          <Grid item xs={12} md={6}>
            <Item elevation={0}>
              Parent's Phone Number:
              <br />
              <TextField
                id="filled-number"
                label="Required"
                type="tel"
                InputLabelProps={{
                  shrink: true,
                }}
                defaultValue={props.userData.parentHpNo}
                onChange={handleChangeForm("parentHpNo")}
                variant="filled"
              />
            </Item>
          </Grid>
          <Grid item xs={12} md={12} container={true}>
            <ColorButton
              sx={{
                backgroundColor: "#FBE082",
                color: "#11243D",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              onClick={SubmitForm}
              variant="contained"
            >
              Submit
            </ColorButton>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
