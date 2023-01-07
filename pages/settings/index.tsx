import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useGetUsersMutation } from "../../store/services";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import t from "../../common/hooks/translate";
import Form from "../../components/form";
import Card from "../../components/card";

const Item = styled(Paper)(({ theme }) => ({
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
}));

const Settings = () => {
  const [getUsers, data] = useGetUsersMutation({});
  const [inBrowser, setInBrowser] = useState(false);
  const [addFormShow, setAddFormShow] = useState(false);

  const fetchUsers = () => {
    getUsers({});
  };
  useEffect(() => {
    setInBrowser(true);
    getUsers({});
  }, []);
  const social = t("socials");
  const add_social = t("add_social");
  return (
    <div style={{ marginTop: "32px" }}>
      <Item elevation={1}>
        {inBrowser && (
          <>
            {" "}
            <div style={{ width: "100%" }}>
              <Typography variant="caption" component="caption">
                {social}
              </Typography>
            </div>
            <div style={{ width: "100%" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "16px",
                  marginBottom: "16px",
                  cursor: "pointer",
                  alignItems: "center",
                }}
                onClick={() => setAddFormShow(true)}
              >
                <AddIcon />
                <Typography variant="caption" component="caption">
                  {add_social}
                </Typography>
              </div>
            </div>
            {addFormShow && (
              <Form
                setAddFormShow={setAddFormShow}
                getUsers={getUsers}
                type={"new"}
                userId={null}
              />
            )}
          </>
        )}
        {data?.data?.map((element: any, index: number) => (
          <Card data={element} getUsers={getUsers} />
        ))}
      </Item>
    </div>
  );
};

export default Settings;
