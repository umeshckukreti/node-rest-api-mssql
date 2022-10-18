const validateBody = (schema) => {
  return (req, res, next) => {
    schema
      .validate(req.body)
      .then((value) => {
        console.log(value);
        next();
      })
      .catch((err) => {
        console.log(err);

        res.send(err.errors);
      });
  };
};

export default validateBody;
