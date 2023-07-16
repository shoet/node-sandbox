import { EventEmitter } from "events";

const baseFormat = (logLevel: string, date: Date) =>
  `[${logLevel}][${date.toLocaleString()}]`;

export class MyLogger extends EventEmitter {
  constructor() {
    super();

    this.on("info", (data: string) => {
      console.log(`${baseFormat("INFO", new Date())}${data}`);
    });

    this.on("warn", (data: string) => {
      console.log(`${baseFormat("WARN", new Date())}${data}`);
    });

    this.on("error", (data: string) => {
      console.log(`${baseFormat("ERROR", new Date())}${data}`);
    });
  }

  info(data: string) {
    this.emit("info", data);
  }
  warn(data: string) {
    this.emit("warn", data);
  }
  error(data: string) {
    this.emit("error", data);
  }
}
