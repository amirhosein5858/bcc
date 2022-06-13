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

export const SocialForm = (props: { isOpen: boolean }) => {
  const { t } = useTranslation();
  const themeState = useSelector(GetCurrentTheme);
  const [social, setSocial] = useState<any>();
  const [value , setValue] = useState("")
  const socialItems = [
    { label: t("website"), type: 'web' ,id: 5},
    { label: t("twitter") , type: 'web' , id: 0},
    { label: t("instagram"), type: 'web' ,id: 1},
    { label: t("facebook"), type: 'web' ,id: 2},
    { label: t("telegram"), type: 'web' ,id: 3},
    { label: t("linkedin"), type: 'web' ,id: 4},
    { label: t("email"), type: 'mail' ,id: 6},
    { label: t("phone") , type: 'phone',id: 7},
  ];
  function handleInputChange(event:any) {
    const _selected = socialItems.find(e => e.label == event.target.value)
    setSocial(_selected ? _selected : null)
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
            // onInputChange={handleInputChange}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label={t('connection_base')} />}
          />
          <TextField
            sx={{ flex: 1 }}
            id="standard-basic"
            label={t("write_here")}
            variant="outlined"
          />
        </Box>
      </Paper>
    </Collapse>
  );
};
