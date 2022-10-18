// const express = require('express')
import express from "express";
import { PATH } from "./constant/Path.js";
import userRoute from "./routes/user-routes.js";
import productRoute from "./routes/product-route.js";
import adminRoute from "./routes/admin-route.js";
import bodyParser from "body-parser";
const app = express();
const router = express.Router();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded

app.use(PATH.VERSION, router); //for add api version

router.use("/users", userRoute);
router.use("/products", productRoute);
router.use("/admin", adminRoute);

app.use("*", (req, res, next) => {
  console.log(req);
  res.status(404).send("404 not found");
});

app.listen(8080, () => {
  console.log("app running on port 8080");
});
