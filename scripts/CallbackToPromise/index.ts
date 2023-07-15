import {
  readFilePromise,
  readFileUsePromisify,
  writeFilePromise,
  writeFileUsePromisify,
} from "./utils";
import { existsSync, mkdirSync } from "fs";

const outputDir = __dirname + "/" + "output";

if (!existsSync(outputDir)) {
  mkdirSync(outputDir);
}

(async () => {
  console.log(`${Date.now()} : start write`);
  await writeFilePromise(`${outputDir}/result.txt`, `${Date.now()}`);
  console.log(`${Date.now()} : end write`);

  console.log("");

  console.log("start read");
  let ret = await readFilePromise(`${outputDir}/result.txt`);
  console.log(ret);
  console.log("end read");

  console.log("");

  console.log(`${Date.now()} : start write`);
  await writeFileUsePromisify(`${outputDir}/result.txt`, `${Date.now()}`);
  console.log(`${Date.now()} : end write`);

  console.log("");

  console.log("start read");
  ret = await readFileUsePromisify(`${outputDir}/result.txt`, "utf-8");
  console.log(ret);
  console.log("end read");
})();
