import { Schema, model } from "mongoose";

interface IClient {
  name: string;
  email: string;
  password: string;
  avatar?: string;
  company_name: string;
  industry: {
    skills: string[];
  };
  created_at: Date;
  updated_at: Date;
}

const clientSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: { type: String, required: true, unique: true },
    password: String,
    avatar: String,
    company_name: String,
    industry: {
      skills: [],
    },
  },
  { timestamps: true }
);

const client = model("Client", clientSchema);

export default client;
