import { Router } from "express";
import { addStatement , updateStatement} from "../controllers/statement_controller.js";

export const router = Router()

router.post('/statements',addStatement)

router.patch('/statements/:id/:caseStatus',updateStatement)
