import Course from '../models/Course.js';
import mongooseUtils from '../../utils/mongoose.js';

class CourseController {
  // [GET] course detail
  async getCourseDetail(req, res) {
    try {
      const id = req.params.id;
      let course = await Course.findById(id);
      res.render('Course/detailCourse', { course });
    } catch (error) {
      res.status(400).json({ message: 'Error!!!' });
    }
  }

  // [GET] list course
  async getListCourses(req, res) {
    try {
      // migrate data
      // await Course.updateMany({}, {"$set": {"deleted": false}}, {multi: true})
      const { mutipleMongooseToObject } = mongooseUtils;
      let listCourses = await Course.find({ deleted: false });
      listCourses = mutipleMongooseToObject(listCourses);
      const countCourseDeleted = await Course.countDocuments({ deleted: true });
      res.render('Course/listCourse', { listCourses, countCourseDeleted });
    } catch (error) {
      // next(error)
      res.status(400).json({ message: 'Error!!!' });
    }
  }

  // [GET] course add
  async goToPageAddCourse(req, res) {
    res.render('Course/newCourse');
  }

  // [POST] course store
  async addCourse(req, res) {
    try {
      await Course.create({ ...req.body, deleted: false });
      res.redirect('/courses');
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }

  // [DELETE] force delete course
  async forceDeleteCourse(req, res) {
    try {
      const id = req.params.id;
      await Course.deleteOne({ _id: id });
      res.redirect('back');
    } catch (error) {
      res.status(400).json({ message: 'Error!!!' });
    }
  }

  // [PATCH] update key delete course
  async updateSoftDeletedCourse(req, res) {
    try {
      const id = req.params.id;
      const deleted = req.query.deleted;
      await Course.updateOne(
        { _id: id },
        { $set: { deleted: deleted === 'true' ? true : false } },
      );
      res.redirect('back');
    } catch (error) {
      res.status(400).json({ message: 'Error!!!' });
    }
  }

  // [GET] DETAIL COURSE AND GO TO PAGE COURSE EDIT
  async goToPageEditCoure(req, res) {
    try {
      const id = req.params.id;
      let course = await Course.findById(id);
      res.render('Course/editCourse', { course });
    } catch (error) {
      res.status(400).json({ message: 'Error!!!' });
    }
  }

  // [PUT] update course
  async updateCourse(req, res) {
    try {
      const id = req.params.id;
      const body = req.body;
      await Course.findOneAndUpdate({ _id: id }, body);
      res.redirect('/courses');
    } catch (error) {
      res.status(400).json({ message: 'Error!!!' });
    }
  }

  // [GET] courses/deleted
  async getDeletedCourse(req, res) {
    try {
      const listCourseDeleted = await Course.find({ deleted: true });
      res.render('Course/listDeletedCourse', {
        listCourses: listCourseDeleted,
      });
    } catch (error) {}
  }
}

export default new CourseController();
