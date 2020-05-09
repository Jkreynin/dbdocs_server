const Pool = require('pg').Pool
const config = require('./appConf')
const queries = require('./queries')

const pool = new Pool({
  user: config.user,
  host: config.host,
  database: config.database,
  password: config.password,
  port: config.port
})


const setup = () => {
  return pool.query(queries.setupScript + " " + queries.parseTables);
}

const refresh = (request, response) => {
  pool.query(queries.parseTables, (error, results) => {
    if (error) {
      response.status(500).send('Error during refresh')
      console.log(error);
    } else {
      response.status(200).send('Refreshed')
    }
  })
}

const getTables = (request, response) => {
  pool.query(`SELECT name,schema,"desc",add_desc,tags,columns 
              FROM dbdocs.tables_docs 
              WHERE is_deleted=false order by name`, (error, results) => {
    if (error) {
      response.status(500).send('Error during query')
      console.log(error);
    } else {
      response.status(200).json(results.rows)
    }

  })
}

const getTableByNameAndSchema = (request, response) => {
  const name = request.params.name
  const schema = request.params.schema
  pool.query(`SELECT name,schema,"desc",add_desc,tags,columns 
              FROM dbdocs.tables_docs
              WHERE is_deleted=false and name = $1 and schema = $2`, [name, schema], (error, results) => {
    if (error) {
      response.status(500).send('Error during query')
      console.log(error);
    } else {
      response.status(200).json(results.rows[0])
    }
  })
}

const updateTable = (request, response) => {
  const {
    desc,
    tags,
    columns,
    add_desc,
    name,
    schema
  } = request.body

  pool.query(
    `UPDATE dbdocs.tables_docs
     SET "desc"=$1, tags=$2, columns=$3, add_desc=$4 
     WHERE name = $5 and schema = $6`,
    [desc, tags, JSON.stringify(columns), add_desc, name, schema],
    (error, results) => {
      if (error) {
        response.status(500).send('Error during update')
      } else {
        response.status(200).send('The table was updated')
      }
    }
  )
}

const isUserValid = async (userData) => {
  let results = await pool.query(`SELECT property_data
              FROM dbdocs.configuration
              WHERE property = 'credentials'`)

  let credentials = results.rows[0].property_data;
  return (credentials.name == userData.name && credentials.pass == userData.pass)
}

const getTags = (request, response) => {
  response.status(200).json(config.tags)
}

module.exports = {
  setup,
  getTables,
  getTableByNameAndSchema,
  updateTable,
  getTags,
  refresh,
  isUserValid
}