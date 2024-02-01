import { Router } from "express";
import adminRoutes from './admin'
import employeeRoutes from './employeeRoutes'

const router = Router()

router.use('/admin', adminRoutes)
router.use('/employee', employeeRoutes)

export default router