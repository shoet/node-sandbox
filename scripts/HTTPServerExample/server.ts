import { createServer, RequestListener } from "http";
import { MyLogger } from "../EventEmitterExmaple/utils";

const logger = new MyLogger();

createServer((req, res) => {
  logger.info("====== req ======");
  logger.info(`req headers: ${JSON.stringify(req.headers)}`);
  let body = "";
  req.on("data", (chunk) => {
    body += chunk;
  });
  req.on("end", () => {
    logger.info(`req body: ${JSON.stringify(body)}`);
    res.write("Response from server");
    res.end();
  });
}).listen(3000);
