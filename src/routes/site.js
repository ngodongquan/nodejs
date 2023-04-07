import express from 'express';
import siteController from '../app/controllers/SiteController.js';

// router
const router = express.Router();

router.use('/form', siteController.showForm);

    router.use('/', siteController.index);

export default router;
