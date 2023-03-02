import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { method } = request;

  if (method === "GET") {
    const data = await prisma.hold.findMany();

    return response.status(200).json(data);
  }

  if (method === "POST") {
    const { body } = request;

    const data = await prisma.hold.create({
      data: body,
    });

    return response.status(200).json(data);
  }
}
