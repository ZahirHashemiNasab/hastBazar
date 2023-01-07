import * as React from "react";
import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import createEmotionCache from "../utilities/emotionCash";
import lightThemeOptions from "../styles/themes/lightThemeOptions";
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../store/index";
import { useRouter } from "next/router";
import darkThemeOptions from "../styles/themes/darkThemeOptions";
import { useState } from "react";
import LayOut from "../components/layout";
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const lightTheme = createTheme(lightThemeOptions);
const darkTheme = createTheme(darkThemeOptions);

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [selectedTheme, setSelectedTheme] = useState<any>(lightTheme);
  const route = useRouter();
  const themeHandler = () => {
    setSelectedTheme(selectedTheme === lightTheme ? darkTheme : lightTheme);
  };
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={selectedTheme}>
        <CssBaseline />
        <Provider store={store}>
          <LayOut themeHandler={themeHandler}>
            <Component {...pageProps} themeHandler={themeHandler} />
          </LayOut>
        </Provider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
