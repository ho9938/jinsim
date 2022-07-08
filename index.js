const {Client} = require('pg') // same as Const Client = require('pg').Client
const client = new Client({
    user: "postgres",
    password: "0000",
    // host: "",
    port: 5432,
    database: "testdb"
})

client.connect()
.then(() => console.log("Connected successfully")) // if successful
.then(() => client.query("select * from employees where name = $1", ["Edmond"]))
.then(results => console.table(results.rows))
.catch(e => console.log) // if failed
.finally(() => client.end()) // always
