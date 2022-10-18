import sql from "mssql";
import config from "../config/db-config.js";

const pool = new sql.ConnectionPool(config);

export default pool;
