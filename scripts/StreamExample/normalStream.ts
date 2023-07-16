import * as fs from "fs";
import * as path from "path";
import { writeFile } from "fs/promises";

// const readPath = `${__dirname}/input/readfile.txt`;
const readPath = __filename;
const writePath = `${__dirname}/output/writefile.txt`;

const sleep = (sec: number) =>
  new Promise((resolve) => setTimeout(resolve, 1000 * sec));

const writeDir = path.dirname(writePath);
if (!fs.existsSync(writeDir)) {
  fs.mkdirSync(writeDir);
}

const write = async (chunk: Buffer | string) => {
  await sleep(2);
  await writeFile(writePath, chunk, { flag: "a" });
};

const reader = fs.createReadStream(readPath, {
  encoding: "utf-8",
  highWaterMark: 2,
});

let counter = 0;
reader.on("data", async (chunk) => {
  counter++;
  console.log(counter, chunk);

  await write(chunk);
});

reader.on("close", () => {
  console.log("close");
});

reader.on("end", () => {
  console.log("end");
});

reader.on("error", (error) => {
  console.log("error: ", error);
});
