import Product from "@models/product";
import { connectToDatabase } from "@utils/database";
import { NextRequest } from "next/server";

export const GET = async () => {
  try {
    await connectToDatabase();
    console.log("Products");

    const Products = await Product.find();
    return new Response(JSON.stringify(Products), { status: 200 });
  } catch (err) {
    console.log(err);
    return new Response(JSON.stringify(err), { status: 501 });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    await connectToDatabase();

    const product = await req.json();

    await Product.create(product);
    return new Response(JSON.stringify({ msg: "Done" }), { status: 200 });
  } catch (err) {
    console.log(err);
    return new Response(JSON.stringify(err), { status: 501 });
  }
};
