import Course from '../models/Course.js';
import mongooseUtils from '../../utils/mongoose.js';
class SiteController {
  // [GET] home
  async index(req, res, next) {
    res.render('index', { message: 'Hello World', title: 'Express' });
  }

  // [GET] form
  showForm(req, res) {
    res.render('form');
  }
}

export default new SiteController();
