const express = require('express')
const bodyParser = require('body-parser')
const dataAccess = require('./dataAccess')
const tokenHandler = require('./tokenHandler')
const auth = require('./auth')
const cors = require('cors');

const app = express()
const port = 3000

app.use(express.static('public'));
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.use(cors());

app.post('/login', async (request, response) => {
    let userData = {
        name: request.body.name,
        pass: request.body.pass
    }

    try {
        if (await dataAccess.isUserValid(userData)) {
            let token = tokenHandler.create(userData)
            return response.json({ token: token })
        } else {
            return response.status(401).send('Could not login')
        }
    } catch (error) {
        return response.status(500).send('An unexpected error has occured')
    }

});

app.use("/api*", auth);
app.get('/api/tables', dataAccess.getTables)
app.get('/api/tables/:schema/:name', dataAccess.getTableByNameAndSchema)
app.put('/api/table', dataAccess.updateTable)
app.get('/api/refresh', dataAccess.refresh)
app.get('/api/tags', dataAccess.getTags)

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


