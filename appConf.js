
const host = "localhost"
const user = "postgres"
const database = "postgres"
const password = "postgres"
const port = 5432

const secret = "dontfish"

const schemas = [{ name: "tbcommon", default: true }, { name: "public", default: true }]

module.exports = {
    host,
    user,
    database,
    password,
    port,
    schemas,
    secret
}