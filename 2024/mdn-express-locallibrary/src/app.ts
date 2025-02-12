// app.ts
import path from "path";
import compression from "compression";
import express, { Request, Response, NextFunction } from "express";
import helmet from "helmet";
import createError, { HttpError } from "http-errors";
import { connect } from "mongoose";
import logger from "morgan";
import { NODE_ENV } from "./env";
import { mongoURL } from "./utils";
import catalogRouter from "./routes/catalog";
import indexRouter from "./routes";

const app = express();

// Setup mongoose connection.
connect(mongoURL)
  .then(() => {
    console.log(`DB connection "${mongoURL}" established`);
  })
  .catch(console.error);

// Setup helmet middleware.
app.use(helmet());

// Setup template engine.
app.set("views", path.join(__dirname, "..", "views"));
app.set("view engine", "pug");

// Setup request body parser.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Setup compression middleware.
app.use(compression());

// Setup static assets.
app.use(express.static(path.join(__dirname, "..", "public")));

// Setup logger.
app.use(logger("dev"));

// Setup routers.
app.use(indexRouter);
app.use("/catalog", catalogRouter);

// Setup error handler.
app.use((req, res, next) => {
  return next(createError(404));
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
  // render the error page
  res.status(err.status || 500);
  return res.render("error", {
    message: err.message,
    error: NODE_ENV === "development" ? err : {},
  });
});

export default app;
