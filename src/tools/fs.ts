import fs from "fs";
import path from "path";
import url from "url";

export function dirName(importMetaUrl: string) {
  return path.dirname(url.fileURLToPath(importMetaUrl));
}

export function lineInFile(filePath: string, line: string) {
  const fileContent = fs.readFileSync(filePath, "utf-8");
  if (!fileContent.includes(line)) {
    fs.appendFileSync(filePath, line + "\n");
  }
}
