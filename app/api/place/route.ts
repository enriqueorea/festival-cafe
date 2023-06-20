import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const place = searchParams.get("place");

  console.log(searchParams.get("place"));

  const filePath = path.join(process.cwd(), "data");

  const fileContents = await fs.readFile(filePath + `/${place}.json`, "utf8");

  return NextResponse.json(JSON.parse(fileContents));
}
