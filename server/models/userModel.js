const pool = require('../db/db')

const addUser = async (username,email,password) => {
    const query = `INSERT INTO users (username,email,password) values ($1,$2,$3) RETURNING *`
    const values = [username,email,password]
    //console.log(name,surname,email,password);
    const result = await pool.query(query,values)
    return result.rows[0]
}   

const findUserByEmail = async(email) => {
    const query = `SELECT * FROM users WHERE email = $1 `
    const values = [email]
    const result = await pool.query(query,values)
    return result.rows[0]
}

const findUserByID = async(id) => {
    const query = `SELECT id,username,email,avatar_url FROM users WHERE id = $1 `
    const values = [id]
    const result = await pool.query(query,values)
    return result.rows[0]
}

const findUserByUsername = async(username) => {
  const query = `SELECT * FROM users WHERE username = $1 `
  const values = [username]
  const result = await pool.query(query,values)
  return result.rows[0]
}

const findProfile = async(username) => {
    const query = `
    SELECT 
  u.username,
  u.avatar_url,
  json_agg(
    json_build_object(
      'id', l.id,
      'link_name', l.link_name,
      'link', l.link
    )
  ) AS links
FROM users u
LEFT JOIN links l ON l.user_id = u.id
WHERE u.username = $1
GROUP BY u.id;
    `
    const values = [username]
    const result = await pool.query(query,values)
    return result.rows
}

module.exports = {
    addUser,
    findUserByEmail,
    findUserByID,
    findProfile,
    findUserByUsername
}