// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../libraries/mongodb";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const client = await clientPromise;
  const db = client.db("UrlShortener");
  res.status(200).json({ name: "John Doe" });
}
