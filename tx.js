const {Client} = require('pg')

const client = new Client({
    user: "postgres",
    password: "0000",
    port: 5432,
    database: "testdb"
})
execute()

async function execute() {
    try {
        await client.connect()
        await client.query("BEGIN")
        await client.query("insert into employees values ($1,$2)", [1008, 'Ali'])
        console.log("Inserted a new row")
        await client.query("COMMIT")
    } 
    catch (ex) {
        console.log("Failed to execute something ${ex}")
        await client.query("COMMIT")
    }
    finally {
        await client.end()
        console.log("Cleaned.")
    }
}