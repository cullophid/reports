import connect from "knex";

console.log(process.env.MYSQL_PASSWORD);
export const knex = connect({
  client: "mysql2",
  connection: {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
  },
  pool: { min: 0, max: 7 }
});
