import { Request, Response, NextFunction } from "express";
import Freelancer from "../model/freelancer";
import User from "../model/user";

const getFreelancers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const freelancer = await User.find({ role: "freelancer" });

    res.status(201).json({
      success: true,
      message: "Freelancer мэдээлэл олдлоо.",
      freelancer,
    });
  } catch (error) {
    next(error);
  }
};

const getFreelancer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  console.log(id);

  try {
    const freelancer = await User.find({ "freelancer._id": id }).populate(
      "freelancer.service"
    );

    res.status(201).json({
      success: true,
      message: "Freelancer мэдээлэл олдлоо.",
      freelancer,
    });
  } catch (error) {
    next(error);
  }
};

const deleteFreelancer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const freelancer = await User.findByIdAndDelete(id);
  try {
    res.status(201).json({
      success: true,
      message: `${id} амжилттай устлаа`,
      freelancer,
    });
  } catch (error) {
    next(error);
  }
};

const createFreelancer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(req.body);
  try {
    const freelancer = await User.create(req.body);
    res.status(201).json({
      success: true,
      message: "шинэ хэрэглэгч амжилттай үүслээ",
      freelancer,
    });
  } catch (error) {
    next(error);
  }
};
const editFreelancer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  console.log("id", id);
  console.log("heyy", req.body);
  try {
    const freelancer = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    console.log("freelancer", freelancer);
    res
      .status(201)
      .json({ message: "freelancer Succesfully updated", freelancer });
  } catch (error) {
    next(error);
  }
};

export {
  getFreelancers,
  getFreelancer,
  createFreelancer,
  deleteFreelancer,
  editFreelancer,
};
