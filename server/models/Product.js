import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: String,
    subject: String,
    description: String,
    category: String,
    rating: Number,
    
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);
export default Product;
