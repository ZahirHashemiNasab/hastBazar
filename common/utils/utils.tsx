import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PublicIcon from "@mui/icons-material/Public";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { data } from "../data";

export const addressTranslator = (route: string) => {
  switch (route) {
    case "/settings":
      return "setting";
    case "/":
      return "home";

    default:
      break;
  }
};

export const urlValidation = (url: string) => {
  let expression =
    "https?://(www.)?[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)";
  let regex = new RegExp(expression);
  if (url?.match(regex)) {
    return true;
  } else {
    return false;
  }
};

export const iconGenerator = (social: string) => {
  switch (social) {
    case "facebook":
      return <FacebookIcon />;
    case "linkedIn":
      return <LinkedInIcon />;
    case "twitter":
      return <TwitterIcon />;
    case "instagram":
      return <InstagramIcon />;
    case "telegram":
      return <TelegramIcon />;
    case "webSite":
      return <PublicIcon />;

    default:
      break;
  }
};

export const deleteUserById = async (id: any) => {
  let result = await data.splice(id, 1);
  return result;
};
