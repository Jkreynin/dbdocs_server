
const host = process.env.HOST
const user = process.env.USER
const database = process.env.DB
const password = process.env.PASS
const port = process.env.PORT

const secret = process.env.SECRET

const schemas = ['emet', 'tbcommon', 'public']
const tags = ['Read', 'Write', 'TBManager']

module.exports = {
    host,
    user,
    database,
    password,
    port,
    schemas,
    tags,
    secret
}