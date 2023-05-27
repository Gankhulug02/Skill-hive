import { Request, Response, NextFunction } from "express";
import User from "../model/user";

const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await User.find();

    res.status(201).json({
      success: true,
      message: "user мэдээлэл олдлоо.",
      user,
    });
  } catch (error) {
    next(error);
  }
};

const getUser = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const user = await User.findById(id);
  try {
    res
      .status(201)
      .json({ success: true, message: "user мэдээлэл олдлоо.", user });
  } catch (error) {
    next(error);
  }
};

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { email, name, password, avatar } = req.body;

  try {
    if (!email || !name || !password) {
      res.status(201).json({
        success: false,
        message: "email, name, password hooson baina",
      });
    }
    const user = await User.create({ email, name, password, avatar });
    res.status(201).json({
      success: true,
      message: "шинэ хэрэглэгч амжилттай үүслээ",
      user,
    });
  } catch (error) {
    next(error);
  }
};

const editUser = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  console.log("id", id);
  console.log("body", req.body);

  try {
    const freelancer = await User.findByIdAndUpdate(
      { "freelancer._id": id },
      {
        new: true,
      }
    );
    res
      .status(201)
      .json({ message: "freelancer Succesfully updated", freelancer });
  } catch (error) {
    next(error);
  }
};

export { getUsers, getUser, createUser, editUser };
