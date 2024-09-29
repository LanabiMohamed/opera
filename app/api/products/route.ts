import Product from "@models/product";
import { connectToDatabase } from "@utils/database";
import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    await connectToDatabase();

    const url = new URL(req.url);
    const SearchParams = new URLSearchParams(url.searchParams);
    const q = SearchParams.get("q");

    if (q === "latest") {
      const products = await Product.find()
        .select("title imageUrl variances destination")
        .sort({ createdAt: -1 })
        .limit(6);
      return new Response(JSON.stringify(products), { status: 200 });
    }

    const p = Number(SearchParams.get("p") ?? 1);
    const type = SearchParams.get("type");
    const search = SearchParams.get("search");
    const destination = SearchParams.get("destination");
    const min = SearchParams.get("min");
    const max = SearchParams.get("max");

    let query = {};

    if (search) {
      query = {
        ...query,
        $or: [
          { title: { $regex: search, $options: "i" } },
          { type: { $regex: search, $options: "i" } },
        ],
      };
    }

    if (destination) {
      query = {
        ...query,
        destination: { $in: destination.split(",") },
      };
    }

    if (min) {
      query = {
        ...query,
        "variances.price": { $gte: Number(min) },
      };
    }

    if (max) {
      query = {
        ...query,
        "variances.price": { $lte: Number(max) },
      };
    }

    if (type) {
      query = {
        ...query,
        type,
      };
    }

    const docusCount = await Product.countDocuments(query);
    const productsPerPage = 6;

    const count = Math.ceil(docusCount / productsPerPage);
    const products = await Product.find({ ...query })
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
