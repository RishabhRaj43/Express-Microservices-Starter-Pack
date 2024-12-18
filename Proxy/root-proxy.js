import express from "express";
import cors from "cors";
import proxy from "express-http-proxy";

const app = express();

app.use(cors());

app.use(
  "/api",
  proxy("http://localhost:3001", {
    parseReqBody: false,
    proxyReqPathResolver: (req) => req.originalUrl.replace(/^\/api/, ""),
  })
);

app.listen(3000, () => {
  console.log("server running on port 3000");
});
