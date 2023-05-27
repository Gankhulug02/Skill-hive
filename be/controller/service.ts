import { Request, Response, NextFunction } from "express";
import Service from "../model/services";

const getServices = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const service = await Service.find().populate(
      "Freelancer",
      "freelancer.avatar name _id"
    );

    res.status(201).json({
      success: true,
      message: "Service мэдээлэл олдлоо.",
      service,
    });
  } catch (error) {
    next(error);
  }
};

const getService = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const service = await Service.findById(id).populate(
    "Freelancer",
    "freelancer.avatar name _id"
  );
  try {
    res
      .status(201)
      .json({ success: true, message: "Service мэдээлэл олдлоо.", service });
  } catch (error) {
    next(error);
  }
};
const getServiceByUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  console.log(id);
  try {
    const service = await Service.find({ Freelancer: id }).populate(
      "Freelancer",
      "freelancer.avatar name _id"
    );
    console.log(service);
    res
      .status(201)
      .json({ success: true, message: "Service мэдээлэл олдлоо.", service });
  } catch (error) {
    next(error);
  }
};

const createService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const service = await Service.create(req.body);

    res.status(201).json({
      success: true,
      message: "Шинэ сервис амжилттай үүслээ",
      service,
    });
  } catch (error) {
    next(error);
  }
};
const uptadeService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const service = await Service.findByIdAndUpdate(id, req.body);
    res.status(201).json({
      success: true,
      message: "Сервис амжилттай шинэчлэгдлээ.",
      service,
    });
  } catch (error) {
    next(error);
  }
};
const deleteService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const service = await Service.findByIdAndDelete(id);
    res.status(201).json({
      success: true,
      message: "Сервис амжилттай устлаа.",
      service,
    });
  } catch (error) {
    next(error);
  }
};

export {
  getServices,
  getService,
  createService,
  uptadeService,
  deleteService,
  getServiceByUser,
};
