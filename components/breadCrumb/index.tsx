import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import t from "../../common/hooks/translate";
export default function CustomSeparator() {
  const router = useRouter();
  const state = useSelector((state: any) => state);
  const { local } = state?.setting;
  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    router.push("/", "", { locale: local });
  };
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      {t("home")}
    </Link>,
    <Typography key="3" color="text.primary">
      {t("setting")}
    </Typography>,
  ];
  return (
    <Stack spacing={2}>
      {router.route !== "/" && (
        <Breadcrumbs
          separator={<FiberManualRecordIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      )}
    </Stack>
  );
}
