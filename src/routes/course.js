import express from 'express';
import courseController from '../app/controllers/CourseController.js';

const router = express.Router();

router.get('/add', courseController.goToPageAddCourse);

router.get('/deleted', courseController.getDeletedCourse);

router.post('/store', courseController.addCourse);

router.delete('/:id', courseController.forceDeleteCourse);

router.put('/:id', courseController.updateCourse);

router.patch('/:id', courseController.updateSoftDeletedCourse);

router.get('/:id/edit', courseController.goToPageEditCoure);

router.get('/:id', courseController.getCourseDetail);

router.get('/', courseController.getListCourses);

export default router;
