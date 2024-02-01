import { Router } from "express";
import { registerAdmin } from "../../controllers/userControllers/Auth/admin";

const router = Router();

router.post('/register', registerAdmin)

export default router