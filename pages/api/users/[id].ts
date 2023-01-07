// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { data } from "../../../common/data";
import { deleteUserById } from "../../../common/utils/utils";

type Data = {
  id: number;
  name: string;
  family: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const {
    method,
    query: { id },
  } = req;

  switch (method) {
    case "GET":
      res.status(200).json(data);

      break;
    case "POST":
      data.push(req.body);
      break;
    case "PUT":
      deleteUserById(id as any);
      data.push(req.body);
      return res.status(200).json(data);
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
