import React, { useState } from "react";
import {
  Collapse,
  Paper,
  Input,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { GetCurrentTheme } from "../redux/selectors/theme.selectors";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import * as Yup from 'yup'
import {useFormik} from 'formik'


const initialValues = {
  link: '',
}



export const SocialForm = (props: { isOpen: boolean }) => {
  const { t } = useTranslation();
  const themeState = useSelector(GetCurrentTheme);
  const [social, setSocial] = useState<any>({ label: t("twitter") , type: 'web' , id: 0});
  const socialItems = [
    { label: t("website"), type: 'web' ,id: 5},
    { label: t("twitter") , type: 'web' , id: 0},
    { label: t("instagram"), type: 'web' ,id: 1},
    { label: t("facebook"), type: 'web' ,id: 2},
    { label: t("telegram"), type: 'web' ,id: 3},
    { label: t("linkedin"), type: 'web' ,id: 4},
  ];
  const loginSchema = Yup.object().shape({
    link: Yup.string()
      .url(t('must_be_url'))
      .required(t('field_required')),
  })
  function handleInputChange(event:any) {
    const _selected = socialItems.find(e => e.label == event.target.value)
    if(_selected){
      setSocial(_selected)
    }
  }
  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: (values, {setStatus, setSubmitting}) => {
      // setLoading(true)
      // setTimeout(() => {
      //   login(values.email, values.password)
      //     .then((res) => {
      //       toast('خوش آمدید' , {type: 'success'})
      //       setLoading(false)
      //       SET_Token(res.data.data.token);
      //       dispatch(auth.actions.login(res.data.data.token))
      //     })
      //     .catch(() => {
      //       setLoading(false)
      //       setSubmitting(false)
      //       setStatus('اطلاعات ورود صحیح نمیباشد')
      //       toast('خطای داخلی' , {type: 'warning'})
      //     })
      // }, 1000)
    },
  })

  const linkChangeHandler = (event:any) => {
    formik.setFieldValue('link' , event.target.value)
  }

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
            renderInput={(params) => <TextField {...params} label={t('connection_base')} />}
          />
          <TextField
            error={!!formik.errors.link || !formik.touched.link}
            value={formik.getFieldProps('link').value}
            onChange={linkChangeHandler}
            sx={{ flex: 1 }}
            id="standard-basic"
            label={t("link")}
            variant="outlined"
            helperText={typeof formik.errors.link == 'string' ? formik.errors.link : t('field_required')}
          />
        </Box>
      </Paper>

      {/* <div>
        <TextField
          error
          id="outlined-error"
          label="Error"
          defaultValue="Hello World"
        />
        <TextField
          error
          id="outlined-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
        />
      </div> */}
    </Collapse>
  );
};
