import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { iconGenerator } from "../../common/utils/utils";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import t from "../../common/hooks/translate";
import Form from "../form";
import { useState } from "react";
import {
  useDeleteUserByIdMutation,
  useGetUsersMutation,
} from "../../store/services";

const SubItem = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  lineHeight: "60px",
  backgroundColor: "rgb(244, 246, 248)",
  width: "100%",
  marginTop: "16px",
  borderRadius: "16px",
}));
const Card = ({ data, getUsers }: any) => {
  const [editeForm, setShowEditForm] = useState(false);
  const [deleteItem, result] = useDeleteUserByIdMutation({});
  const [refetchUser] = useGetUsersMutation({});

  return (
    <>
      <SubItem key={data?.id}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: " 0px 8px",
            }}
          >
            {iconGenerator(data?.social)}{" "}
            <p style={{ margin: "0px 8px" }}>{t(data?.social)}</p>
            <p style={{ margin: "0px 8px" }}>{t("link")}:</p>
            <a
              style={{ color: "#ffa82e", textDecoration: "underlined" }}
              href={data?.link}
            >
              {data?.link}
            </a>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0px 8px",
            }}
          >
            <p style={{ margin: "0px 4px", color: "#ffa82e" }}>{t("edit")}:</p>
            <div
              onClick={(e: any) => {
                e.stopPropagation();
                setShowEditForm(true);
              }}
              style={{ display: "flex" }}
            >
              <EditIcon fontSize="small" color="warning" />
            </div>
            <p style={{ margin: "0px 4px" }}>{t("delete")}:</p>
            <div
              onClick={(e: any) => {
                e.stopPropagation();
                deleteItem({ id: data?.id }).then((resp: any) => getUsers({}));
              }}
              style={{ display: "flex" }}
            >
              <DeleteIcon fontSize="small" color="error" />
            </div>
          </div>
        </div>
      </SubItem>
      {editeForm && (
        <Form
          setAddFormShow={setShowEditForm}
          getUsers={getUsers}
          type={"edit"}
          userId={data?.id}
        />
      )}
    </>
  );
};

export default Card;
