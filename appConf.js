
// const host = process.env.HOST
// const user = process.env.USER
// const database = process.env.DB
// const password = process.env.PASS
// const port = process.env.PORT

// const secret = process.env.SECRET

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