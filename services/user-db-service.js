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
      .then((response) => {
        /*
      handle request success to db
      */
        console.log("login service success block", response);
        return { reqSuccess: true, data: response };
      })
      .catch((err) => {
        /*
      handle request failure from db
      */
        console.log("login service error block");
        return { reqSuccess: false, data: err };
      })
  );
};
