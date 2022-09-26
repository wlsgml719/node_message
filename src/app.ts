import * as express from "express";

const app: express.Express = express();
const port: Number = 3000;

app.get("/", (req: express.Request, res: express.Response) => {
  res.status(200);
  res.send("hello");
  res.end();
});

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});
