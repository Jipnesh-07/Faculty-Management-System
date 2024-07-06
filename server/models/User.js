import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
      min: 2,
      max: 100,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    city: {
      type: String,
      default:"mansa"},
    state: {
      type: String,
      default:"Punjab"},
    country: {
      type: String,
      default:"Bharat"},
    occupation: {
      type: String,
      default:"Computer Science"},
    phoneNumber: {
      type: String,
      default:"9856985633"},
    transactions: {
      type: Array,
      default:[],
    },  
    role: {
      type: String,
      enum: ["user", "admin", "superadmin","student"],
      default: "student",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
