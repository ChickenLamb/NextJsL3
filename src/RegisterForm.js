import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { red, green, blue } from "@mui/material/colors";
import { useAuthenticator } from "@aws-amplify/ui-react";
import API from "../src/API";
import Image from "next/image";
import L3LOGO from "../src/Icons/L3_LOGO.svg";
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
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60vw",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const Root = styled("div")(({ theme }) => ({
  padding: theme.spacing(0),

  [theme.breakpoints.down("sm")]: {
    backgroundColor: blue[500],
    height: 1000,
  },
  [theme.breakpoints.up("sm")]: {
    backgroundColor: blue[500],
    height: 750,
  },
  [theme.breakpoints.up("md")]: {
    backgroundColor: blue[500],
    height: 500,
  },
  [theme.breakpoints.up("lg")]: {
    backgroundColor: blue[500],
    height: 100,
  },
}));
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function TransitionsModal(props) {
  function SubmitForm() {
    API("post", "/student/create", props.token, values).then((res) => {
      // console.log(values);
      if (res.status === 200 && res.message === "CREATE SUCCESS") {
        console.log("New User Created");
        props.newUserState(false);
      }
    });
  }
  const { signOut, user } = useAuthenticator((context) => [context.user]);
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [values, setValues] = React.useState({
    active: "Y",
    classInSchool: "",
    cognitoId: props.user.attributes.sub,
    dob: "",
    email: props.user.attributes.email,
    hpNo: props.user.attributes.phone_number.slice(-10),
    id: "string",
    name:
      props.user.attributes.family_name +
      " " +
      props.user.attributes.given_name,
    parentHpNo: "",
    parentName: "",
    school: "",
  });

  const handleChangeForm = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={props.status === true ? handleOpen : handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        sx={{ overflowY: "scroll" }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Root />
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              fontFamily={"'Andada Pro', serif"}
            >
              Welcome to L3 Education
            </Typography>
            <Typography
              id="transition-modal-description"
              sx={{ my: 2, width: "95%", textAlign: "center", mx: "auto" }}
              fontFamily={"'Andada Pro', serif"}
            >
              Please fill in the form below to start your application.The more
              information you can provide,the easier it will be assess your
              application.
            </Typography>
            <Grid container spacing={2}>
              {/* <Grid item xs={12} md={12}>
                <Item>
                  {console.log(
                    props.user.attributes.family_name +
                      " " +
                      props.user.attributes.given_name
                  )}
                  "active": "Y", "classInSchool": "S3EE1", "cognitoId":
                  "string", "dob": "1999-03-26", "email":
                  "engjinghui@gmail.com", "hpNo": "0123334455", "id": "string",
                  "name": "Jing Hui", "parentHpNo": "0197772233", "parentName":
                  "Hello", "school": "FYHS"
                </Item>
              </Grid> */}
              <Grid item xs={12} md={12}>
                <Item>
                  Name:
                  <TextField
                    required
                    id="filled-required"
                    label="Required"
                    defaultValue={
                      props.user.attributes.family_name +
                      " " +
                      props.user.attributes.given_name
                    }
                    onChange={handleChangeForm("name")}
                    variant="filled"
                  />
                </Item>
              </Grid>
              <Grid item xs={12} md={6}>
                <Item>
                  Date Of Birth:
                  <TextField
                    id="filled-number"
                    label="Required"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={handleChangeForm("dob")}
                    variant="filled"
                  />
                </Item>
              </Grid>
              <Grid item xs={12} md={6}>
                <Item>
                  Email:
                  <TextField
                    disabled
                    id="filled-disabled"
                    label="Registered Email"
                    defaultValue={props.user.attributes.email}
                    variant="filled"
                  />
                </Item>
              </Grid>
              <Grid item xs={12} md={6}>
                <Item>
                  Phone Number:
                  <TextField
                    id="filled-number"
                    label="Required"
                    defaultValue={props.user.attributes.phone_number.slice(-10)}
                    type="tel"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={handleChangeForm("hpNo")}
                    variant="filled"
                  />
                </Item>
              </Grid>

              <Grid item xs={12} md={6}>
                <Item>
                  School's Name:
                  <TextField
                    id="filled-number"
                    label="Required"
                    type="text"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={handleChangeForm("school")}
                    variant="filled"
                  />
                </Item>
              </Grid>
              <Grid item xs={12} md={6}>
                <Item>
                  Class In School:
                  <TextField
                    id="filled-number"
                    label="Required"
                    type="text"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={handleChangeForm("classInSchool")}
                    variant="filled"
                  />
                </Item>
              </Grid>
              <Grid item xs={12} md={6}></Grid>
              <Grid item xs={12} md={6}>
                <Item>
                  Parent's Name:
                  <TextField
                    id="filled-number"
                    label="Required"
                    type="text"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={handleChangeForm("parentName")}
                    variant="filled"
                  />
                </Item>
              </Grid>

              <Grid item xs={12} md={6}>
                <Item>
                  Parent's Phone Number:
                  <TextField
                    id="filled-number"
                    label="Required"
                    type="tel"
                    InputLabelProps={{
                      shrink: true,
                    }}
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
              <Grid item xs={12} md={12} container={true}>
                <ColorButton
                  sx={{
                    backgroundColor: "#FBE082",
                    color: red[500],
                    marginLeft: "auto",
                    marginRight: "auto",
                    "&:hover": {
                      backgroundColor: red[500],
                      color: "#FFFFFF",
                    },
                  }}
                  onClick={signOut}
                  variant="contained"
                >
                  Exit and Sign Out
                </ColorButton>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
