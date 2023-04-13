import express from 'express';
import morgan from 'morgan';
import path from 'path';
import route from './routes/index.js';
import db from './config/db/index.js';
import methodOverride from 'method-override';

const app = express();
const port = 3001;

// method override
app.use(methodOverride('_method'));

// declare file static
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'src/public')));

// connect db
db.connectDb();

// middleware morgan
app.use(morgan('combined'));

// middleware get body form data from html form
app.use(
  express.urlencoded({
    extended: true,
  }),
);

// send from client server
app.use(express.json());

// views pug
app.set('views', 'src/views');
app.set('view engine', 'pug');

// Routes init
route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
