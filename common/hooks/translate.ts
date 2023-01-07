import { useSelector } from "react-redux";
import * as translate from "../localization/index";
import { fa, en } from "../localization/index";

const useTranslate = (key: any) => {
  const local: any = useSelector((state: any) => state?.setting?.local);
  const lang = local === "fa" ? "fa" : "en";
  let temp: any = translate[lang][key];
  return temp;
};

export default useTranslate;
