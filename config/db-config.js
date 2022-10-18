const config = {
  user: "SA",
  password: "MyPass@word",
  server: "localhost",
  database: "users_info",
  options: {
    trustedconnection: true,
    enableArithAbort: true,
    instancename: "SQLEXPRESS",
    trustServerCertificate: true,
  },
  port: 1433,
};

export default config;
