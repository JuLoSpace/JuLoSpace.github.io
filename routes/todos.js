const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Главная'
    })
})

router.get('/projects', (req, res) => {
    res.render('projects', {
        title: 'Проекты'
    })
})

router.get('/ev3models', (req, res) => {
    res.render('ev3models', {
        title: 'Проекты'
    })
})

module.exports = router