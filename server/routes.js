import { Router } from "express";
import { generateQuestionsController } from "./controller.js";

const router = Router();

router.post("/generate-questions", generateQuestionsController);

export default router;
