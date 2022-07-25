import React from "react";
import Typography from "@mui/material/Typography";
const DashboardHome = () => {
  return (
    <Typography
      sx={{ fontFamily: "'Andada Pro', serif", fontWeight: "bold" }}
      component="h4"
      variant="h4"
      color="black"
      gutterBottom
    >
      Dashboard
    </Typography>
  );
};

export default DashboardHome;
