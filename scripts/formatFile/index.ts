import { readFile, writeFile, existsSync, mkdirSync } from "fs";
import { dirname } from "path";

const scriptPath = `${dirname(__filename)}`;
const inputPath = `${scriptPath}/input/readfile.txt`;
const outputDirPath = `${scriptPath}/output`;
const backupFile = `${Date.now()}.txt`;

readFile(inputPath, (err, data) => {
  if (err) {
    return console.error(err);
  }

  if (!existsSync(outputDirPath)) {
    mkdirSync(outputDirPath);
  }

  const outputText = data;
  writeFile(`${outputDirPath}/${backupFile}`, outputText, (err) => {
    if (err) {
      return console.error(err);
    }
    console.log("done");
  });
});
