// apis/file.ts
import { Request, Response } from "express";

export const postFile = async (req: Request, res: Response) => {
  const textContent = req.file?.buffer.toString() ?? "";
  return res.json({
    username: req.body.username.toUpperCase(),
    gender: req.body.gender,
    text_content: textContent,
  });
};
