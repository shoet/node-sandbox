import { promises as fs_sync } from "fs";
import { readFile } from "fs";
import { testFunction, testText } from "./test-export";

(async () => {
  console.log("A");

  // const ret = await fs_sync.readFile(__filename);
  // console.log(ret);

  readFile(__filename, (err, data) => {
    console.log("B");
    console.log(data);
  });

  console.log("C");
})();

(() => {
  testFunction(testText);
})();
