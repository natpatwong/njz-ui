import fs from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "history.txt");
  let messages = [];

  try {
    const fileData = fs.readFileSync(filePath, "utf8");
    messages = fileData.split("\n").filter(line => line.trim() !== "");
  } catch (error) {
    console.error("No history or error:", error);
  }

  return Response.json({ messages });
}
