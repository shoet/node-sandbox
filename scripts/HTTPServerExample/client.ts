import { request } from "http";
import { MyLogger } from "../StreamExample/utils";

const logger = new MyLogger();

const postData = JSON.stringify({
  msg: "Hello World!",
});

const options = {
  hostname: "localhost",
  port: 3000,
  path: "/",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": Buffer.byteLength(postData),
  },
};

const req = request(options, (res) => {
  res.setEncoding("utf-8");

  res.on("data", (chunk) => {
    logger.info(chunk);
  });

  res.on("end", () => {
    logger.info("end");
  });
});

req.write(postData);
req.end();
