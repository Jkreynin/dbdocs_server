// const host = 'kandula.db.elephantsql.com'
// const user = 'cheyjwak'
// const database = 'cheyjwak'
// const password = 'BbOuf4mbwj9HyRRkvlwtcCyEV9isepEN'
// const port = 5432

const host = 'localhost'
const user = 'postgres'
const database = 'postgres'
const password = 'postgres'
const port = 5432

const schemas = ['emet', 'tbcommon']
const tags = ['Read','Write','TBManager']
module.exports = {
    host,
    user,
    database,
    password,
    port,
    schemas,
    tags
}