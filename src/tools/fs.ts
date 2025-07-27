import fs from "node:fs";
import path from "node:path";
import url from "node:url";

export function dirName(importMetaUrl: string) {
  return path.dirname(url.fileURLToPath(importMetaUrl));
}

export function lineInFile(filePath: string, line: string) {
  const fileContent = fs.readFileSync(filePath, "utf-8");
  if (!fileContent.includes(line)) {
    fs.appendFileSync(filePath, `${line}\n`);
  }
}
