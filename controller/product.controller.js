class ProductController {
  productList(req, res, next) {
    res.send("productList controller");
  }
  productDetails(req, res, next) {
    res.send("productDetails controller");
  }
  addToCart(req, res, next) {
    res.send("addToCart api controller");
  }
}

export default new ProductController();
