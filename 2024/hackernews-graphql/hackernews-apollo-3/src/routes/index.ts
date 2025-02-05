// routes/index.ts
import { Router, Request, Response } from "express";

const router = Router();
router.get("/", async (req: Request, res: Response) => {
  return res.redirect("/graphql");
});

export default router;
