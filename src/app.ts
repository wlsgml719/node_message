import * as express from "express";
import userRouter from "./user/user.route";

const app: express.Express = express();
const port: Number = 3000;

app.get("/", (req: express.Request, res: express.Response) => {
  try {
    res.status(200);
    res.send("node_message");
  } catch (e) {
    throw e;
  }
});
app.use(userRouter);

app.listen(port, () => {
  console.log(`server listening at ${port}`);
});
