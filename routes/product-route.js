import express from "express";
import { PATH } from "../constant/Path.js";
import ProductController from "../controller/product.controller.js";

const router = express.Router();

router.route(PATH.PRODUCT_LIST, ProductController.productList);
router.route(PATH.PRODUCT_DETAILS, ProductController.productDetails);
router.route(PATH.ADD_PRODUCT_CART, ProductController.addToCart);

export default router;
