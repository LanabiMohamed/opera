import LoadImage from "@components/LoadImage";
import { FaCheck } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import { GrDocumentDownload } from "react-icons/gr";

interface Product {
  _id: string;
  imageUrl: string;
  title: string;
  type: string;
  definition: string;
  destination: string[];
  properties: string[];
  variances: {
    quantity: string;
    price: number;
  }[];
  colors: string[];
}

async function page({
  searchParams: { id },
}: {
  searchParams: { id: string };
}) {
  const res = await fetch(`${process.env.URL}/api/products/${id}`, {
    cache: "no-cache",
  });
  if (!res.ok) return <div>Error Getting Product</div>;
  const {
    imageUrl,
    title,
    type,
    definition,
    destination,
    properties,
    variances,
    colors,
  }: Product = await res.json();
  console.log(colors);
  return (
    <div>
      <div className="flex gap-2 flex-col md:flex-row">
        <section className="flex-1">
          <LoadImage
            Css="w-full h-96 object-contain rounded-lg"
            Url={imageUrl}
          />
        </section>
        <section className="flex-1 p-4">
          <h2 className="text-3xl font-bold">{title}</h2>
          <h2 className="text-2xl font-bold text-gray-600">{type}</h2>
          <div className="flex flex-wrap gap-2 my-2">
            {destination.map((d) => (
              <p key={d} className="bg-green-300 px-2 rounded-md">
                {d}
              </p>
            ))}
          </div>
          <p className="font-semibold text-gray-600 py-6">{definition}</p>
          <p className="text-xl font-semibold mb-2">Prices</p>
          <div className="flex flex-wrap gap-2">
            {variances.map((v) => (
              <div
                key={v.quantity}
                className="border p-2 rounded-md border-black text-lg text-center"
              >
                <p>{v.quantity}</p>
                <div className=" w-full h-[1px] my-1 bg-gray-700"></div>
                <p>
                  <b>{v.price}</b> Dzd
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="bg-gray-100 my-4 rounded-lg">
        <h1 className="p-2 py-4 font-bold text-3xl text-[#0081ca] border-b border-gray-300">
          Properties
        </h1>
        <div className="p-2">
          {properties.map((property) => (
            <div
              key={property}
              className="flex items-center gap-2 px-2 rounded-md"
            >
              <FaCheck color="green" size={20} />
              <p>{property}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-100 my-4 rounded-lg">
        <h1 className="p-2 py-4 font-bold text-3xl text-[#0081ca] border-b border-gray-300">
          Fiche Technique
        </h1>
        <div className="p-2 flex gap-4 cursor-pointer underline">
          <FaFilePdf size={30} />
          <h2>Open Fiche Technique</h2>
          <GrDocumentDownload size={30} />
          <h2>Download Fiche Technique</h2>
        </div>
      </div>
    </div>
  );
}

export default page;
