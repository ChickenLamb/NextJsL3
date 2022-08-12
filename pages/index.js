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
  return (
    <>
      <Head>
        {/* paste here previous copy links form the google font website */}
        <title>L3 EDUCATION </title>
      </Head>
      <Container maxWidth="lg">
        <Stack
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          spacing={2}
        >
          <Item>
            <Image
              src={L3LOGO}
              layout={"fixed"}
              style={{ marginLeft: "auto", marginRight: "auto" }}
              width={200}
              height={100}
              priority
            />
          </Item>
          <Item>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={7}
            >
              <Item>
                <Link href="/about" color="secondary">
                  主页
                </Link>
              </Item>
              <Item>
                <Link href="/about" color="secondary">
                  关于我们
                </Link>
              </Item>
              <Item>
                <Link href="/about" color="secondary">
                  课程
                </Link>
              </Item>
              <Item>
                <Link href="/about" color="secondary">
                  活动
                </Link>
              </Item>
              <Item>
                <Link href="/about" color="secondary">
                  更多资讯
                </Link>
              </Item>
            </Stack>
          </Item>
          <Item sx={{ marginLeft: 20 }}>
            <Link
              href="/Profile"
              color="secondary"
              target="_blank"
              rel="noopener"
            >
              登入账号
            </Link>
          </Item>
        </Stack>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Item>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Item>优质独中教育平台</Item>
              <Item>快乐学习，享受学习</Item>
              <Item>
                <Link href="/about" color="secondary">
                  免费课程
                </Link>
              </Item>
            </Stack>
          </Item>
          <Item>
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
        >
          <Item>关于我们</Item>
          <Item>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Item>最现代化的教育平台</Item>
              <Item sx={{ pl: 30 }}>与时并进的教育平台</Item>
              <Item>
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
        >
          <Item>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Item>追求新教育模式， 跳出传统教育的框架。</Item>
              <Item sx={{ pl: 30 }}>与时并进的教育平台</Item>

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
          <Item>使命</Item>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          spacing={2}
        >
          <Item>核心价值</Item>
          <Item>values</Item>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          spacing={2}
        >
          <Item>
            <Image
              src={Facility_Dark1}
              layout={"fixed"}
              style={{ marginLeft: "auto", marginRight: "auto" }}
              width={300}
              height={500}
              priority
            ></Image>
          </Item>
          <Item>
            <Image
              src={Facility_Dark2}
              layout={"fixed"}
              style={{ marginLeft: "auto", marginRight: "auto" }}
              width={300}
              height={500}
              priority
            ></Image>
          </Item>
          <Item>
            <Image
              src={Facility_Dark3}
              layout={"fixed"}
              style={{ marginLeft: "auto", marginRight: "auto" }}
              width={300}
              height={500}
              priority
            ></Image>
          </Item>
          <Item>
            <Image
              src={Facility_Dark4}
              layout={"fixed"}
              style={{ marginLeft: "auto", marginRight: "auto" }}
              width={300}
              height={500}
              priority
            ></Image>
          </Item>
        </Stack>
        <Stack
          direction="column"
          justifyContent="space-evenly"
          alignItems="center"
          spacing={2}
        >
          <Item>家长&学生好评</Item>
          <Item>
            <Reviews />
          </Item>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          spacing={2}
        >
          <Item>
            <Typography variant="h6" component="p" gutterBottom>
              准备好备战统考了吗 ?
            </Typography>
            <Typography variant="h7" component="p" gutterBottom>
              立即询问以获取免费试课机会.
            </Typography>
          </Item>
          <Item>
            <Link href="/about" color="secondary">
              立即询问我们
            </Link>
          </Item>
        </Stack>
        <Stack
          direction="column"
          justifyContent="space-evenly"
          alignItems="center"
          spacing={2}
        >
          <Item>
            <Typography variant="h5" component="p" gutterBottom>
              联系我们
            </Typography>
            <Typography variant="h7" component="p" gutterBottom>
              有任何相关疑问，请与我们联系。 我们将会尽快回复你们，谢谢
            </Typography>
          </Item>
          <Item>
            {/* <Link href="/about" color="secondary">
              send message
            </Link> */}
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <Item>
                  <TextField
                    required
                    id="standard-basic"
                    label="姓名?"
                    variant="standard"
                  />
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item>
                  <TextField
                    required
                    id="standard-basic"
                    label="电邮?"
                    variant="standard"
                  />
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item>
                  <TextField
                    id="standard-basic"
                    label="联系电话?"
                    variant="standard"
                  />
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item>
                  <TextField
                    id="standard-basic"
                    label="学校?"
                    variant="standard"
                  />
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item>
                  <TextField
                    sx={{ width: "35vw" }}
                    id="standard-basic"
                    label="请写下您的问题"
                    variant="standard"
                  />
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item>
                  <Checkbox defaultChecked />
                  <Typography variant="h7" component="span" gutterBottom>
                    I have read and accept the Terms of Service & Privacy Policy
                    *
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item
                  sx={{
                    height: 1,
                  }}
                >
                  <Link href="/about" color="secondary">
                    send message
                  </Link>
                </Item>
              </Grid>
            </Grid>
          </Item>
        </Stack>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Item>
              <Stack
                direction="column"
                justifyContent="space-evenly"
                alignItems="center"
                spacing={2}
              >
                <Item>
                  <Image
                    src={L3LOGO}
                    layout={"fixed"}
                    style={{ marginLeft: "auto", marginRight: "auto" }}
                    width={200}
                    height={100}
                    priority
                  />
                </Item>
                <Item>
                  <Copyright />
                </Item>
              </Stack>
            </Item>
          </Grid>
          <Grid item xs={2}>
            <Item>
              <Stack
                direction="column"
                justifyContent="space-evenly"
                alignItems="center"
                spacing={2}
              >
                <Item>
                  <Typography variant="h7" component="p" gutterBottom>
                    ​快速链接
                  </Typography>
                </Item>
                <Item>
                  <Link href="/about" color="secondary">
                    关于我们
                  </Link>
                </Item>
                <Item>
                  <Link href="/about" color="secondary">
                    课程
                  </Link>
                </Item>
                <Item>
                  <Link href="/about" color="secondary">
                    活动
                  </Link>
                </Item>
              </Stack>
            </Item>
          </Grid>
          <Grid item xs={2}>
            <Item>
              <Stack
                direction="column"
                justifyContent="space-evenly"
                alignItems="center"
                spacing={2}
              >
                <Item>
                  <Typography variant="h7" component="p" gutterBottom>
                    更多链接
                  </Typography>
                </Item>
                <Item>
                  <Link href="/about" color="secondary">
                    最新资讯
                  </Link>
                </Item>
                <Item>
                  <Link href="/about" color="secondary">
                    联系我们
                  </Link>
                </Item>
                <Item>
                  <Link href="/about" color="secondary">
                    条规
                  </Link>
                </Item>
              </Stack>
            </Item>
          </Grid>
          <Grid item xs={5}>
            <Item>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Item>
                    <Link href="/about" color="secondary">
                      FOLLOW US
                    </Link>
                  </Item>
                </Grid>
                <Grid item xs={2.4}>
                  <Item>xs=4</Item>
                </Grid>
                <Grid item xs={2.4}>
                  <Item>xs=4</Item>
                </Grid>
                <Grid item xs={2.4}>
                  <Item>xs=4</Item>
                </Grid>
                <Grid item xs={2.4}>
                  <Item>xs=4</Item>
                </Grid>
                <Grid item xs={2.4}>
                  <Item>xs=4</Item>
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
    </>
  );
}
