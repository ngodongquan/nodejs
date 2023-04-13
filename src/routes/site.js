import express from 'express';
import siteController from '../app/controllers/SiteController.js';

// router
const router = express.Router();

router.get('/form', siteController.showForm);

router.get('/', siteController.index);

export default router;
