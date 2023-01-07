import { useTheme } from "@emotion/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleLocal } from "../../store";
import Box from "@mui/material/Box";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import BreadCrumb from "../breadCrumb/index";
import t from "../../common/hooks/translate";
import { addressTranslator } from "../../common/utils/utils";

const LayOut = (props: any) => {
  const router = useRouter();
  const theme = useTheme;
  const dispatch = useDispatch();
  const { themeHandler } = props;
  const [inBrowser, setInBrowser] = useState<boolean>(false);
  const state = useSelector((state: any) => state);
  const { local } = state?.setting;
  useEffect(() => {
    document.dir = state?.setting?.local === "fa" ? "rtl" : "ltr";
  }, [state.setting.local]);
  const toggleLang = (loc: string) => {
    router.push(router.pathname, "", { locale: loc });
    dispatch(toggleLocal(loc as any));
  };
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
    themeHandler();
  };
  useEffect(() => {
    setInBrowser(true);
  }, []);
  return (
    <Container
      maxWidth="md"
      style={{ marginTop: "40px", boxSizing: "border-box" }}
    >
      {" "}
      <Box
        sx={
          {
            // width: 300,
            // height: 300,
            // backgroundColor: "primary.dark",
            // "&:hover": {
            //   backgroundColor: "primary.main",
            //   opacity: [0.9, 0.8, 0.7],
            // },
          }
        }
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div style={{ width: "100px" }}>
            {t(addressTranslator(router?.pathname))}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "220px",
              justifyContent: "space-around",
            }}
          >
            <Button
              variant="text"
              onClick={() => toggleLang("en")}
              style={{
                color:
                  local === "en" ? "rgb(255, 168, 46)" : "rgb(221, 221, 221)",
              }}
            >
              English
            </Button>
            <Button
              variant="text"
              onClick={() => toggleLang("fa")}
              style={{
                color:
                  local === "fa" ? "rgb(255, 168, 46)" : "rgb(221, 221, 221)",
                fontFamily: "iranYekan",
              }}
            >
              فارسی
            </Button>
            {inBrowser && (
              <DarkModeSwitch
                checked={isDarkMode}
                onChange={toggleDarkMode}
                size={25}
                sunColor="rgb(255, 168, 46)"
                moonColor="white"
              />
            )}
          </div>
        </div>
      </Box>
      <BreadCrumb />
      {props.children}
    </Container>
  );
};

export default LayOut;
