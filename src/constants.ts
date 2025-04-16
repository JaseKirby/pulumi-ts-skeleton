import path from "path";
import { dirName } from "./tools/fs.js";

export const PROJECT_ROOT_DIR = path.join(dirName(import.meta.url), "..");
