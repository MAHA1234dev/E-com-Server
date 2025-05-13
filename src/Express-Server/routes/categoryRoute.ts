import express from 'express';
import categorycontroller from '../controllers/categoriesController';
import { upload } from '../middleware/upload';

const router = express.Router();

router.get('/', categorycontroller.getAllCategories);
router.post('/upload-multiple', upload.array('images'), categorycontroller.postCategory);

export default router;