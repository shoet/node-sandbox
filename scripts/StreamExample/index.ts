import { MyLogger } from "./utils";

const sleep = (sec: number) =>
  new Promise((resolve) => setTimeout(resolve, sec * 1000));

const logger = new MyLogger();

(async () => {
  logger.info("hoge1");
  await sleep(1);
  logger.warn("hoge2");
  await sleep(1);
  logger.error("hoge3");
})();
