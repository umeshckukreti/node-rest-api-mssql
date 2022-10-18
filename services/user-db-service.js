import sql from "mssql";
export const loginService = (pool, req) => {
  const request = pool.request();
  const { username, password, grantType } = req.body;

  return (
    request
      .input("email", sql.VarChar, username)
      .input("password", password)
      .query(
        "select * from users where email = @email AND password = @password"
      )

      // .input("email", sql.VarChar, username)
      // .input("password", sql.VarChar, password)
      // .execute("CheckUser") //user Databasename.dbo.storedProcedureName for the procedure outside db
      .then((recordset) => {
        /*
      handle request success to db
      */
        console.log("login service success block", recordset);
        return recordset;
      })
      .catch((err) => {
        /*
      handle request failure from db
      */
        console.log("login service error block");
        return { message: "request error block", err };
      })
  );
};
