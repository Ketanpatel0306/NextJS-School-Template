const express = require("express");
const next = require("next");
const port = 5000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
app.prepare().then(() => {
  const server = express();
  server.get("/home", (req, res) => {
    app.render(req, res, "/");
  });
  server.get("/aboutUs", (req, res) => {
    app.render(req, res, "/AboutUs");
  });

  //   server.get("/card-details/:id", (req, res) => {
  //     const id = req.params.id;
  //     // console.log("Id", id);
  //     const queryParams = {
  //       itemId: id,
  //     };
  //     app.render(req, res, "/CardDetails", queryParams);
  //   });

  server.all("*", (req, res) => {
    return handle(req, res, "/");
  });

  server.listen(5000, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${5000}`);
  });
});
