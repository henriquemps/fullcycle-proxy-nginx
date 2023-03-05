const mysql = require('mysql');
const pool  = mysql.createPool({
    connectionLimit : 10,
    host     : 'fc-db-mysql',
    user     : 'root',
    password : 'root',
    database : 'fullcycle'
});

module.exports = {

    insertPeople: (name) => {
        pool.query(`INSERT INTO people (name) VALUES ('${name}')`, function (error) {
            if (error) throw error

            console.log('Name inserted')
        });
    },

    getPeople: (callback) => {
        pool.query('SELECT * FROM people', function (error, results) {
            if (error) throw error

            callback(results)
        });
    }
}