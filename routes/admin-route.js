import express from "express";
import { PATH } from "../constant/Path.js";
import adminController from "../controller/admin.controller.js";

const router = express.Router();

router.post(PATH.ADD_PRODUCT, adminController.addProduct);
router.route(PATH.DELETE_PRODUCT, adminController.deleteProduct);
router.route(PATH.EDIT_PRODUCT, adminController.editProduct);

export default router;
