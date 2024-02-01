import { Router } from "express";
import { adminCreateTask } from "../../controllers/taskControllers/task";
const router = Router();

router.post('/createTask', adminCreateTask)

export default router