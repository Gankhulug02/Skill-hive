import { Schema, model } from "mongoose";
import freelancer from "./freelancer";

interface IService {
  title: string;
  description: string;
  skills: [];
  budget: number;
  deadline: Date;
  client_id: {
    type: any;
  };
}

const serviceSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    img: {
      type: [],
      required: true,
    },

    skills: {
      type: [],
      required: true,
    },
    budget: {
      type: Number,
      required: true,
    },
    Freelancer: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const service = model("Service", serviceSchema);

// serviceSchema.method("addToFree", async function (id) {
//   const fr = await freelancer.findOneAndUpdate(id, { service: this._id });
// });

export default service;
