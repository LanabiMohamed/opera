import Product from "@models/product";
import { connectToDatabase } from "@utils/database";
import { NextRequest } from "next/server";

export const GET = async () => {
  try {
    await connectToDatabase();
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

export const DELETE = async (req: NextRequest) => {
  try {
    await connectToDatabase();

    const { id } = await req.json();
    await Product.findByIdAndDelete(id);

    return new Response(JSON.stringify({ msg: "Done" }), { status: 200 });
  } catch (err) {
    console.log(err);
    return new Response(JSON.stringify(err), { status: 501 });
  }
};

export const PATCH = async (req: NextRequest) => {
  try {
    await connectToDatabase();

    const data = await req.json();
    await Product.findByIdAndUpdate(data._id, data, { new: true });

    return new Response(JSON.stringify({ msg: "Done" }), { status: 200 });
  } catch (err) {
    console.log(err);
    return new Response(JSON.stringify(err), { status: 501 });
  }
};
