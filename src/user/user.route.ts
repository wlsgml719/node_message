import { Router } from "express";
import { User } from "../user/user.model";
import * as CustomError from "../error/customError";

export const router = Router();

router.get("/users/:id", (req, res) => {
  try {
    const { id } = req?.params;

    const user = User.find((user) => {
      return user.id === parseInt(id);
    });

    if (!Number.isInteger(parseInt(id))) throw CustomError.ValidationError;

    res.status(200).send({ success: true, data: user });
  } catch (e: unknown) {
    console.log(e);
    res.status(400).send({ success: false });
  }
});

export default router;
