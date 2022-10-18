import { dbConnection } from "../helper/hoc.js";
import { loginService } from "../services/user-db-service.js";
import { body, validationResult } from "express-validator";

class UserController {
  login(req, res, next) {
    // console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // res.send({ message: "login success", data: req });

    dbConnection(loginService, req)
      .then((response) => {
        // handle reuest res for error and success
        console.log("response", response);
        if (res.reqSuccess) {
          res
            .status(200)
            .send({
              message: "User login successfully",
              data: response.data.recordset,
            });
        } else {
          res.status(400).send({ message: "Request Error", data: response });
        }
      })
      .catch((error) => {
        // handle internal server error
        res.status(500).send("Internal server error");
        console.log("db connection error", err);
      });
  }

  addUser(req, res, next) {
    console.log("Add user called");
    res.send("user created successfully");
  }
  refreshToken(req, res, next) {
    res.send("refresh token controller");
  }
  logout(req, res, next) {
    // console.log(req.body);
    console.log(req.url);
    res.send("logout api called");
  }
  updatePassword(req, res, next) {
    res.send("update assword api called");
  }
  forgotPassword(req, res, next) {
    res.send("forgot password apii called");
  }
  user(req, res, next) {
    res.send("user request called");
  }
}

export default new UserController();
