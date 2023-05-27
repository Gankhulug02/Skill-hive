import { Request, Response, NextFunction } from "express";
import Category from "../model/categories";

const getCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const category = await Category.find();

    res.status(201).json({
      success: true,
      message: "Category мэдээлэл олдлоо.",
      category,
    });
  } catch (error) {
    next(error);
  }
};

const getCategory = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const category = await Category.findById(id);
  try {
    res
      .status(201)
      .json({ success: true, message: "Category мэдээлэл олдлоо.", category });
  } catch (error) {
    next(error);
  }
};

const createCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json({
      success: true,
      message: "Шинэ category амжилттай үүслээ",
      category,
    });
  } catch (error) {
    next(error);
  }
};
const uptadeCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const category = await Category.findByIdAndUpdate(id, req.body);
    res.status(201).json({
      success: true,
      message: "Category амжилттай шинэчлэгдлээ.",
      category,
    });
  } catch (error) {
    next(error);
  }
};
const deleteCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const category = await Category.findByIdAndDelete(id);
    res.status(201).json({
      success: true,
      message: "Category амжилттай устлаа.",
      category,
    });
  } catch (error) {
    next(error);
  }
};

export {
  getCategories,
  getCategory,
  createCategory,
  uptadeCategory,
  deleteCategory,
};
