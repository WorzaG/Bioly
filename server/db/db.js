const { Pool } = require("pg")
require('dotenv').config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: { rejectUnauthorized: false },
  })

pool.connect((err, client, release) => {
    if (err) {
      return console.error('Veritabanına bağlanırken hata:', err.stack);
    }
    console.log('✅ Veritabanına başarıyla bağlanıldı');
    release();
  });
  
module.exports = pool 