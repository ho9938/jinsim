const {Client} = require('pg')
const client = new Client({
    user: "postgres",
    password: "0000",
    port: 5432,
    database: 'testdb'
})

execute()

async function execute(){
    try {
    await client.connect() // only if inside async function
    console.log("Connected successfully.")
    const results = await client.query("select * from employees")
    console.table(results.rows)
    }
    catch (ex)
    {
        console.log('Something wrong happend ${ex}')
    }
    finally {
    await client.end()
    console.log("Client disconnected successfully.")
    }
}