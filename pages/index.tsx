import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Container } from "@mui/material";
import styles from "../styles/Home.module.css";
import Editor from "components/content/index";

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>TipTap Reactjs Example Editor</title>
        <meta
          name="description"
          content="TipTap Editor Example editor with Reactjs"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <a href="https://github.com/Aldhanekaa/TipTap-Example-React-Editor">
            TipTap Example React Editor
          </a>
        </h1>
        <Editor content="ss" />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/aldhanekaa"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code with love by Aldhanekaa
        </a>
      </footer>
    </Container>
  );
};

export default Home;
