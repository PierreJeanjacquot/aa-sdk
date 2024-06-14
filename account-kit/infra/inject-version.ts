import { readFileSync, writeFileSync } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const VERSION_FILE_PATH = "src/version.ts";

const packageJSON = JSON.parse(readFileSync("./package.json").toString());

writeFileSync(
  resolve(__dirname, VERSION_FILE_PATH),
  `// This file is autogenerated by inject-version.ts. Any changes will be
// overwritten on commit!
export const VERSION = "${packageJSON.version}";
`
);
console.log(`Wrote version to ${VERSION_FILE_PATH}.`);
