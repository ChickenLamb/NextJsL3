import React from "react";
import Typography from "@mui/material/Typography";
import API from "../API";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Math from "../Icons/Math.svg";
import English from "../Icons/English.svg";
import Physics from "../Icons/Physics.svg";
import BahasaMelayu from "../Icons/BahasaMelayu.svg";
import NoImg from "../Icons/NoImg.svg";
import clock from "../Icons/clock.svg";
import lesson from "../Icons/lesson.svg";
import star from "../Icons/star.svg";
import Image from "next/image";

import { experimentalStyled as styled } from "@mui/material/styles";
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
  padding: theme.spacing(2),
  textAlign: "center",
  color: "#434343",
  fontSize: "1em",
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
const AddCourse = (props) => {
  const [Course, setCourse] = React.useState([]);
  const PicHeight = 253;
  const PicWidth = 436;
  React.useEffect(() => {
    if (props.token !== null) {
      // use API as a function to call API anywhere
      API("get", "/course/list/", props.token).then((res) => {
        console.log(res);
        if (res.status === 200 && res.message === "NOT FOUND") {
          console.log("not found");
        } else if (res.status == 200 && res.message === "FOUND") {
          console.log("found");
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
        Add Course
      </Typography>
      <Grid container spacing={2}>
        {Course.map((data, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Item>
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
                  width={PicWidth}
                  height={PicHeight}
                  layout={"fixed"}
                />
              </Box>
              <Typography
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
              </Typography>
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
              <Typography ml={3} pt={1} sx={{ textAlign: "left" }}>
                ClassDay:&nbsp;{data.dayOfWeek}
                <br />
                Class Duration:&nbsp;{data.startTime.slice(0, 5)}~
                {data.endTime.slice(0, 5)}
                <br />
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
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default AddCourse;
