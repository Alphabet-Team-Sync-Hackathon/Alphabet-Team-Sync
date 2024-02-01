import { Router } from "express";
import { loginAdmin, registerAdmin } from "../../controllers/userControllers/Auth/admin";

const router = Router();

router.post('/register', registerAdmin)
router.post('/adminLogin', loginAdmin)

export default router