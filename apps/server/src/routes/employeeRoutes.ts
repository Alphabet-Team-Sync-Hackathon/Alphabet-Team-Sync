import { Router } from 'express'
import { loginEmployee, registerEmployee } from '../controllers/userControllers/Auth/employee'


const router=Router()
  


router.post("/signUpEmployee",registerEmployee)
router.post("/signInEmployee",loginEmployee)

export default router