import express from 'express'
import morgan from 'morgan'

const app = express()
const port = 3000

// middleware morgan
app.use(morgan('combined'))

// views pug
app.set('views', 'src/views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', {title: 'Nodejs', message: 'Hello World'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})