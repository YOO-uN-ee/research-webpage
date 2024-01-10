import express from 'express';
import { registerController, updateController, getController, getData } from '../controllers/authController.js'

const router = express.Router();

router.post('/add', registerController)
router.put('/update/:uid', updateController)
router.get('/getname', getController)
router.get('/getdata/:group', getData)

export default router;