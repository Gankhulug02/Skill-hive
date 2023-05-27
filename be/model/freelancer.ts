import { Schema, model } from "mongoose";

interface IFreelancer {
  id: number;
  name: string;
  email: string;
  password: string;
  avatar?: string;
  job_title: string;
  skills: string[];
  hourly_rate: number;
  availability: string;
}
const freelancerSchema = new Schema(
  {
    User: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    phone: {
      type: String,
      required: [true, "Хэрэглэгчийн утасны дугаарыг ийг заавал бөглөнө үү!!!"],
    },
    avatar: {
      type: String,
    },
    job_title: {
      type: String,
      ENUM: ["Client", "Freelancer"],
    },
    skills: {
      type: [],
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    hourly_rate: {
      type: Number,
      required: true,
    },
    availability: {
      type: String,
      required: true,
    },
    worked_projects: {
      type: [],
      required: true,
    },
    region: {
      type: String,
      required: true,
    },
    Service: [
      {
        type: Schema.Types.ObjectId,
        ref: "Service",
      },
    ],
  },

  { timestamps: true }
);

const freelancer = model("Freelancer", freelancerSchema);

export default freelancer;
