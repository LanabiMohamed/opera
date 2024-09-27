import { model, models, Schema } from "mongoose";

const ProductSchema = new Schema(
  {
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

    //Caracteristiques technique
    densite: {
      type: String,
      required: true,
    },
    rendement: {
      type: String,
      required: true,
    },
    tempsSachage: {
      type: String,
      required: true,
    },
    aspectdifilmsec: {
      type: [String],
      required: true,
    },
    teinte: {
      type: String,
    },
    viscosite: {
      type: String,
    },

    //mise en oeuvre
    dilution: {
      type: String,
      required: true,
    },
    supports: {
      type: [String],
      required: true,
    },
    materielApplication: {
      type: [String],
      required: true,
    },
    nettoyageMateriel: {
      type: String,
    },
    preparationSupport: {
      type: String,
    },

    colors: {
      type: [String],
    },
  },
  { timestamps: true }
);

const Product = models.Product || model("Product", ProductSchema);

export default Product;
