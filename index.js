const express = require('express')
const bodyParser = require('body-parser')
const dataAccess = require('./dataAccess')
const app = express()
const port = 3000
app.use(express.static('public'));
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});

app.get('/tables', dataAccess.getTables)
app.get('/tables/:schema/:name', dataAccess.getTableByNameAndSchema)
app.put('/table', dataAccess.updateTable)
app.get('/refresh', dataAccess.refresh)
app.get('/tags', dataAccess.getTags)

dataAccess.setup()
    .then(() => {
        console.log(`Database setup was completed successfully.`)
        app.listen(port, () => {
            console.log(`App running on port ${port}.`)
        })

    })
    .catch((err) => {
        console.log(err)
        process.exit(1)
    })


