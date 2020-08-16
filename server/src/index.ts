import express, { Request, Response, NextFunction } from "express";
import { createConnection } from "typeorm";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const app = express();

  const connection = await createConnection({
    type: "mysql",
    host: process.env.host,
    port: Number(process.env.port),
    username: process.env.username,
    password: process.env.password,
    database: process.env.database,
    synchronize: true,
    logging: false,
  }).catch((e) => console.log(e));

  const port: number = 4000;

  app.listen(port, () => {
    console.log("listening in 4000");
  });
};
