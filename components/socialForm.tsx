import React, { useEffect, useState } from "react";
import {
  Collapse,
  Paper,
  Input,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Box,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { GetCurrentTheme } from "../redux/selectors/theme.selectors";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import * as Yup from "yup";
import { useFormik } from "formik";
import { SocialModel } from "../models/social.model";
import { CreateSocials } from "../services/social.service";

const initialValues = {
  link: "",
};

export const SocialForm = (props: {
  isOpen: boolean;
  close: ()=> void,
  id?: string
}) => {
  const { t } = useTranslation();
  const themeState = useSelector(GetCurrentTheme);
  const [social, setSocial] = useState<any>();
  
  const socialItems = [
    { label: t("website"), code: 5 },
    { label: t("twitter"), code: 0 },
    { label: t("instagram"), code: 1 },
    { label: t("facebook"), code: 2 },
    { label: t("telegram"), code: 3 },
    { label: t("linkedin"), code: 4 },
  ];
  const loginSchema = Yup.object().shape({
    link: Yup.string().url(t("must_be_url")).required(t("field_required")),
  });
  function handleInputChange(event: any) {
    const _selected = socialItems.find((e) => e.label == event.target.value);
    setSocial(_selected ? _selected : social);
  }
  useEffect(() => {
    // setSocial(socialItems[0]);
  });
  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: ()=> {}
  });

  const submit = () => {
    if(!social || formik.errors.link){
      return
    }
    const _selected = socialItems.find((e) => e.label == social);
    console.log({_selected})
    // if(props.id){
    //   //update
    // }else{

    //   CreateSocials({
    //     link: formik.getFieldProps("link").value,
    //     code: _selected?.code
    //   })
    // }

  }


  const linkChangeHandler = (event: any) => {
    formik.setFieldValue("link", event.target.value);
  };

  return (
    <Collapse
      in={props.isOpen}
      sx={{ borderRadius: "15px", marginTop: "48px", width: "100%" }}
    >
      <Paper
        square={false}
        color="secondary"
        sx={{ backgroundColor: themeState == "dark" ? "#343D48" : "#F4fdf8" }}
      >
        {t("add_route")}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            gap: "5px",
            flexWrap: "wrap",
            marginTop: "13px",
          }}
        >
          <Autocomplete
            
            disablePortal
            id="combo-box-demo"
            options={socialItems}
            value={social}
            onSelect={handleInputChange}
            sx={{ width: 300 }}
            // renderOption={} TODO:
            renderInput={(params) => (
              <TextField error={!social} helperText={!social ? t('field_required') : ''} {...params} label={t("connection_base")} />
            )}
          />
          <TextField
            error={!!formik.errors.link || !formik.touched.link}
            value={formik.getFieldProps("link").value}
            onChange={linkChangeHandler}
            sx={{ flex: 1 }}
            id="standard-basic"
            label={t("link")}
            variant="outlined"
            helperText={
              typeof formik.errors.link == "string"
                ? formik.errors.link
                : t("field_required")
            }
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            gap: "5px",
            flexWrap: "wrap",
            marginTop: "13px",
            justifyContent: "flex-end",
          }}
        >
          <Button
            // onClick={() => changeLanguage("fa")}
            
            size='small'
            color='warning'
            variant='outlined'
          >
            {t('cancel')}
          </Button>
          <Button
            // onClick={() => changeLanguage("fa")}
            // disabled
            size='small'
            color='warning'
            variant='outlined'
          >
            {t('submit')}
          </Button>
          
        </Box>
      </Paper>
    </Collapse>
  );
};
