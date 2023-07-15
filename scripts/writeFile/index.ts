import { readFile, writeFile } from "fs";
import { dirname } from "path";

const writeF = (n: number) => {
  if (n >= 100) return;
  writeFile(`${dirname(__filename)}/output/test.txt`, `${n}`, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(n);
    writeF(n + 1);
  });
};

writeF(0);
