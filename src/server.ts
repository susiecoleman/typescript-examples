import * as express from "express";
import { Application, Request, Response } from "express";

const app: Application = express();
const port = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
  res.send({ express: "Hello World" });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
