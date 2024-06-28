import { Router } from "express";
import { addStatement , updateStatement} from "../controllers/statement_controller.js";

export const router = Router()

router.post('/statement',addStatement)

router.patch('/statement/:id/:caseStatus',updateStatement)
