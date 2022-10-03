import { Router } from "express";
import { UserList } from "../user/user.model";

export const router = Router();

router.get("/user/:id", (req, res) => {
  try {
    res.status(200);
    res.send({ frends: UserList });
  } catch (e: unknown) {}
});

export default router;
