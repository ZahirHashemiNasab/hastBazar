import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import StarIcon from "@mui/icons-material/Star";
import t from "../common/hooks/translate";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props: any) {
  const router = useRouter();
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const state = useSelector((state: any) => state);
  const { local } = state?.setting;
  const userSetting = (
    <Button
      style={{ color: "rgb(255, 168, 46)", textDecoration: "underline" }}
      onClick={() => router.push("/settings", "", { locale: local })}
    >
      {t("user_setting")}
    </Button>
  );

  return (
    <>
      <Box style={{ marginTop: "16px" }}>
        <Typography variant="h6" component="h6">
          با سلام به آزمون فوق خوش آمدید
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          امیدواریم همیشه سلامت باشید.
        </Typography>
      </Box>
      <br />
      <Box>
        <Typography variant="h5" component="h5">
          موضوع آزمون:
        </Typography>
        <Typography variant="h6" component="h6">
          بصورت خلاصه ساخت همین پروژه و مدیریت مسیر های ارتباطی کاربر در صفحه{" "}
          {userSetting} است.
        </Typography>
      </Box>

      <br />
      <Box>
        <Typography variant="subtitle1" gutterBottom>
          این آزمون در سه سطح طراحی شده است که در زیر شرح آنها را مشاهده خواهید
          کرد:
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          لطفا یکی از سطوح زیر را انتخاب کرده و انجام دهید در نهایت محصول کار
          خود را بر روی یک repository ارسال کرده و لینک دسترسی یا فایل فشرده شده
          پروژه را جهت بررسی برای ما ارسال کنید.
        </Typography>
      </Box>
      <br />
      <Box>
        <Typography variant="h5" component={"h5"}>
          الزامات آزمون:
        </Typography>
        <Typography variant="h6" component={"h6"}>
          لطفا ساختار نرم افزار بر پایه Typescript React و با استفاده از
          کتابخانه Material Ui پیاده سازی شود.
        </Typography>
      </Box>
      <br />
      <Box>
        <Typography variant="subtitle1" gutterBottom>
          نکته:
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          هرچقدر محصول پیاده سازی شده توسط شما به پروژه حاضر شبیه تر باشد ارزش و
          امتیاز بیشتری خواهد داشت.
        </Typography>
      </Box>
      <Box style={{ marginTop: "32px", marginBottom: "80px" }}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              سطح اول
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle1" gutterBottom>
              با توجه به الزامات ذکر شده در بالا فقط صفحه تنظیمات کاربری را بدون
              کنترلر چند زبانگی و تغییر تم با مفروضات زیر انجام دهید:
            </Typography>
            <List
              sx={{ width: "100%", bgcolor: "background.paper" }}
              aria-label="contacts"
            >
              <ListItem className="listItemCustom">
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>

                <Typography variant="subtitle1" gutterBottom>
                  فرم افزودن و ویرایش یک ارتباط در زیر دکمه افزوردن مسیر ارتباطی
                  قرار گیرد.
                </Typography>
              </ListItem>
              <ListItem className="listItemCustom">
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>

                <Typography variant="subtitle1" gutterBottom>
                  در صورت کلیک بر روی دکمه ویرایش همان فرم افزودن باز شده و
                  محتویات سطر انتخاب شده نمایش داده شود.
                </Typography>
              </ListItem>
              <ListItem className="listItemCustom">
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>

                <Typography variant="subtitle1" gutterBottom>
                  در صورت باز بودن فرم با زدن دکمه انصراف محتویات فرم باید خالی
                  شده و فرم بسته شود.{" "}
                </Typography>
              </ListItem>
              <ListItem className="listItemCustom">
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>

                <Typography variant="subtitle1" gutterBottom>
                  دیالوگ باکس دکمه حذف نیازی به وارد کردن متن تایید و نام شبکه
                  اجتماعی انتخاب شده ندارید.
                </Typography>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              سطح دوم
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle1" gutterBottom>
              به علاوه الزامات ذکر شده در بالا لطفا برای پیاده سازی پروژه از
              NextJS و برای پیاده سازی فورم ها از یک کتابخانه مدیریت فورم به
              انتخاب خود استفاده کنید و لطفا علاوه بر مفروضات سطح قبلی از
              مفروضات زیر نیز پیروی کنید:
            </Typography>
            <List
              sx={{ width: "100%", bgcolor: "background.paper" }}
              aria-label="contacts"
            >
              <ListItem className="listItemCustom">
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>

                <Typography variant="subtitle1" gutterBottom>
                  دکمه تغییر مود سیاه و سفید در بالای صفحه پیاده سازی شود.
                </Typography>
              </ListItem>
              <ListItem className="listItemCustom">
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>

                <Typography variant="subtitle1" gutterBottom>
                  داده تکراری وارد نشود
                </Typography>
              </ListItem>
              <ListItem className="listItemCustom">
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>

                <Typography variant="subtitle1" gutterBottom>
                  چند زبانگی در سیستم پیاده سازی شود.
                </Typography>
              </ListItem>
              <ListItem className="listItemCustom">
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>

                <Typography variant="subtitle1" gutterBottom>
                  از یک کتابخانه JSON Server جهت پیاده سازی فرایند ارتباطی با
                  سرور مانند دریافت لیست ارتباطات و افزودن ویرایش و حذف هر آیتم
                  استفاده کنید
                </Typography>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              سطح سوم
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle1" gutterBottom>
              به علاوه الزامات ذکر شده در بالا لطفا برای پیاده سازی پروژه از
              NextJS و برای پیاده سازی فورم ها از یک کتابخانه مدیریت فورم به
              انتخاب خود استفاده کنید و لطفا علاوه بر مفروضات سطح قبلی از
              مفروضات زیر نیز پیروی کنید:
            </Typography>
            <List
              sx={{ width: "100%", bgcolor: "background.paper" }}
              aria-label="contacts"
            >
              <ListItem className="listItemCustom">
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>

                <Typography variant="subtitle1" gutterBottom>
                  لطفا یک قسمت جهت مدیریت تم در هر جایی از سایت که مد نظر خودتان
                  است پیاده سازی نماید.{" "}
                </Typography>
              </ListItem>
              <ListItem className="listItemCustom">
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>

                <Typography variant="subtitle1" gutterBottom>
                  جهت پیاده سازی سرور لطفا از api های خود NextJs استفاده کنید.{" "}
                </Typography>
              </ListItem>
              <ListItem className="listItemCustom">
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <Typography variant="subtitle1" gutterBottom>
                  فرایند جستجو در بین لیست ارتباطات را پیاده سازی کنید{" "}
                </Typography>
              </ListItem>
              <ListItem className="listItemCustom">
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <Typography variant="subtitle1" gutterBottom>
                  چه مشکلاتی در وب سایت فوق مشاهده میکنید؟ چه ایرادی در پیاده
                  سازی وب سایت حاضر مشاهده میکنید؟ لطفا آنها را گزارش داده و در
                  خروجی خود برطرف کنید.
                </Typography>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
}
