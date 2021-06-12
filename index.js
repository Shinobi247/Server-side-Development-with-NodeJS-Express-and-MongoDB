const http = require("http");
const fs = require("fs");
const path = require("path");
const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
  console.log("Requested for " + req.url + " by method " + req.method);

  if (req.method === "GET") {
    let fileUrl;
    if (req.url == "/") fileUrl = "/index.html";
    else fileUrl - req.url;

    let filePath = path.resolve("./public" + fileUrl);
    const fileExt = path.extname(filePath);
    if (fileExt == ".html") {
      fs.exists(filePath, (exist) => {
        if (!exist) {
          res.statusCode = 404;
          res.setHeader("Content-Type", "text/html");
          res.end(
            '<html lang="en"><body><h1>ERROR 404: ' +
              fileUrl +
              " not found</h1></body></html>"
          );
          return;
        }
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        fs.createReadStream(filePath).pipe(res);
      });
    } else {
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/html");
        res.end(
          '<html lang="en"><body><h1>ERROR 404: ' +
            fileUrl +
            " not supported</h1></body></html>"
        );
    }
  }
//   console.log(req.headers);

//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/html");
//   res.end('<html lang="en"><body><h1>Hello World!</h1></body></html>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at ${port}`);
});
