import { Request, Response, NextFunction } from "express";
import QRCode from "qrcode";

const generateQRCode = (data: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    QRCode.toDataURL(data, (err, url) => {
      if (err) {
        reject(err);
      } else {
        resolve(url);
      }
    });
  });
};

const qrGenerater = async (req: Request, res: Response) => {
  const data = req.query;
  try {
    const qr = await generateQRCode(JSON.stringify(data));
    res.status(200).json({ qr });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error generating QR code" });
  }
};
export { qrGenerater };
