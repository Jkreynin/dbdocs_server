const user = 'postgres'
const database = 'postgres'
const password = 'postgres'
const port = 5432

const schemas = ['emet', 'tbcommon','public']
const tags = ['Read','Write','TBManager']
module.exports = {
    user,
    database,
    password,
    port,
    schemas,
    tags
}