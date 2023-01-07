import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import t from "../../common/hooks/translate";
import Button from "@mui/material/Button";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PublicIcon from "@mui/icons-material/Public";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  usePostUserMutation,
  usePutUserMutation,
  useGetUsersMutation,
} from "../../store/services";

const PaperItem = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  lineHeight: "60px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "24px 24px",
  borderRadius: "16px",
  backgroundColor: "rgb(244, 246, 248)",
}));

const Form = ({ setAddFormShow, getUsers, userId, type }: any) => {
  const [age, setAge] = useState("");
  const [postnewUser, result] = usePostUserMutation({});
  const [refetchUser, data] = useGetUsersMutation({});
  const [putUser] = usePutUserMutation({});
  const [textFieldFocus, setTextFieldFocus] = useState(false);
  const textErrorInput = t("textInputError");
  const matches = useMediaQuery("(min-width:600px)");
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      link: "",
      type: {},
    },
  });
  const onSubmit = (data: any) => {
    console.log("data", data, userId, type);
    if (type === "new") {
      postnewUser({
        user: {
          id: Date.now(),
          social: data.type,
          link: data.link,
        },
      }).then((resp: any) => refetchUser({}));
    } else if (type === "edit") {
      putUser({
        user: {
          id: userId,
          social: data.type,
          link: data.link,
        },
      }).then((resp: any) => refetchUser({}));
    }
    setAddFormShow(false);
  };
  return (
    <PaperItem color="rgb(52, 61, 72)" style={{ marginTop: "8px" }}>
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          <Controller
            name="type"
            control={control}
            render={({ field }) => (
              <FormControl>
                <InputLabel id="demo-simple-select-label">
                  {t("type")}
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  {...register("type", { required: true })}
                  id="demo-simple-select"
                  value={age}
                  label="type"
                  style={{
                    width: matches ? "200px" : "65vw",
                    margin: "16px 8px",
                    border: textFieldFocus
                      ? `1px solid ${errors.type ? "red" : "#6a6e73"}`
                      : `1px solid ${errors.type ? "red" : "black"}`,
                    marginTop: "8px",
                    display: "flex",
                    alignItems: "center",
                  }}
                  error={Boolean(errors.type)}
                  onChange={handleChange}
                >
                  <MenuItem value="twitter">
                    <TwitterIcon fontSize="small" style={{ margin: "8px" }} />
                    {t("twitter")}
                  </MenuItem>
                  <MenuItem value={"instagram"}>
                    {" "}
                    <InstagramIcon fontSize="small" style={{ margin: "8px" }} />
                    {t("instagram")}
                  </MenuItem>
                  <MenuItem value={"telegram"}>
                    <TelegramIcon fontSize="small" style={{ margin: "8px" }} />{" "}
                    {t("telegram")}
                  </MenuItem>
                  <MenuItem value={"facebook"}>
                    <FacebookIcon fontSize="small" style={{ margin: "8px" }} />{" "}
                    {t("facebook")}
                  </MenuItem>
                  <MenuItem value={"linkedIn"}>
                    <LinkedInIcon fontSize="small" style={{ margin: "8px" }} />{" "}
                    {t("linkedIn")}
                  </MenuItem>
                  <MenuItem value={"webSite"}>
                    <PublicIcon fontSize="small" style={{ margin: "8px" }} />{" "}
                    {t("webSite")}
                  </MenuItem>
                </Select>
              </FormControl>
            )}
          />
          <Controller
            name="link"
            control={control}
            render={({ field }) => (
              <TextField
                id="outlined-basic"
                label={t("link")}
                onFocus={() => setTextFieldFocus(true)}
                variant="outlined"
                helperText={errors.link ? errors.link.message : " "}
                error={Boolean(errors.link)}
                style={{
                  width: matches ? "60%" : "65vw",
                  borderRadius: "4px",
                  margin: "16px 8px",
                  border: textFieldFocus
                    ? `1px solid ${errors.link ? "red" : "#6a6e73"}`
                    : `1px solid ${errors.link ? "red" : "black"}`,
                  marginTop: "8px",
                  marginBottom: "16px",
                }}
                inputProps={{
                  class: "zahir",
                }}
                className="zahir"
                {...register("link", {
                  required: true,
                  pattern: {
                    value:
                      /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi,
                    message: textErrorInput,
                  },
                })}
              />
            )}
          />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row-reverse",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              width: "100%",
            }}
          >
            <Button
              variant="outlined"
              style={{
                border: "1px solid #ffa82e",
                color: "black",
                minWidth: "105px",
                height: "28px",
                padding: "3px",
                backgroundColor: "#ffa82e",
                margin: "8px",
              }}
              type="submit"
            >
              {t("submit_btn")}
            </Button>
            <Button
              variant="outlined"
              style={{
                border: "1px solid #ffa82e",
                color: "#ffa82e",
                minWidth: "64px",
                height: "28px",
                padding: "3px",
                margin: "8px",
              }}
              onClick={() => setAddFormShow(false)}
            >
              {t("cancel")}
            </Button>
          </div>
        </div>
      </form>
    </PaperItem>
  );
};

export default Form;
