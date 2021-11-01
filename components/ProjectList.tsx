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

import {
  Box,
  Tab,
  Stack,
  Grid,
  Link,
  Typography,
  Container,
  CardMedia,
} from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

import { ProjectPostInterface } from "@/types/models/project";

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
  const [projects, setProjects] = React.useState<{
    fetched: boolean;
    message: string;
    status: string;
    projects?: Array<ProjectPostInterface>;
  }>({ fetched: false, message: "", status: "" });

  React.useEffect(() => {
    fetchProjects();
  }, []);

  async function fetchProjects() {
    try {
      // eslint-disable-next-line no-shadow
      const projectsRes = await axios.get<{
        message: string;
        status: string;
        projects?: Array<ProjectPostInterface>;
      }>(
        `${process.env.NEXT_PUBLIC_SERVER}/projects/${authState.me?.username}`
      );
      setProjects({
        fetched: true,
        message: "Success Fethed Projects",
        status: "success",
        projects: projectsRes.data.projects,
      });
    } catch (err) {
      console.error(err);
      setProjects({
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

  console.log("stories", projects);

  // eslint-disable-next-line no-unused-vars
  return (
    <>
      <Stack
        sx={{ marginTop: 1 }}
        direction="row"
        justifyContent="space-between"
      >
        <Typography variant="h5" color="grayText">
          Here are your projects.
        </Typography>
        <NextLink href="/project/create">
          <Button variant="contained">Create Project</Button>
        </NextLink>
      </Stack>
      {/* @ts-ignore */}
      {!projects.fetched ? (
        <Container sx={{ mt: 10 }}>
          <Stack
            sx={{ color: "grey.500" }}
            spacing={2}
            justifyContent="center"
            direction="row"
            alignItems="center"
          >
            <CircularProgress color="primary" />
            <Typography>Fetching Your Projects</Typography>
          </Stack>
        </Container>
      ) : projects.projects && projects.projects.length > 0 ? (
        <Grid container spacing={3} mt={3}>
          {projects.projects.map((project) => {
            return (
              <Grid
                key={project._id}
                item
                xs={12}
                sm={5}
                // @ts-ignore
                md={4}
              >
                <Card>
                  <CardMedia
                    component="img"
                    image={project.thumbnail}
                    alt="green iguana"
                  />
                  <CardContent
                    sx={{ padding: "10px 15px", paddingTop: "20px" }}
                  >
                    <Typography variant="h5" component="div">
                      {/* eslint-disable-next-line no-underscore-dangle */}
                      <NextLink href={`/project/view/${project.name}`}>
                        {project.title}
                      </NextLink>
                      <Label size="small" style={{ marginLeft: "5px" }}>
                        {project.name}
                      </Label>
                    </Typography>

                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {project.desc}
                    </Typography>

                    <Label size="small" style={{ marginLeft: "5px" }}>
                      {String(new Date(project.created))}
                    </Label>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <Container sx={{ mt: 10 }}>
          <Stack
            sx={{ color: "grey.500" }}
            spacing={2}
            justifyContent="center"
            direction="row"
            alignItems="center"
          >
            <Typography>You don&apos;t have any projects yet.</Typography>
          </Stack>
        </Container>
      )}
    </>
  );
}
