import Product from "@models/product";
import { connectToDatabase } from "@utils/database";
import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    await connectToDatabase();

    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.searchParams);
    const q = searchParams.get("q") || "";

    const query = q
      ? {
          $or: [
            { title: { $regex: q, $options: "i" } },
            { type: { $regex: q, $options: "i" } },
          ],
        }
      : {};

    const count = await Product.countDocuments(query);
    const products = await Product.find(query)
      .select("title variances type")
      .sort({ createdAt: -1 })
      .limit(6);

    return new Response(JSON.stringify({ products, count }), {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new Response(JSON.stringify(err), { status: 501 });
  }
};
