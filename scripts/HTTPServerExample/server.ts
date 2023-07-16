import { createServer, RequestListener } from "http";
import { MyLogger } from "../StreamExample/utils";

const logger = new MyLogger();

// createServer((req, res) => {
//   logger.info("====== req ======");
//   logger.info(`headers: ${JSON.stringify(req.headers)}`);
//   let body = "";
//   req.on("data", (chunk) => {
//     body += chunk;
//   });
//   req.on("end", () => {
//     logger.info(`body: ${JSON.stringify(body)}`);
//     res.write("Response from server");
//     res.end();
//   });
// }).listen(3000);

const server = createServer();
const listener: RequestListener = (req, res) => {
  logger.info("====== req ======");
  logger.info(`headers: ${JSON.stringify(req.headers)}`);
  let body = "";
  req.on("data", (chunk) => {
    body += chunk;
  });
  req.on("end", () => {
    logger.info(`body: ${JSON.stringify(body)}`);
    res.write("Response from server");
    res.end();
  });
};

server.on("request", listener);
server.on("error", (error) => {
  logger.error(error.message);
});

server.listen(3000);
