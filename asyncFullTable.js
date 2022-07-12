const { Client } = require('pg')
const client = new Client({
    user: "postgres",
    password: "0000",
    port: 5432,
    database: 'testdb'
})

execute()

async function execute() {
    try {
        await client.connect() // only if inside async function
        console.log("Connected successfully.")
        const results = await client.query("select name from employees where id = $1", [1001]);
        console.table(results)
        // console.log(typeof (results))
    }
    catch (ex) {
        console.log('Something wrong happend: ', ex);
    }
    finally {
        await client.end()
        console.log("Client disconnected successfully.")
    }
}