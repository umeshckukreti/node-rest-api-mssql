import yup from "yup";

const bodySchema = {
  login: yup.object().shape({
    username: yup.string().required().email(),
    password: yup.string(),
  }),
  createUser: yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    phoneNo: yup.number().required().positive().integer(),
    password: yup.string().required(),
    role: yup.string().required(),
    designation: yup.string().required(),
    cartId: yup.number().required().positive().integer(),
  }),
};

export default bodySchema;
