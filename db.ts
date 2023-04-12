// db.ts
import mysql from 'mysql2/promise';

const connection = async () => {
  return await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootpassword',
    database: 'GATS',
  });
};

export default connection;