import { Request, Response, NextFunction } from "express";
import freelancer from "../model/freelancer";
import User from "../model/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import sendEmail from "../utils/sendEmail";
import generateCode from "../utils/confirmation";

const test = async (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello API Sent Email");
};
const login = async (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body);
  try {
    const user = (await User.findOne(
      { email: req.body.email },
      "+password"
    )) as any;

    if (!user) {
      res.status(200).json({ message: `email or password incorrect` });
    }

    const checkPass = bcrypt.compareSync(
      req.body.password,
      user.password.toString()
    );

    if (!checkPass) {
      res.status(400).json({ message: `email or password incorrect` });
    }

    const { _id, name, email, role }: any = user;

    const token = jwt.sign(
      { _id, name, email, role },
      process.env.JWT_SECRET_KEY!,
      {
        expiresIn: 3600,
      }
    );

    res.status(200).json({ message: `Амжилттай нэвтэрлээ`, user, token });
  } catch (error) {
    console.log(error);
    next();
  }
};

const register = async (req: Request, res: Response, next: NextFunction) => {
  const { firstName, lastName, email, password, role } = req.body;
  console.log(req.body);

  try {
    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = await User.create({
      email,
      name: [firstName, lastName],
      role,
      password: hashedPassword,
    });

    res.status(200).json({ message: `Амжилттай бүртгэгдлээ`, user });
  } catch (error) {
    next(error);
  }
};

const authMail = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const OPT = generateCode();
    console.log("OPT", OPT);
    const r = await sendEmail("Tushig", "huluguu0202@gmail.com", OPT);
    console.log("RES", r);
    res.send("Hello API Sent Email");
  } catch (error) {
    next(error);
  }
};

export { register, login, authMail, test };
