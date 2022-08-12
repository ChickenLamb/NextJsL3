import React from "react";
import img1 from "./Carousel/c001.webp";
import img2 from "./Carousel/c002.webp";
import img3 from "./Carousel/c003.webp";
import img4 from "./Carousel/c004.webp";
import img5 from "./Carousel/c005.webp";
import img6 from "./Carousel/c006.webp";
import img7 from "./Carousel/c007.webp";
import img8 from "./Carousel/c008.webp";
import img9 from "./Carousel/c009.webp";
import Image from "next/image";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const pageLimit = 9;

const Carousel = () => {
  const [page, setPage] = React.useState(0);
  React.useEffect(() => {
    setInterval(() => setPage((prev) => (prev + 1) % pageLimit), 8000);
  }, []);
  // React.useEffect(() => {
  //   console.log("page", page);
  // }, [page]);
  return (
    <div>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={2}
        height={330}
        width={830}
      >
        {page === 0 && (
          <Item>
            <Image src={img1} width={800} height={300} layout={"fixed"}></Image>
          </Item>
        )}
        {page === 1 && (
          <Item>
            <Image src={img2} width={800} height={300} layout={"fixed"}></Image>
          </Item>
        )}
        {page === 2 && (
          <Item>
            <Image src={img3} width={800} height={300} layout={"fixed"}></Image>
          </Item>
        )}
        {page === 3 && (
          <Item>
            <Image src={img4} width={800} height={300} layout={"fixed"}></Image>
          </Item>
        )}
        {page === 4 && (
          <Item>
            <Image src={img5} width={800} height={300} layout={"fixed"}></Image>
          </Item>
        )}
        {page === 5 && (
          <Item>
            <Image src={img6} width={800} height={300} layout={"fixed"}></Image>
          </Item>
        )}
        {page === 6 && (
          <Item>
            <Image src={img7} width={800} height={300} layout={"fixed"}></Image>
          </Item>
        )}
        {page === 7 && (
          <Item>
            <Image src={img8} width={800} height={300} layout={"fixed"}></Image>
          </Item>
        )}
        {page === 8 && (
          <Item>
            <Image src={img9} width={800} height={300} layout={"fixed"}></Image>
          </Item>
        )}
      </Stack>
    </div>
  );
};

export default Carousel;
