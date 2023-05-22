import express, { Application } from "express";
import cors from "cors";

const app: Application = express();

// application routes
import userRoute from "./app/modules/user/user.route";

// Cors using
app.use(cors());

// parseing data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// user route
app.use("/api/v1/user", userRoute);

export default app;
