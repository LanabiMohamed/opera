import Product from "@models/product";
import { connectToDatabase } from "@utils/database";
import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    await connectToDatabase();

    const url = new URL(req.url);
    const SearchParams = new URLSearchParams(url.searchParams);
    const p = Number(SearchParams.get("p") ?? 1);

    const docusCount = await Product.countDocuments();
    const productsPerPage = 4;

    const count = Math.ceil(docusCount / productsPerPage);
    const products = await Product.find()
      .skip((p - 1) * productsPerPage)
      .limit(productsPerPage);

    return new Response(JSON.stringify({ products, count }), {
      status: 200,
    });
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
