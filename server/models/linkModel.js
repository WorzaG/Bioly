const pool = require('../db/db')
// title == link_name
const add = async(user_id,link,title) => {

    const query = `INSERT INTO links(user_id,link,link_name) VALUES($1,$2,$3) RETURNING *`
    const values = [user_id,link,title]
    const result = await pool.query(query,values)
    return result.rows[0]

}

const remove = async (id) => {
    const query = `DELETE FROM links WHERE id = $1`;
    const values = [id];
    const result = await pool.query(query, values);
    return result.rowCount > 0;  // true: silindi, false: bulunamadı
}

const update = async(id,title,link) => {
    try {
        const query = `UPDATE links SET link = $3, link_name = $2 WHERE id = $1 RETURNING *`;
        const values = [id, title, link];
        const result = await pool.query(query, values);
        //console.log(result);
        return result.rows[0];
      } catch (error) {
        console.error('Güncelleme hatası:', error);
        throw error;
      }
}

const count = async (id) => {
    const query = `UPDATE links SET click_count = click_count + 1  WHERE id = $1 RETURNING *`
    const values = [id]
    const result = await pool.query(query,values)
    return result.rows[0]
}

const getLink = async (id) => {
    const query = `SELECT * FROM links WHERE user_id = $1`
    const values = [id]
    const result = await pool.query(query,values)
    return result.rows
}

module.exports = {
    add,
    remove,
    getLink,
    update,
    count
}

