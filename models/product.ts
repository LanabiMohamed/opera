import { model, models, Schema } from "mongoose";

const ProductSchema = new Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  definition: {
    type: String,
    required: true,
  },
  destination: {
    type: [String],
    required: true,
  },
  properties: {
    type: [String],
    required: true,
  },
  variances: [
    {
      quantity: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
  colors: {
    type: [String],
  },
});

const Product = models.Product || model("Product", ProductSchema);

export default Product;
