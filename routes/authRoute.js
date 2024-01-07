import express from 'express';
import { registerController, updateController, getController } from '../controllers/authController.js'

const router = express.Router();

router.post('/add', registerController)
router.put('/havename', updateController)
router.get('/getname', getController)

export default router;