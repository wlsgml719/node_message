import customError from "error/customError";
import * as express from "express";
import userRouter from "./user/user.route";

class Server {
  public app: express.Application;
  private port: Number = 3000;

  constructor() {
    const app: express.Application = express();
    this.app = app;
  }

  private setRoute() {
    this.app.get("/", (req: express.Request, res: express.Response) => {
      try {
        res.status(200).send({ success: true });
      } catch (e) {
        res.status(400).send({ success: false });
      }
    });

    this.app.use(userRouter);
  }

  private setMiddleWare() {
    this.app.use((req, res, next) => {
      console.group("logging");
      console.log(req.rawHeaders);
      console.groupEnd();

      next();
    });

    this.app.use(express.json());

    this.app.use((req, res, next) => {
      res.status(404).send({ error: "404 NOT FOUND" });
    });

    this.app.use((req, res, next) => {
      res.status(500).send({ error: "500 SERVER ERROR" });
    });

    this.setRoute();
  }

  public listen() {
    this.setMiddleWare();
    this.app.listen(this.port, () => {
      `Server is running on ${this.port} port`;
    });
  }
}

function init() {
  const app = new Server();
  app.listen();
}

init();
