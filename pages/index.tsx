import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Box from "@mui/material/Box";

const Home: NextPage = () => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    document.body.dir = i18n.dir();
  }, []);

  return (
    <Container sx={{marginTop: '40px' , marginBottom: '40px' , display: 'flex'}} maxWidth='md'>
      <div className={styles.pageContainer}>
        {/* <Box
          sx={{
            width: "100%",
            height: 300,
            backgroundColor: "primary.dark",
            "&:hover": {
              backgroundColor: "primary.main",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        /> */}
      </div>
    </Container>
  );
};

export default Home;
