import * as express from "express";
import { UserList } from "./model/app.model";

const app: express.Express = express();
const port: Number = 3000;

app.get("/frends", (req: express.Request, res: express.Response) => {
  res.status(200);
  res.send({ frends: UserList });
});

app.listen(port, () => {
  console.log(`server listening at ${port}`);
});
