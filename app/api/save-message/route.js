import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { message } = req.body;
    const filePath = path.join(process.cwd(), "history.txt");

    fs.appendFileSync(filePath, `${message}\n`);

    res.status(200).json({ success: true });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
