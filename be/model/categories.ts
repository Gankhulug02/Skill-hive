import { timeStamp } from "console";
import { Schema, model } from "mongoose";

const categorySchema = new Schema({
  title: { type: String, required: true },
  subCategory: {
    type: [
      {
        subtitle: { type: String, required: true },
      },
    ],
  },
});

const category = model("Category", categorySchema);

export default category;
