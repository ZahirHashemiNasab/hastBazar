// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { data } from "../../../common/data";
type Data = {
  id: number;
  name: string;
  family: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
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
      res.status(200).json(data);
      break;
    case "DELETE":
      data.push(req.body);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
