import { ThemeOptions } from "@mui/material/styles";

const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: `"iranYekan","Roboto", "Helvetica", "Arial", sans-serif`,
    h6: {
      margin: "0px",
      fontFamily: "iranyekan, Helvetica, Arial, sans-serif",
      fontWeight: "500",
      fontSize: "1.07143rem",
      lineHeight: "1.6",
    },
    subtitle1: {
      margin: "0",
      fontFamily: "iranYekan,Roboto,Helvetica,Arial,sans-serif",
      fontWeight: "400",
      fontSize: "0.85rem",
      lineHeight: "1.75",
      marginBottom: "0.35em",
    },
    h5: {
      margin: "0px",
      fontFamily: "iranyekan, Helvetica, Arial, sans-serif",
      fontWeight: "400",
      fontSize: "1.28571rem",
      lineHeight: "1.334",
    },
  },
};

export default darkThemeOptions;
