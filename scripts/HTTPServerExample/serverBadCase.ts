import * as http from "http";
import { on } from "events";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const server = http.createServer();

const reqEvent = on(server.listen(3000), "request");

(async () => {
  for await (const [req, res] of reqEvent) {
    let body = "";
    req.on("data", (chunk: string | Buffer) => {
      body += chunk;
    });

    req.on("end", () => {
      console.log("end request");
      console.log(`body: ${body}`);
    });

    await sleep(100);

    res.write("response from server");
    res.end();
  }
})();

// server
//   .on("request", async (req, res) => {
//     let body = "";
//     req.on("data", (chunk) => {
//       body += chunk;
//     });
//
//     req.on("end", () => {
//       console.log("end request");
//       console.log(`body: ${body}`);
//     });
//
//     await sleep(1);
//
//     res.write("response from server");
//     res.end();
//   })
//   .listen(3000);
