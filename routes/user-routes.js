import express from "express";
import { PATH } from "../constant/Path.js";
import userController from "../controller/user.controller.js";
import validateBody from "../middleware/validateBody.js";
import bodySchema from "../validator/body/body-schema.js";

const router = express.Router();

router
  .route(PATH.ADD_USER)
  .post(validateBody(bodySchema.createUser), userController.addUser);
router
  .route(PATH.LOGIN)
  .post(validateBody(bodySchema.login), userController.login);
router.route(PATH.LOGOUT).post(userController.logout);
router.route(PATH.REFRESH_TOKEN).post(userController.refreshToken);
router.route(PATH.UPDATE_PASSWORD).post(userController.updatePassword);
router.route(PATH.FORGOT_PASSWORD).post(userController.forgotPassword);
router.route(PATH.USERS).get(userController.user);

export default router;
