import { writeFile, readFile } from "fs";
import { promisify } from "util";

export const writeFilePromise = (filepath: string, text: string) => {
  return new Promise<void>((resolve, reject) => {
    return writeFile(filepath, text, (err) => {
      if (err) return reject(err);
      return resolve();
    });
  });
};

export const readFilePromise = (filepath: string) => {
  return new Promise<string>((resolve, reject) => {
    return readFile(filepath, (err, data) => {
      if (err) return reject(err);
      return resolve(data.toString("utf-8"));
    });
  });
};

export const writeFileUsePromisify = promisify(writeFile);
export const readFileUsePromisify = (
  filepath: string,
  encoding: BufferEncoding
) => {
  return promisify(readFile)(filepath).then((data) => data.toString(encoding));
};
