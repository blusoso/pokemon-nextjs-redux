import { createTheme } from "@mui/material/styles";
import { red, purple, pink } from "@mui/material/colors";

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          padding: "0.4em 1.5em",
          background: "white",
        },
      },
      variants: [
        {
          props: { variant: "primary" },
          style: {
            backgroundColor: red[500],
            color: "white",
            boxShadow: "4px 5px 30px rgb(255 0 0 / 60%)",
            "&:hover": {
              backgroundColor: red[700],
            },
          },
        },
        {
          props: { variant: "textLink" },
          style: {
            backgroundColor: "transparent",
            color: red[500],
          },
        },
      ],
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "white",
          boxShadow: "0 4px 30px rgb(0 0 0 / 10%)",
          borderBottomLeftRadius: "16px",
          borderBottomRightRadius: "16px",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: "white",
          boxShadow: "0 4px 30px rgb(0 0 0 / 10%)",
          borderRadius: "14px",
          border: "none",
        },
        notchedOutline: {
          border: "none",
        },
      },
    },
  },
  palette: {
    primary: {
      main: red[500],
    },
    secondary: {
      main: purple[500],
    },
  },
});
