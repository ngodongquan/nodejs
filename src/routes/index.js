import newsRouter from './news.js';
import siteRouter from './site.js';
import courseRouter from './course.js';

function route(app) {
  // news
  app.use('/news', newsRouter);

  // home
  app.use('/', siteRouter);

  // course
  app.use('/courses', courseRouter);
}

export default route;
