// routes/api.ts
import { Router } from "express";
import multer from "multer";
import { postFile } from "../apis/file";

const router = Router();
const upload = multer();

router.post("/file/", upload.single("text_file"), postFile);

export default router;
