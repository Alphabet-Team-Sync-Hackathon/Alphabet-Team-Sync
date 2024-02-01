import { Router } from 'express'
import { registerEmployee } from '../../controllers/userControllers/Auth/employee'


const router=Router()
  


router.post("/signUpEmployee",registerEmployee)

export default router