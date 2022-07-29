import React from "react";
import Typography from "@mui/material/Typography";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import API from "../API";
import Image from "next/image";
import Math from "../Icons/Math.svg";
import English from "../Icons/English.svg";
import Physics from "../Icons/Physics.svg";
import BahasaMelayu from "../Icons/BahasaMelayu.svg";
import NoImg from "../Icons/NoImg.svg";
import { v4 as uuidv4 } from "uuid";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  backgroundColor: "#F2E9FF",
}));
const ColorButton = styled(Button)(({ theme }) => ({
  textTransform: "capitalize",
  width: "fit-content",
  height: 39,
  color: "#fff",
  borderRadius: 50,
  backgroundColor: "#51459E",
  fontFamily: "'Advent Pro', sans-serif",
  fontSize: "1em",
  paddingLeft: 8,
  paddingRight: 8,
  marginTop: 5,
  marginBottom: 5,
  "&:hover": {
    backgroundColor: "#fefefe",
    color: "#000",
  },
}));

const MyActivity = (props) => {
  const [Activity, setActivity] = React.useState([]);
  const [Course, setCourse] = React.useState([]);
  const PicHeight = 185;
  const PicWidth = 185;
  let total = 0;
  function ClassroomLinkFetch(Id) {
    API("get", "/onlineClassroom/get/" + Id, props.token).then((res) => {
      // console.log(res);
      if (res.status === 200 && res.message === "NOT FOUND") {
        // console.log("not found");
      } else if (res.status == 200 && res.message === "FOUND") {
        // console.log("found");
        // console.log(res.data.googleClassroom);
        window.open(res.data.googleClassroom, "_blank");
      }
    });
  }
  React.useEffect(() => {
    if (props.token !== null && total === 0) {
      total += 1;
      // use API as a function to call API anywhere
      API("get", "/courseSubscription/list/", props.token).then((res) => {
        // console.log(res);
        if (res.status === 200 && res.message === "NOT FOUND") {
          // console.log("not found");
        } else if (res.status == 200 && res.message === "FOUND") {
          // console.log("found");
          setActivity(res.data);
        }
      });
      API("get", "/course/list/", props.token).then((res) => {
        // console.log(res);
        if (res.status === 200 && res.message === "NOT FOUND") {
          // console.log("not found");
        } else if (res.status == 200 && res.message === "FOUND") {
          // console.log("found");
          setCourse(res.data);
        }
      });
    }
  }, []);
  return (
    <>
      <Typography
        sx={{ fontFamily: "'Andada Pro', serif", fontWeight: "bold" }}
        component="h4"
        variant="h4"
        color="black"
        gutterBottom
      >
        My Activity
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {Course.filter((Course) =>
            Activity.some((Activity) => Activity.courseId === Course.id)
          ).map((data, index) => (
            <Grid item xs={6} key={index}>
              <Item elevation={0} sx={{ backgroundColor: "#fff" }}>
                <Grid
                  container
                  rowSpacing={0}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item xs={1}></Grid>
                  <Grid item xs={10}>
                    <Item sx={{ borderRadius: 3 }}>
                      <Grid
                        container
                        rowSpacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                      >
                        <Grid item xs={5}>
                          <Item elevation={0}>
                            <Image
                              src={
                                data.courseName
                                  .toLowerCase()
                                  .includes("bahasa") ||
                                data.courseName.toLowerCase().includes("马来文")
                                  ? BahasaMelayu
                                  : data.courseName
                                      .toLowerCase()
                                      .includes("math") ||
                                    data.courseName.toLowerCase().includes("数")
                                  ? Math
                                  : data.courseName
                                      .toLowerCase()
                                      .includes("physic") ||
                                    data.courseName.toLowerCase().includes("物")
                                  ? Physics
                                  : data.courseName
                                      .toLowerCase()
                                      .includes("english") ||
                                    data.courseName.toLowerCase().includes("英")
                                  ? English
                                  : NoImg
                              }
                              layout={"responsive"}
                            />
                          </Item>
                        </Grid>
                        <Grid item xs={7}>
                          <Item elevation={0}>
                            <Box
                              component="div"
                              p={2}
                              sx={{
                                display: "flex",
                                justifyContent: "center",
                                textAlign: "center",
                                backgroundColor: "#51459E",
                                color: "#FFFFFF",
                                fontFamily: "'Advent Pro', sans-serif",
                                wordBreak: "break-word",
                                fontSize: "1.2em",
                                borderRadius: 20,
                                height: 1,
                              }}
                            >
                              {data.courseName}
                            </Box>
                          </Item>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography
                            sx={{
                              fontFamily: "'Andada Pro', serif",
                              fontSize: "0.85em",
                              wordBreak: "break-word",
                              fontWeight: "light",
                            }}
                            component="span"
                            variant="body1"
                            color="#7B7B7B"
                            gutterBottom
                          >
                            Teacher&nbsp;{data.teacherName}
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          xs={6}
                          sx={{
                            display: "flex",
                            alignItems: "flex-end",
                            justifyContent: "flex-end",
                          }}
                        >
                          <ColorButton
                            variant="contained"
                            onClick={() => ClassroomLinkFetch(data.id)}
                          >
                            Go to Do
                          </ColorButton>
                        </Grid>
                      </Grid>
                    </Item>
                  </Grid>
                  <Grid item xs={1}></Grid>
                </Grid>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default MyActivity;
