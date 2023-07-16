import { request } from "undici";

(async () => {
  const PERFORM_NUM = 10;

  console.time("req");

  const reqs = [];
  for (let i = 0; i < PERFORM_NUM; i++) {
    const req = request("http://localhost:3000").then((res) => res.body.text());
    reqs.push(req);
  }

  await Promise.all(reqs);

  console.timeEnd("req");
})();
