import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import NoImg from "../Icons/NoImg.svg";
import clock from "../Icons/clock.svg";
import lesson from "../Icons/lesson.svg";
import star from "../Icons/star.svg";
import Math from "../Icons/Math.svg";
import English from "../Icons/English.svg";
import Physics from "../Icons/Physics.svg";
import BahasaMelayu from "../Icons/BahasaMelayu.svg";
import API from "../API";
import Image from "next/image";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "fit-content",
  // bgcolor: "background.paper",
  // border: "2px solid #000",
  // borderRadius: 5,
  // boxShadow: 24,
  p: 4,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

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
  backgroundColor: "#FEF3F0",
}));
const Item2 = styled(Paper)(({ theme }) => ({
  background: "none",
  ...theme.typography.body2,
  padding: theme.spacing(0),
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
  height: "fit-content",
  color: "#000000DE",
  backgroundColor: "#4F46BA",
  fontFamily: "'Advent Pro', sans-serif",
  fontSize: "1em",
  paddingLeft: 18,
  paddingRight: 18,
  marginTop: 5,
  marginBottom: 5,
  borderRight: "15px solid rgb(249 137 107)",
  "&:hover": {
    backgroundColor: "#f52cae",
    boxShadow:
      "0 10px 16px 0 rgb(249 137 107 / 20%), 0 6px 20px 0 rgb(249 137 107 / 19%) !important",
  },
}));
const pageLimit = 3;
let AnnouncementPages = 4;
const DashboardHome = (props) => {
  const [SelectCourseId, setSelectCourseId] = React.useState(null);
  const [Timetable, setTimetable] = React.useState([]);
  const [Announcement, setAnnouncement] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [Activity, setActivity] = React.useState([]);
  const [Course, setCourse] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let total = 0;
  function convertMonth(number) {
    if (number === 1) return "MON";
    else if (number === 2) return "TUE";
    else if (number === 3) return "WED";
    else if (number === 4) return "THUR";
    else if (number === 5) return "FRI";
    else if (number === 6) return "SAT";
    else if (number === 7) return "SUN";
  }
  function ClassroomLinkFetch(SelectCourseId, variant) {
    console.log(SelectCourseId);
    API("get", "/onlineClassroom/get/" + SelectCourseId, props.token).then(
      (res) => {
        // console.log(res);
        if (res.status === 200 && res.message === "NOT FOUND") {
          // console.log("not found");
        } else if (res.status == 200 && res.message === "FOUND") {
          // console.log("found");
          // console.log(res.data.googleClassroom);
          if (variant === "google") {
            window.open(res.data.googleClassroom, "_blank");
          } else if (variant === "zoom") {
            window.open(res.data.zoomUrl, "_blank");
          }
        }
      }
    );
  }
  React.useEffect(() => {
    if (props.token !== null && total === 0) {
      total += 1;
      // use API as a function to call API anywhere
      setInterval(() => setPage((prev) => (prev + 1) % pageLimit), 10000);

      API("get", "/announcement/getAll/", props.token).then((res) => {
        // console.log(res);
        if (res.status === 200 && res.message === "NOT FOUND") {
          // console.log("not found");
        } else if (res.status == 200 && res.message === "FOUND") {
          // console.log("found");
          setAnnouncement(res.data);
        }
      });
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
  React.useEffect(() => {
    if (Activity.length > 0) {
      // console.log(Activity);
      setTimetable([]);
      Activity.forEach((element) => {
        API("get", "/timetable/list/" + element.courseId, props.token).then(
          (res) => {
            // console.log(res);
            if (res.status === 200 && res.message === "NOT FOUND") {
              // console.log("not found");
            } else if (res.status == 200 && res.message === "FOUND") {
              // console.log("found");
              setTimetable((prevState) => [...prevState, ...res.data]);
            }
          }
        );
      });
    }
  }, [Activity]);
  React.useEffect(() => {
    console.log("timetable", Timetable);
  }, [Timetable]);
  // React.useEffect(() => console.log(page), [page]);
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          <Grid container spacing={2}>
            {Course.filter((Course) => SelectCourseId === Course.id).map(
              (data, index) => (
                <Grid item xs={12} md={12} key={index}>
                  <Item sx={{ backgroundColor: "#FCC1C1" }}>
                    <Box
                      component="div"
                      p={2}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        backgroundColor: "#FCC1C1",
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
                        layout={"fixed"}
                      />
                    </Box>
                    <Typography
                      sx={{
                        color: "#000000",
                        fontWeight: "bold",
                        fontSize: "1.8em",
                        textAlign: "center",
                      }}
                    >
                      {data.courseName}
                    </Typography>
                    <Typography
                      ml={3}
                      pt={1}
                      sx={{
                        textAlign: "left",
                        wordBreak: "break-all",
                        maxWidth: 500,
                        maxHeight: 200,
                        color: "#434343",
                      }}
                    >
                      ClassDay:&nbsp;{data.dayOfWeek}
                      <br />
                      Class Time:&nbsp;{data.startTime.slice(0, 5)}~
                      {data.endTime.slice(0, 5)}
                      <br />
                      Teacher:&nbsp;{data.teacherName}
                      <br />
                      Course content:&nbsp;{data.courseDescription}
                    </Typography>
                    <ColorButton
                      sx={{
                        px: 5,
                        py: 3.5,
                        borderTopLeftRadius: 50,
                        borderBottomRightRadius: 25,
                        backgroundColor: "#FFE790",
                        color: "#000",
                        borderRight: 0,
                        "&:hover": {
                          backgroundColor: "#000",
                          color: "#fff",
                        },
                      }}
                      variant="contained"
                      onClick={() => ClassroomLinkFetch(SelectCourseId, "zoom")}
                    >
                      START COURSE
                    </ColorButton>
                  </Item>
                </Grid>
              )
            )}
          </Grid>
        </Box>
      </Modal>
      <Typography
        sx={{ fontFamily: "'Andada Pro', serif", fontWeight: "bold" }}
        component="h4"
        variant="h4"
        color="black"
        gutterBottom
      >
        Dashboard
      </Typography>
      <Typography
        sx={{ fontFamily: "'Andada Pro', serif", fontWeight: "bold" }}
        component="h6"
        variant="h6"
        color="black"
        gutterBottom
      >
        Timetable
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Stack
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          spacing={2}
          px={2}
        >
          {["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THUR", "FRI"].map(
            (data, index) => (
              <Item sx={{ width: "100%" }}>
                <Typography
                  sx={{ fontFamily: "'Andada Pro', serif", fontWeight: "bold" }}
                  component="p"
                  variant="h7"
                  color="black"
                  gutterBottom
                  textAlign={"left"}
                >
                  {index + 1}
                </Typography>
                {/* convertMonth(data.dayOfWeek) === data && data.courseDate year === this year && data.courseDate month === this month && data.courseDate day === this day(+-depends on today's date) */}

                <Typography
                  sx={{ fontFamily: "'Andada Pro', serif", fontWeight: "bold" }}
                  component="p"
                  variant="h7"
                  color="black"
                  gutterBottom
                >
                  {data}
                </Typography>
              </Item>
            )
          )}
        </Stack>
      </Box>
      <Typography
        sx={{ fontFamily: "'Andada Pro', serif", fontWeight: "bold" }}
        component="h6"
        variant="h6"
        color="black"
        gutterBottom
      >
        Announcement
      </Typography>
      {Announcement.map(
        (data, index) =>
          index === page &&
          index < AnnouncementPages && (
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={0}
              key={index}
            >
              <Item
                elevetion={0}
                sx={{
                  wordBreak: "break-word",
                  width: 650,
                  height: 273,
                  borderBottomRightRadius: 0,
                  borderTopRightRadius: 0,
                  boxShadow: "none",
                }}
              >
                <Typography
                  component="h5"
                  variant="h5"
                  color="#AC6755"
                  gutterBottom
                  sx={{
                    fontFamily: "'Andada Pro', serif",
                    fontWeight: "bold",
                  }}
                >
                  {data.title}
                </Typography>

                <Typography
                  component="p"
                  variant="body1"
                  color="#51459E"
                  gutterBottom
                  sx={{
                    fontFamily: "'Andada Pro', serif",
                    fontWeight: "bold",
                  }}
                >
                  {data.description}
                </Typography>
              </Item>
              <Item
                elevetion={0}
                sx={{
                  borderBottomLeftRadius: 0,
                  borderTopLeftRadius: 0,
                  boxShadow: "none",
                }}
              >
                <Image
                  onMouseEnter={() => console.log("enter")}
                  src={data.imageUrl ? data.imageUrl : NoImg}
                  height={250}
                  width={250}
                  layout={"fixed"}
                  style={{ marginLeft: "auto", marginRight: "auto" }}
                  priority
                />
              </Item>
            </Stack>
          )
      )}
      <Stack
        my={1}
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={0}
      >
        {Announcement.map(
          (data, index) =>
            index < AnnouncementPages && (
              <Item
                elevation={0}
                sx={{ mx: 1, backgroundColor: "#FFFFFF" }}
                key={index}
              >
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: 500,
                    width: 25,
                    height: 10,
                    backgroundColor: page === index ? "#4F46BA" : "#FBE081",
                    "&:hover": {
                      backgroundColor: "#4F46BA",
                    },
                  }}
                  onClick={() => setPage(index)}
                  onMouseEnter={() => setPage(index)}
                ></Button>
              </Item>
            )
        )}
      </Stack>
      <Typography
        sx={{ fontFamily: "'Andada Pro', serif", fontWeight: "bold" }}
        component="h6"
        variant="h6"
        color="black"
        gutterBottom
      >
        Upcoming Courses
      </Typography>
      <Box sx={{ width: "100%", overflowX: "auto" }}>
        <Stack
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          spacing={2}
        >
          {Course.filter((Course) =>
            Activity.some((Activity) => Activity.courseId === Course.id)
          ).map((data, index) => (
            <Item key={index} elevation={0} sx={{ backgroundColor: "#fff" }}>
              <ColorButton
                onClick={() => {
                  setOpen(true);
                  setSelectCourseId(data.id);
                }}
                sx={{
                  wordBreak: "keep-all",
                  px: 5,
                  borderRadius: 5,
                }}
              >
                <Stack
                  direction="column"
                  justifyContent="space-evenly"
                  alignItems="flex-start"
                  spacing={2}
                >
                  <Item2 elevation={0}>
                    <Typography
                      sx={{
                        fontFamily: "'Andada Pro', serif",
                        fontWeight: "bold",
                        color: "#FFFFFF",
                      }}
                      component="h6"
                      variant="h6"
                      color="black"
                      gutterBottom
                    >
                      {/* {index}
                      &nbsp; */}
                      {data.courseName}
                    </Typography>
                  </Item2>
                  <Item2 elevation={0}>
                    <Typography
                      sx={{
                        fontFamily: "'Advent Pro', sans-serif",
                        fontWeight: "bold",
                        color: "#FFFFFF",
                      }}
                      component="p"
                      variant="body1"
                      color="black"
                      gutterBottom
                    >
                      {convertMonth(data.dayOfWeek)}
                      &nbsp;
                      {data.startTime.slice(0, 5)}-{data.endTime.slice(0, 5)}
                    </Typography>
                  </Item2>
                </Stack>
              </ColorButton>
            </Item>
          ))}
        </Stack>
      </Box>
      <Typography
        sx={{ fontFamily: "'Andada Pro', serif", fontWeight: "bold" }}
        component="h6"
        variant="h6"
        color="black"
        gutterBottom
      >
        My Activities
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
                    <Item sx={{ borderRadius: 3, backgroundColor: "#F2E9FF" }}>
                      <Grid
                        container
                        rowSpacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                      >
                        <Grid item xs={5}>
                          <Item
                            sx={{ backgroundColor: "#F2E9FF" }}
                            elevation={0}
                          >
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
                          <Item
                            sx={{ backgroundColor: "#F2E9FF" }}
                            elevation={0}
                          >
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
                            onClick={() =>
                              ClassroomLinkFetch(data.id, "google")
                            }
                            sx={{
                              borderRadius: 50,
                              borderRight: 0,
                              color: "#fff",
                              "&:hover": {
                                backgroundColor: "#fff",
                                color: "#000",
                              },
                            }}
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
      <Typography
        sx={{ fontFamily: "'Andada Pro', serif", fontWeight: "bold" }}
        component="h6"
        variant="h6"
        color="black"
        gutterBottom
      >
        Recomended /videos(Junior/Senior)
      </Typography>
    </>
  );
};

export default DashboardHome;
