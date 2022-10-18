class AdminController {
  addProduct(req, res, next) {
    res.send(" admin addProduct controller");
  }
  editProduct(req, res, next) {
    res.send("admin editProduct controller");
  }
  deleteProduct(req, res, next) {
    res.send("admin deleteProduct api controller");
  }
}

export default new AdminController();
