const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");
const os = require("os");
const chipDefaults = require("../config/chip_server.json");
http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(path.join(__dirname, "../public/index.html"), "utf8").pipe(res);
  })
  .listen(chipDefaults.port, () => {
    console.log(
      `Server running at http://${chipDefaults.hostname}:${chipDefaults.port}/`
    );
    console.log("Press Ctrl+C to quit.");
    console.log(`Load Average: ${os.loadavg()}`);
  });
