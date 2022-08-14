import { ThemeProvider } from "@mui/material";
import { wrapper } from "../store/store";
import "../styles/globals.css";
import { theme } from "../utils/themeMui";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
