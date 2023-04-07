class SiteController {
  // [GET] home
  index(req, res) {
    res.render('index', { title: 'NodeJs', message: 'Hello world' });
  }

  // [GET] form
  showForm(req, res) {
    res.render('form');
  }
}

export default new SiteController();
