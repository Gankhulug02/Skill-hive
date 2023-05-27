import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import connectDB from "./config/db";
import dotenv from "dotenv";
dotenv.config();
import error from "./middlewares/error";
import userRoutes from "./routes/user";
import serviceRoutes from "./routes/service";
import freelancerRoutes from "./routes/freelancer";
import categoryRoutes from "./routes/category";
import portfolioRoutes from "./routes/portfolio";
import qrRoutes from "./routes/qr";

import authRoutes from "./routes/auth";
import fileUpload from "express-fileupload";

// cloudinary
import cloudinary from "./utils/cloudinary";
// import { CloudinaryStorage } from "multer-storage-cloudinary";
// import multer from "multer";

const app = express();

// ENV
const MONGO_URI = process.env.MONGO_URI || "";
const PORT = process.env.PORT;

// middlewares
app.use(
  express.json({
    limit: "10mb",
  })
);
app.use(cors());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

// cloudinary start

app.post("/upload", async (req: any, res: Response, next: NextFunction) => {
  try {
    const result = await cloudinary.v2.uploader.upload(req.body.files, {
      folder: "Skill-Hive",
    });
    res.status(200).json({ message: "Амжилттай хадгаллаа.", imgUrl: result });
  } catch (error) {
    next(error);
  }
});

app.use("/uploads", express.static("uploads"));

// cloudinary end

// Routes
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/qrcode", qrRoutes);
app.use("/services", serviceRoutes);
app.use("/categories", categoryRoutes);
app.use("/portfolio", portfolioRoutes);
app.use("/freelancer", freelancerRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("hello skill hive be");
});

app.use(error);
connectDB(MONGO_URI);

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
