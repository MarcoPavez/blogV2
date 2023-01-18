/* Sólo por orden, se crea db.js e index.js separado */

import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"MPavez2021.,*",
    database:"pyme"
})