import express, { Request, Response, NextFunction } from "express";

const app = express();

app.use("/dello", (req: Request, res: Response, next: NextFunction) => {
  res.send("dello");
});

const port: number = 4000;

app.listen(port, () => {
  console.log("listening in 4000");
});
