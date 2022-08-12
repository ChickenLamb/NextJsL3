import React from "react";
import Typography from "@mui/material/Typography";
import API from "../API";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Math from "../Icons/Math.svg";
import English from "../Icons/English.svg";
import Physics from "../Icons/Physics.svg";
import BahasaMelayu from "../Icons/BahasaMelayu.svg";
import NoImg from "../Icons/NoImg.svg";
import clock from "../Icons/clock.svg";
import lesson from "../Icons/lesson.svg";
import star from "../Icons/star.svg";
import Image from "next/image";
import { styled } from "@mui/material/styles";
function convertHHMM(timeData) {
  return (
    timeData.toFixed(0) +
    "h" +
    (timeData.toString().slice(-3, -2) === "."
      ? (parseInt(timeData.toString().slice(-2)) / 100) * 60 + "m"
      : "")
  );
}
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Item2 = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "#434343",
  fontSize: "1em",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
const ColorButton = styled(Button)(({ theme }) => ({
  textTransform: "capitalize",
  width: "fit-content",
  height: 39,
  color: "#000000DE",
  borderBottomRightRadius: 15,
  borderTopLeftRadius: 30,
  backgroundColor: "#FFE790",
  fontFamily: "'Advent Pro', sans-serif",
  fontSize: "1em",
  paddingLeft: 18,
  paddingRight: 18,
  marginTop: 5,
  marginBottom: 5,
  "&:hover": {
    backgroundColor: "#fefefe",
    color: "#000",
  },
}));

const MyCourse = (props) => {
  const [Activity, setActivity] = React.useState([]);
  const [Course, setCourse] = React.useState([]);

  let total = 0;
  function ClassroomLinkFetch(Id) {
    API("get", "/onlineClassroom/get/" + Id, props.token).then((res) => {
      // console.log(res);
      if (res.status === 200 && res.message === "NOT FOUND") {
        // console.log("not found");
      } else if (res.status == 200 && res.message === "FOUND") {
        // console.log("found");
        // console.log(res.data.googleClassroom);
        window.open(res.data.zoomUrl, "_blank");
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
          console.log(res.data);
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
        MyCourse
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          {Course.filter((Course) =>
            Activity.some((Activity) => Activity.courseId === Course.id)
          ).map((data, index) => (
            <Item sx={{ borderRadius: 5 }}>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={1}
              >
                <Item elevation={0}>
                  <Box
                    component="div"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    <Image
                      src={
                        data.courseName.toLowerCase().includes("bahasa") ||
                        data.courseName.toLowerCase().includes("马来文")
                          ? BahasaMelayu
                          : data.courseName.toLowerCase().includes("math") ||
                            data.courseName.toLowerCase().includes("数")
                          ? Math
                          : data.courseName.toLowerCase().includes("physic") ||
                            data.courseName.toLowerCase().includes("物")
                          ? Physics
                          : data.courseName.toLowerCase().includes("english") ||
                            data.courseName.toLowerCase().includes("英")
                          ? English
                          : NoImg
                      }
                      layout={"fixed"}
                      style={{
                        borderBottomRightRadius: 160,
                        borderTopLeftRadius: 40,
                        borderTopRightRadius: 20,
                      }}
                    />
                  </Box>
                  <Typography ml={3} pt={1} sx={{ textAlign: "left" }}>
                    Teacher:&nbsp;{data.teacherName}
                  </Typography>

                  <Stack
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                    spacing={2}
                  >
                    <Item2 elevation={0}>
                      <Image src={lesson} layout={"fixed"} />
                      &nbsp;4 LESSON
                    </Item2>
                    <Item2 elevation={0}>
                      <Image src={clock} layout={"fixed"} />
                      &nbsp;
                      {/* {data.endTime - data.startTime} */}
                      {convertHHMM(
                        (parseInt(data.endTime.slice(0, 2) * 60) +
                          parseInt(data.endTime.slice(3, 5)) -
                          parseInt(
                            data.startTime.slice(0, 2) * 60 +
                              parseInt(data.startTime.slice(3, 5))
                          )) /
                          60
                      )}
                    </Item2>
                    <Item2 elevation={0}>
                      <Image src={star} layout={"fixed"} />
                      <Image src={star} layout={"fixed"} />
                      <Image src={star} layout={"fixed"} />
                      <Image src={star} layout={"fixed"} />
                      <Image src={star} layout={"fixed"} />
                    </Item2>
                  </Stack>
                </Item>
                <Item elevation={0}>
                  <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}
                  >
                    <Item elevation={0}>
                      <Typography
                        sx={{
                          color: "#FF0000",
                          fontWeight: "bolder",
                          fontSize: "1.8em",
                          textAlign: "center",
                        }}
                      >
                        {data.courseName}
                      </Typography>
                    </Item>
                    <Item elevation={0}>
                      <Typography ml={3} pt={1} sx={{ textAlign: "left" }}>
                        ClassDay:&nbsp;{data.dayOfWeek}
                        <br />
                        Time:&nbsp;{data.startTime.slice(0, 5)}~
                        {data.endTime.slice(0, 5)}
                      </Typography>
                    </Item>
                    <Item sx={{ wordBreak: "break-word" }} elevation={0}>
                      {data.courseDescription}
                    </Item>
                  </Stack>

                  <ColorButton
                    variant="contained"
                    onClick={() => ClassroomLinkFetch(data.id)}
                  >
                    Go to Class
                  </ColorButton>
                  {/* <Typography
                    sx={{
                      color: "#000000DE",
                      fontWeight: "bolder",
                      fontSize: "1.8em",
                      textAlign: "center",
                      backgroundColor: "#FFE790",
                      borderBottomRightRadius: 15,
                      borderTopLeftRadius: 55,
                      width: 236,
                      mx: "auto",
                      marginTop: -5,
                      zIndex: 1,
                      position: "relative",
                    }}
                  >
                    RM{data.courseCost}
                  </Typography> */}
                </Item>
              </Stack>
            </Item>
          ))}
        </Stack>
      </Box>
    </>
  );
};

export default MyCourse;
