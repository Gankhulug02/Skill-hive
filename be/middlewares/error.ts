import { Request, Response, NextFunction } from "express";

const error = (error: any, req: Request, res: Response, next: NextFunction) => {
  console.log("ERROR HANDLER", error.name);

  if (error.name === "CastError") {
    error.statusCode = 400;
    error.message = "Буруу бүтэцтэй ID байна.";
    res.status(error.statusCode || 500).json({ message: error.message });
  }
  res.status(400).json({ err: error });
};

export default error;
