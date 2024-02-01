import { Router } from "express";
import adminRoutes from './admin'
import taskRoutes from "./taskRoutes"
import employeeRoutes from './employeeRoutes'
import { authorizationMiddleware } from "../../middlewares/authorization/authentication";

const router = Router()

router.use('/admin', adminRoutes)
router.use('/employee', employeeRoutes)
router.use('/task',authorizationMiddleware, taskRoutes)

export default router