import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Container, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Typography, Button, Paper } from "@mui/material";
import { GetCurrentTheme } from "../redux/selectors/theme.selectors";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../redux/features/theme.slice";
import { ToggleTheme } from "../components/themeToggle";
import AddIcon from '@mui/icons-material/Add';
import { SocialForm } from "../components/socialForm";

const Home: NextPage = () => {
  const { t, i18n } = useTranslation();
  const themeState = useSelector(GetCurrentTheme);
  const dispatch = useDispatch();
  const theme = useTheme();
  const [currentLang , setCurrentLang] = useState("")
  const [showForm , setShowForm] = useState(false)
  
  
  useEffect(() => {
    document.body.dir = i18n.dir();
    const curentLang = i18n.language;
    setCurrentLang(curentLang)
  }, []);

  const changeLanguage = (lng: "en" | "fa") => {
    i18n.changeLanguage(lng);
    setCurrentLang(lng)
    document.body.dir = i18n.dir();
    theme.direction = i18n.dir();
  };

  const switchTheme = () => {
    dispatch(setTheme(themeState == "dark" ? "light" : "dark"));
  };

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
              color={currentLang == 'en' ? 'warning':'inherit'}
              variant="text"
            >
              English
            </Button>
            <Button
              onClick={() => changeLanguage("fa")}
              size="medium"
              color={currentLang == 'fa' ? 'warning':'inherit'}
              variant="text"
            >
              فارسی
            </Button>
            <ToggleTheme
              checked={themeState == "dark"}
              onChange={switchTheme}
            />
          </Box>
        </Box>
        {/* head part end */}

        {/* body part */}
        <Paper square={false} sx={{marginTop: '48px' , padding: '24px', borderRadius: '16px' , display: 'flex',flexDirection: 'column' , alignItems: 'flex-start'}}>
          <Typography variant='caption'>{t("communication_routes")}</Typography>
          <Button
              onClick={() => setShowForm(!showForm)}
              size="small"
              color='warning'
              variant="text"
              sx={{marginTop: '16px'}}
            >
              <AddIcon fontSize="small" sx={{margin: '5px'}} />
              {t('add_route')}
            </Button>

            <SocialForm isOpen={showForm}/>
        </Paper>
        {/* body part end */}
      </div>
    </Container>
  );
};

export default Home;
