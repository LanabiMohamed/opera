import { model, models, Schema } from "mongoose";

const type = [
  "Interior Walls Paints",
  "Exterior Walls Paints",
  "Primers, Putties and Thinners",
  "Insulation and Protective Products",
  "Steel Products",
  "Wood Products",
  "Floor Coatings",
];

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
    type: [String],
    required: true,
  },
  properties: {
    type: [String],
    required: true,
  },
});

const Product = models.Product || model("Product", ProductSchema);

export default Product;
