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

const refresh = async (request, response) => {
  try {
    let initNumbers = await columnsAndTablesCount();
    await pool.query(queries.parseTables);
    let updatedNumbers = await columnsAndTablesCount();
    let result = {
      tables: updatedNumbers.tables - initNumbers.tables,
      columns: updatedNumbers.columns - initNumbers.columns
    }
    response.status(200).json(result)
  }
  catch (error) {
    response.status(500).send('Error during refresh')
    console.log(error);
  }
}

const getTables = (request, response) => {
  pool.query(`SELECT name,schema,"desc",add_desc,tags,columns, is_deleted
              FROM dbdocs.tables_docs 
              ORDER BY name`, (error, results) => {
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

const changeTableStatus = (request, response) => {
  const table = request.params.name;
  const schema = request.params.schema;
  const statusType = request.body.type;

  pool.query(`UPDATE dbdocs.tables_docs SET is_deleted=$1
              WHERE name = $2 and schema = $3 `, [statusType == 'deleted' ? true : false, table, schema], (error, results) => {
    if (error) {
      response.status(500).send('Error during status change')
    } else {
      response.status(200).send('The table status was changed')
    }
  })
}

const isUserValid = async (userData) => {
  let results = await pool.query(`SELECT property_data
              FROM dbdocs.configuration
              WHERE property = 'credentials'`)

  let credentials = results.rows[0].property_data;
  return (credentials.name == userData.name && credentials.pass == userData.pass)
}

const columnsAndTablesCount = async () => {
  let columnsCount = await pool.query(`select sum(jsonb_array_length(columns)) as colCount
  from dbdocs.tables_docs;
  `);

  let tablesCount = await pool.query(`select count(*) tabCount
  from dbdocs.tables_docs
  where is_deleted = 'false';`)

  return { columns: columnsCount.rows[0].colcount, tables: tablesCount.rows[0].tabcount };
}

const getTags = async (request, response) => {
  pool.query(`SELECT property_data
  FROM dbdocs.configuration
  WHERE property = 'tags'`, (error, results) => {
    if (error) {
      response.status(500).send('Error during query')
      console.log(error);
    } else {
      response.status(200).json(results.rows[0].property_data);
    }
  })
}

const saveTags = (request, response) => {
  pool.query(
    `UPDATE dbdocs.configuration
     SET property_data=$1
     WHERE property = 'tags'`,
    [JSON.stringify(request.body)],
    (error, results) => {
      if (error) {
        response.status(500).send('Error during update')
        console.log(error);
      } else {
        response.status(200).send('The tags were updated')
      }
    }
  )
}

const getSchemas = (request, response) => {
  response.status(200).json(config.schemas)
}

const getRefTable = async (request, response) => {
  const table = request.params.name;
  const schema = request.params.schema;
  const column = request.params.column;

  pool.query(queries.findRefTable, [table, schema, column], (error, results) => {
    if (error) {
      response.status(500).send('Error during query')
      console.log(error);
    } else {
      response.status(200).json(results.rows[0])
    }
  })
}



module.exports = {
  setup,
  getTables,
  getTableByNameAndSchema,
  updateTable,
  getTags,
  getSchemas,
  refresh,
  isUserValid,
  saveTags,
  changeTableStatus,
  getRefTable
}