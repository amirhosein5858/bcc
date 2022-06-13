import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Container, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import { Typography, Button } from "@mui/material";
import { GetCurrentTheme } from "../redux/selectors/theme.selectors";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../redux/features/theme.slice";
import { ToggleTheme } from "../components/themeToggle";

const Home: NextPage = () => {
  const { t, i18n } = useTranslation();
  const themeState = useSelector(GetCurrentTheme)
  const dispatch = useDispatch()
  const theme = useTheme();

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, []);

  const changeLanguage = (lng: "en" | "fa") => {
    i18n.changeLanguage(lng);
    document.body.dir = i18n.dir();
    theme.direction = i18n.dir();
  };

  const switchTheme = () => {
    dispatch(setTheme(themeState == 'dark' ? 'light' : 'dark'))
  }

  return (
    <Container
      sx={{ marginTop: "40px", marginBottom: "40px", display: "flex" }}
      maxWidth="md"
    >
      <div className={styles.pageContainer}>

        {/* head part */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6">{t("user_setting")}</Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Button
              onClick={() => changeLanguage("en")}
              size="medium"
              color="primary"
              variant="text"
            >
              English
            </Button>
            <Button
              onClick={() => changeLanguage("fa")}
              size="medium"
              color="primary"
              variant="text"
            >
              فارسی
            </Button>
            <ToggleTheme checked={themeState == 'dark'} onChange={switchTheme} />
          </Box>
          {/* head part end */}
        </Box>
      </div>
    </Container>
  );
};

export default Home;
