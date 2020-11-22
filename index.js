const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const todosRoutes = require('./routes/todos')


const PORT = process.env.PORT || 3000;

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(todosRoutes)

app.use(express.static('static'))


async function start() {
    try {
        app.listen(PORT, () => {
            console.log('Server has been started!')
        })
    } catch (e) {
        console.log(e)
    }
}

start()