import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProTip from "../src/ProTip";
import Link from "../src/Link";
import Copyright from "../src/Copyright";
import Head from "next/head";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import L3LOGO from "../src/Icons/L3_LOGO.svg";
import Facility_Dark1 from "../src/Icons/Facility_Dark1.svg";
import Facility_Dark2 from "../src/Icons/Facility_Dark2.svg";
import Facility_Dark3 from "../src/Icons/Facility_Dark3.svg";
import Facility_Dark4 from "../src/Icons/Facility_Dark4.svg";
import instagram from "../src/Icons/instagram.svg";
import whatsapp from "../src/Icons/whatsapp.svg";
import redbook from "../src/Icons/redbook.svg";
import youtube from "../src/Icons/youtube.svg";
import facebook from "../src/Icons/facebook.svg";
import table from "../src/Icons/table.png";
import CounterGroup from "../src/Icons/CounterGroup.svg";
import Reviews from "../src/Components/Reviews";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import NativeSelect from "@mui/material/NativeSelect";
import InputLabel from "@mui/material/InputLabel";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Index() {
  const [Language, setLanguage] = React.useState("Chinese - Cn");
  const myRef = React.useRef(null);
  const myRef2 = React.useRef(null);
  const myRef3 = React.useRef(null);
  const myRef4 = React.useRef(null);
  const myRef5 = React.useRef(null);
  const executeScroll = (value) => {
    if (value === 1) {
      myRef.current.scrollIntoView();
    } else if (value === 2) {
      myRef2.current.scrollIntoView();
    } else if (value === 3) {
      myRef3.current.scrollIntoView();
    } else if (value === 4) {
      myRef4.current.scrollIntoView();
    } else if (value === 5) {
      myRef5.current.scrollIntoView();
    }
  };
  return (
    <>
      <Head>
        {/* paste here previous copy links form the google font website */}
        <title>L3 EDUCATION </title>
      </Head>
      {/* style={{ backgroundColor: "rgb(1, 87, 155,0.2)" }} */}
      <Paper style={{ backgroundColor: "rgba(255, 244, 229, 1)" }}>
        <Container
          maxWidth="xl"
          // backgroundColor: "rgba(255, 244, 229, 0.2)"
          sx={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
        >
          <Stack
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={2}
          >
            <Item elevation={0}>
              <Image
                src={L3LOGO}
                layout={"fixed"}
                style={{ marginLeft: "auto", marginRight: "auto" }}
                width={200}
                height={100}
                priority
              />
            </Item>
            <Item elevation={0}>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={7}
              >
                <a onClick={() => executeScroll(1)}>
                  <Item
                    sx={{
                      fontSize: "1.2em",
                      "&:hover": {
                        borderBottom: "5px solid #01579B",
                      },
                    }}
                  >
                    主页
                  </Item>
                </a>
                <a onClick={() => executeScroll(2)}>
                  <Item
                    elevation={0}
                    sx={{
                      fontSize: "1.2em",
                      "&:hover": {
                        borderBottom: "5px solid #01579B",
                        cursor: "pointer",
                      },
                    }}
                  >
                    关于我们
                  </Item>
                </a>
                <a onClick={() => executeScroll(3)}>
                  <Item
                    elevation={0}
                    sx={{
                      fontSize: "1.2em",
                      "&:hover": {
                        borderBottom: "5px solid #01579B",
                        cursor: "pointer",
                      },
                    }}
                  >
                    课程
                  </Item>
                </a>
                <a onClick={() => executeScroll(4)}>
                  <Item
                    elevation={0}
                    sx={{
                      fontSize: "1.2em",
                      "&:hover": {
                        borderBottom: "5px solid #01579B",
                        cursor: "pointer",
                      },
                    }}
                  >
                    活动
                  </Item>
                </a>
                <a onClick={() => executeScroll(5)}>
                  <Item
                    elevation={0}
                    sx={{
                      fontSize: "1.2em",
                      "&:hover": {
                        borderBottom: "5px solid #01579B",
                        cursor: "pointer",
                      },
                    }}
                  >
                    更多资讯
                  </Item>
                </a>
              </Stack>
            </Item>
            <Link
              href="/Profile"
              color="secondary"
              target="_blank"
              rel="noopener"
              underline="none"
            >
              <Item
                sx={{
                  width: 170,
                  borderRadius: 100,
                  fontWeight: "bolder",
                  backgroundColor: "#FDB600",
                  color: "#000",
                  fontSize: "1.2em",
                }}
              >
                登入/注册
              </Item>
            </Link>
          </Stack>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            py={5}
            ref={myRef}
          >
            <Item elevation={0}>
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Item
                  elevation={0}
                  sx={{
                    color: "rgba(0, 0, 0, 0.9)",
                    fontSize: "2.6em",
                    fontWeight: "bolder",
                  }}
                >
                  优质独中教育平台
                </Item>
                <Item elevation={0} sx={{ fontSize: "1.2em" }}>
                  快乐学习，享受学习
                </Item>
                <Link
                  href="/Profile"
                  color="secondary"
                  target="_blank"
                  rel="noopener"
                  underline="none"
                >
                  <Item
                    elevation={0}
                    sx={{
                      width: 170,
                      borderRadius: 100,
                      fontWeight: "bolder",
                      backgroundColor: "#FDB600",
                      color: "#000",
                      fontSize: "1.3em",
                    }}
                  >
                    免费试课
                  </Item>
                </Link>
              </Stack>
            </Item>
            <Item elevation={0}>
              <iframe
                width="424"
                height="238"
                src="https://www.youtube.com/embed/KkKn-51Aevo"
                title="L3 EDUCATION 线上教育平台 || 专为统考生们打造的线上教育 || 一对一补习 || 小班制补习"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </Item>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={2}
            py={5}
            ref={myRef2}
          >
            <Item
              elevation={0}
              sx={{
                backgroundColor: "#000",
                color: "#fff",
                fontWeight: "bolder",
                fontSize: "2em",
              }}
            >
              关于我们
            </Item>
            <Item elevation={0}>
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Item
                  elevation={0}
                  sx={{ fontSize: "1.3em", fontWeight: "light", color: "#000" }}
                >
                  最现代化的教育平台
                </Item>
                <Item
                  elevation={0}
                  sx={{
                    pl: 30,
                    fontSize: "1.3em",
                    fontWeight: "bold",
                    color: "#000",
                  }}
                >
                  与时并进的教育平台
                </Item>
                <Item elevation={0}>
                  <Image
                    src={CounterGroup}
                    layout={"fixed"}
                    style={{ marginLeft: "auto", marginRight: "auto" }}
                    width={380}
                    height={150}
                    priority
                  />
                </Item>
                <Item
                  sx={{
                    wordBreak: "break-all",
                    width: 500,
                    borderLeft: "10px solid #979797",
                    position: "relative",
                    left: 60,
                  }}
                >
                  L3 源自于LifeLong
                  Learning的缩写，意指终身学习。由于学习是一辈子的事，所以学生更应该抱着快乐轻松的心态去学习，并享受学习的当下，不追求完美的成果，只追求不断进步的自己。
                </Item>
              </Stack>
            </Item>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={2}
            py={5}
            ref={myRef3}
          >
            <Item elevation={0}>
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Item
                  elevation={0}
                  sx={{
                    color: "rgba(0, 0, 0, 0.9)",
                    fontSize: "1.8em",
                    textAlign: "left",
                  }}
                >
                  追求新教育模式，
                  <br /> 跳出传统教育的框架。
                </Item>
                {/* <Item
                sx={{
                  pl: 30,
                  color: "rgba(0, 0, 0, 0.9)",
                  fontSize: "1.2em",
                  textAlign: "left",
                }}
              >
                与时并进的教育平台
              </Item> */}

                <Item
                  sx={{
                    wordBreak: "break-all",
                    width: 500,
                    borderLeft: "10px solid #979797",
                  }}
                >
                  我们旨在帮助学生找到快乐和轻松学习的方法，并借助科技的力量，以燃烧学生对学习的热忱从而提升学习效率。
                </Item>
              </Stack>
            </Item>
            <Item
              sx={{ color: "#01579B", fontWeight: "bolder", fontSize: "2em" }}
            >
              使命
            </Item>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={2}
            py={5}
            ref={myRef4}
          >
            <Item
              sx={{ color: "#01579B", fontWeight: "bolder", fontSize: "2em" }}
            >
              核心价值
            </Item>
            <Item
              elevation={0}
              sx={{
                height: 399,
                width: 800,
              }}
            >
              <Image
                src={table}
                layout={"responsive"}
                style={{ marginLeft: "auto", marginRight: "auto" }}
                priority
              />
            </Item>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={2}
            py={5}
            ref={myRef5}
          >
            <Item elevation={0}>
              <Image
                src={Facility_Dark1}
                layout={"fixed"}
                style={{ marginLeft: "auto", marginRight: "auto" }}
                width={300}
                height={500}
                priority
              />
            </Item>
            <Item elevation={0}>
              <Image
                src={Facility_Dark2}
                layout={"fixed"}
                style={{ marginLeft: "auto", marginRight: "auto" }}
                width={300}
                height={500}
                priority
              ></Image>
            </Item>
            <Item elevation={0}>
              <Image
                src={Facility_Dark3}
                layout={"fixed"}
                style={{ marginLeft: "auto", marginRight: "auto" }}
                width={300}
                height={500}
                priority
              ></Image>
            </Item>
            <Item elevation={0}>
              <Image
                src={Facility_Dark4}
                layout={"fixed"}
                style={{ marginLeft: "auto", marginRight: "auto" }}
                width={300}
                height={500}
                priority
              ></Image>
            </Item>
            <Item
              elevation={0}
              sx={{
                backgroundColor: "#000",
                color: "#fff",
                fontWeight: "bolder",
                fontSize: "2em",
              }}
            >
              平台
              <br />
              特点
            </Item>
          </Stack>
          <Stack
            direction="column"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={2}
            py={5}
          >
            <Item
              sx={{ color: "#01579B", fontWeight: "bolder", fontSize: "2em" }}
            >
              家长&学生好评
            </Item>
            <Item elevation={0}>
              <Reviews />
            </Item>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={2}
            mt={10}
            mb={5}
            p={1}
            sx={{
              borderRadius: 10,
              border: "1px solid #03A9F4",
            }}
          >
            <Item elevation={0}>
              <Typography
                variant="h6"
                component="p"
                gutterBottom
                sx={{ fontWeight: "bolder", color: "#000" }}
              >
                准备好备战统考了吗 ?
              </Typography>
              <Typography
                variant="h7"
                component="p"
                gutterBottom
                sx={{ fontWeight: "light", color: "#000" }}
              >
                立即询问以获取免费试课机会.
              </Typography>
            </Item>
            <Link
              href="/Profile"
              color="secondary"
              target="_blank"
              rel="noopener"
              underline="none"
            >
              <Item
                sx={{
                  width: 270,
                  paddingTop: 2,
                  paddingBottom: 2,
                  borderRadius: 100,
                  fontWeight: "bolder",
                  backgroundColor: "#FDB600",
                  color: "#000",
                }}
              >
                立即询问我们
              </Item>
            </Link>
          </Stack>
          <Stack
            direction="column"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={2}
            py={5}
          >
            <Item elevation={0}>
              <Typography
                sx={{ color: "#01579B", fontWeight: "bolder" }}
                variant="h5"
                component="p"
                gutterBottom
              >
                联系我们
              </Typography>
              <Typography variant="h7" component="p" gutterBottom>
                有任何相关疑问，请与我们联系。
                <br /> 我们将会尽快回复你们，谢谢
              </Typography>
            </Item>
            <Item sx={{ border: "1px solid rgba(0, 0, 0, 0.14)" }}>
              {/* <Link href="/about" color="secondary">
              send message
            </Link> */}
              <Grid
                container
                rowSpacing={3}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  <Item elevation={0}>
                    <TextField
                      required
                      id="standard-basic"
                      label="姓名?"
                      variant="standard"
                    />
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item elevation={0}>
                    <TextField
                      required
                      id="standard-basic"
                      label="电邮?"
                      variant="standard"
                    />
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item elevation={0}>
                    <TextField
                      id="standard-basic"
                      label="联系电话?"
                      variant="standard"
                    />
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item elevation={0}>
                    <TextField
                      id="standard-basic"
                      label="学校?"
                      variant="standard"
                    />
                  </Item>
                </Grid>
                <Grid item xs={12}>
                  <Item elevation={0}>
                    <TextField
                      sx={{ width: "35vw" }}
                      id="standard-basic"
                      label="请写下您的问题"
                      variant="standard"
                    />
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Checkbox defaultChecked />
                  <Typography variant="h7" component="span" gutterBottom>
                    I have read and accept the Terms of Service & Privacy Policy
                    *
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Link
                    href="/Profile"
                    color="secondary"
                    target="_blank"
                    rel="noopener"
                    underline="none"
                  >
                    <Item
                      sx={{
                        width: 200,
                        paddingTop: 1.2,
                        paddingBottom: 1.2,
                        borderRadius: 100,
                        fontWeight: "bolder",
                        backgroundColor: "#FDB600",
                        color: "#fff",
                        fontSize: "0.9em",
                        mx: "auto",
                      }}
                    >
                      SEND MESSAGE
                    </Item>
                  </Link>
                </Grid>
              </Grid>
            </Item>
          </Stack>
          <Grid
            container
            spacing={2}
            p={2}
            sx={{
              border: "1px solid #F8EDBA",
              borderRadius: 2,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
            }}
          >
            <Grid item xs={3}>
              <Item elevation={0}>
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                  sx={{ height: 280 }}
                >
                  <Item elevation={0}>
                    <Image
                      src={L3LOGO}
                      layout={"fixed"}
                      style={{ marginLeft: "auto", marginRight: "auto" }}
                      width={200}
                      height={100}
                      priority
                    />
                  </Item>
                  <Item elevation={0}>
                    <Copyright />
                  </Item>
                </Stack>
              </Item>
            </Grid>
            <Grid item xs={2}>
              <Item elevation={0}>
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                  sx={{ height: 280 }}
                >
                  <Item elevation={0}>
                    <Typography
                      variant="h6"
                      component="span"
                      gutterBottom
                      sx={{
                        color: "#FFC107",
                        WebkitTextStroke: "1px rgba(0, 0, 0, 0.67)",
                      }}
                    >
                      ​快速链接
                    </Typography>
                  </Item>
                  <Item elevation={0}>
                    <Link
                      href="/about"
                      underline="hover"
                      color="rgba(0, 0, 0, 0.54)"
                    >
                      关于我们
                    </Link>
                  </Item>
                  <Item elevation={0}>
                    <Link
                      href="/about"
                      underline="hover"
                      color="rgba(0, 0, 0, 0.54)"
                    >
                      课程
                    </Link>
                  </Item>
                  <Item elevation={0}>
                    <Link
                      href="/about"
                      underline="hover"
                      color="rgba(0, 0, 0, 0.54)"
                    >
                      活动
                    </Link>
                  </Item>
                </Stack>
              </Item>
            </Grid>
            <Grid item xs={2}>
              <Item elevation={0}>
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                  sx={{ height: 280 }}
                >
                  <Item elevation={0}>
                    <Typography
                      variant="h6"
                      component="span"
                      gutterBottom
                      sx={{
                        color: "#FFC107",
                        WebkitTextStroke: "1px rgba(0, 0, 0, 0.67)",
                      }}
                    >
                      更多链接
                    </Typography>
                  </Item>

                  <Item elevation={0}>
                    <Link
                      href="/about"
                      underline="hover"
                      color="rgba(0, 0, 0, 0.54)"
                    >
                      最新资讯
                    </Link>
                  </Item>
                  <Item elevation={0}>
                    <Link
                      href="/about"
                      underline="hover"
                      color="rgba(0, 0, 0, 0.54)"
                    >
                      联系我们
                    </Link>
                  </Item>
                  <Item elevation={0}>
                    <Link
                      href="/about"
                      underline="hover"
                      color="rgba(0, 0, 0, 0.54)"
                    >
                      条规
                    </Link>
                  </Item>
                </Stack>
              </Item>
            </Grid>
            <Grid item xs={5}>
              <Item elevation={0} sx={{ height: 280 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Link
                      href="/Profile"
                      color="secondary"
                      target="_blank"
                      rel="noopener"
                      underline="none"
                    >
                      <Item
                        elevation={0}
                        sx={{
                          width: 230,
                          py: 2,
                          borderRadius: 100,
                          fontWeight: "bolder",
                          backgroundColor: "#FDB600",
                          color: "#fefefe",
                          WebkitTextStroke: "1px rgba(0, 0, 0, 0.67)",
                          fontSize: "1.3em",
                          mx: "auto",
                        }}
                      >
                        FOLLOW US
                      </Item>
                    </Link>
                  </Grid>
                  <Grid item xs={2.4}>
                    <Item elevation={0}>
                      <Link
                        href="https://wa.link/b2tzw6"
                        color="secondary"
                        target="_blank"
                        rel="noopener"
                      >
                        <Image
                          src={whatsapp}
                          layout={"fixed"}
                          style={{ marginLeft: "auto", marginRight: "auto" }}
                          width={50}
                          height={50}
                          priority
                        />
                      </Link>
                    </Item>
                  </Grid>
                  <Grid item xs={2.4}>
                    <Item elevation={0}>
                      <Link
                        href="https://www.facebook.com/L3Education/"
                        color="secondary"
                        target="_blank"
                        rel="noopener"
                      >
                        <Image
                          src={facebook}
                          layout={"fixed"}
                          style={{ marginLeft: "auto", marginRight: "auto" }}
                          width={50}
                          height={50}
                          priority
                        />
                      </Link>
                    </Item>
                  </Grid>
                  <Grid item xs={2.4}>
                    <Item elevation={0}>
                      <Link
                        href="https://www.instagram.com/l3.education/"
                        color="secondary"
                        target="_blank"
                        rel="noopener"
                      >
                        <Image
                          src={instagram}
                          layout={"fixed"}
                          style={{ marginLeft: "auto", marginRight: "auto" }}
                          width={50}
                          height={50}
                          priority
                        />
                      </Link>
                    </Item>
                  </Grid>
                  <Grid item xs={2.4}>
                    <Item elevation={0}>
                      <Image
                        src={redbook}
                        layout={"fixed"}
                        style={{ marginLeft: "auto", marginRight: "auto" }}
                        width={50}
                        height={50}
                        priority
                      />
                    </Item>
                  </Grid>
                  <Grid item xs={2.4}>
                    <Item elevation={0}>
                      <Link
                        href="https://www.youtube.com/channel/UCOR6nC3byiV3m6wpvTKpclA"
                        color="secondary"
                        target="_blank"
                        rel="noopener"
                      >
                        <Image
                          src={youtube}
                          layout={"fixed"}
                          style={{ marginLeft: "auto", marginRight: "auto" }}
                          width={50}
                          height={50}
                          priority
                        />
                      </Link>
                    </Item>
                  </Grid>
                  <Grid item xs={12}>
                    <Item>
                      <FormControl fullWidth>
                        <InputLabel
                          variant="standard"
                          htmlFor="uncontrolled-native"
                        >
                          Language
                        </InputLabel>
                        <NativeSelect
                          defaultValue={2}
                          inputProps={{
                            name: "language",
                            id: "uncontrolled-native",
                          }}
                        >
                          <option value={1}>English - En</option>
                          <option value={2}>Chinese - Cn</option>
                        </NativeSelect>
                      </FormControl>
                    </Item>
                  </Grid>
                </Grid>
              </Item>
            </Grid>
          </Grid>
          {/* <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Next.js example
          </Typography>

          <ProTip />
          
        </Box> */}
        </Container>
      </Paper>
    </>
  );
}
