import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();
export const db=mysql.createConnection({
    host:process.env.DB_HOST,
    port:process.env.DB_PORT,
    database:process.env.DB_DB,
    user:process.env.DB_USER,
    password:process.env.DB_PASS
})