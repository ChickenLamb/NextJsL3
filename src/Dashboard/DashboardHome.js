import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import NoImg from "../Icons/NoImg.svg";
import API from "../API";
import Image from "next/image";
import { Button } from "@mui/material";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  backgroundColor: "#FEF3F0",
}));
const pageLimit = 3;
const DashboardHome = (props) => {
  const [Announcement, setAnnouncement] = React.useState([]);
  const [page, setPage] = React.useState(0);
  // const intervalId = setInterval(() => setPage(++page % pageLimit), 10000);
  let total = 0;
  React.useEffect(() => {
    if (props.token !== null && total === 0) {
      total += 1;
      // use API as a function to call API anywhere
      setInterval(() => setPage((prev) => (prev + 1) % pageLimit), 5000);
      API("get", "/announcement/getAll/", props.token).then((res) => {
        console.log(res);
        if (res.status === 200 && res.message === "NOT FOUND") {
          // console.log("not found");
        } else if (res.status == 200 && res.message === "FOUND") {
          // console.log("found");
          setAnnouncement(res.data);
        }
      });
    }
  }, []);
  // React.useEffect(() => console.log(page), [page]);
  return (
    <>
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
        Announcement
      </Typography>
      {/* {Announcement.map(
        (data, index) =>
          index === page && (
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
                />
              </Item>
            </Stack>
          )
      )} */}
      <Stack
        my={1}
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={0}
      >
        {Announcement.map((data, index) => (
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
        ))}
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
      <Typography
        sx={{ fontFamily: "'Andada Pro', serif", fontWeight: "bold" }}
        component="h6"
        variant="h6"
        color="black"
        gutterBottom
      >
        My Activities
      </Typography>
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
