import * as React from "react";

import axios from "axios";

import { useSelector } from "react-redux";
import { RootStore } from "@/global/index";

// import { NextSeo } from "next-seo";
import NextLink from "next/link";

// material
// import { styled } from "@mui/material/styles";
// material
import Label from "components/Label";

import { Box, Tab, Stack, Grid, Link } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { StoryPostI } from "@/types/models/Story/Story.model";

// components

// import { Icon } from "@iconify/react";
// import Cloud from "@iconify/icons-ant-design/cloud-server";

// import

export type Grade = "mi" | "mts" | "ma";

export type AlumniInTechnoNatura = Array<{
  grade: Grade;
  startPeriod: number;
  branch: string;
}>;

const alumni: AlumniInTechnoNatura = [
  { grade: "mi", startPeriod: 2014, branch: "ew32" },
];

export default function RolesPage() {
  const authState = useSelector((state: RootStore) => state.user);
  const [stories, setStories] = React.useState<{
    fetched: boolean;
    message: string;
    status: string;
    stories?: StoryPostI;
  }>({ fetched: false, message: "", status: "" });

  const [tab, setTab] = React.useState("public");

  const handleChange = (event: any, newValue: any) => {
    setTab(newValue);
  };

  React.useEffect(() => {
    fetchStories();
  }, []);

  async function fetchStories() {
    try {
      // eslint-disable-next-line no-shadow
      const storiesRes = await axios.post<{
        message: string;
        status: string;
        stories?: StoryPostI;
      }>(`${process.env.NEXT_PUBLIC_SERVER}/story/getStories`, {
        authToken: authState.token,
      });
      setStories({
        fetched: true,
        message: "Success Fethed Stories",
        status: "success",
        stories: storiesRes.data.stories,
      });
    } catch (err) {
      console.error(err);
      setStories({
        fetched: true,
        message: "error on server",
        status: "error",
      });
    }
  }

  //   console.log(
  //     "    console.log(checkRoles(authState.me?.roles, permission));",
  //     checkRoles(authState.me?.roles, ["admin"])
  //   );

  console.log("stories", stories);

  // eslint-disable-next-line no-unused-vars
  return (
    <>
      <TabContext value={tab}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Posted" value="public" />
            <Tab label="Drafts" value="private" />
            <Tab label="Archives" value="archives" />
          </TabList>
        </Box>
        <TabPanel value="public">
          <Stack
            sx={{ marginTop: 1 }}
            direction="row"
            justifyContent="space-between"
          >
            <Typography variant="h5" color="grayText">
              Here is your project(s)
            </Typography>
            <NextLink href="/project/create">
              <Button variant="contained">Create Project</Button>
            </NextLink>
          </Stack>
          {/* @ts-ignore */}
          halo this is posted
        </TabPanel>
        <TabPanel value="private">
          <Stack
            sx={{ marginTop: 1 }}
            direction="row"
            justifyContent="space-between"
          >
            <Typography variant="h5" color="grayText">
              Here is your project(s)
            </Typography>
            <NextLink href="/project/create">
              <Button variant="contained">Create Project</Button>
            </NextLink>
          </Stack>
          {/* @ts-ignore */}
          halo this is drafts
        </TabPanel>

        <TabPanel value="archives">
          {/* @ts-ignore */}
          TechnoNatura Depok
          <Grid container spacing={3}>
            {alumni.map((alumni) => {
              return (
                <Grid
                  key={alumni.branch}
                  item
                  xs={12}
                  sm={5}
                  // @ts-ignore
                  md={4}
                >
                  <Card>
                    <CardContent
                      sx={{ padding: "10px 15px", paddingTop: "20px" }}
                    >
                      <Typography variant="h5" component="div">
                        {/* eslint-disable-next-line no-underscore-dangle */}
                        <Link>
                          {alumni.grade == "mi"
                            ? "Madrasah Ibtidiyah"
                            : alumni.grade == "ma"
                            ? "Madrasah Aliyah"
                            : "Madrasah Tsanawiyah"}
                        </Link>
                      </Typography>

                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {alumni.grade == "mi"
                          ? "Madrasah Ibtidiyah is an elementary school"
                          : alumni.grade == "ma"
                          ? "Madrasah Aliyah"
                          : "Madrasah Tsanawiyah"}
                      </Typography>

                      <Label size="small" style={{ marginLeft: "5px" }}>
                        12 Projects
                      </Label>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </TabPanel>
      </TabContext>
    </>
  );
}
