import db from "../server/db.js";

export const dbConnection = (service, request) => {
  return new Promise((resolve, reject) => {
    db.connect()
      .then((pool) => {
        // return request reaponse and error
        resolve(service(pool, request));
      })
      .catch((err) => {
        console.log("error field", err);
        // return db errors
        reject(err);
      });
  });
};
