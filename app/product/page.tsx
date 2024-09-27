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
  //Caracteristiques technique
  densite: string;
  rendement: string;
  tempsSachage: string;
  aspectdifilmsec: string[];
  teinte: string;
  viscosite: string;
  //mise en oeuvre
  dilution: string;
  supports: string[];
  materielApplication: string[];
  nettoyageMateriel: string;
  preparationSupport: string;
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
    densite,
    rendement,
    tempsSachage,
    aspectdifilmsec,
    teinte,
    viscosite,
    dilution,
    supports,
    materielApplication,
    nettoyageMateriel,
    preparationSupport,
  }: Product = await res.json();

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
          Caracteristiques technique
        </h1>
        <div className="grid grid-cols-2 items-center gap-y-3 gap-x-1 p-2">
          <h2 className="font-semibold">Densite</h2>
          <p>{densite}</p>

          <h2 className="font-semibold">Rendement</h2>
          <p>{`${rendement} m² / ${
            variances[0]?.quantity.split(" ")[1] ?? "L"
          }`}</p>

          <h2 className="font-semibold">Temps de Sachage</h2>
          <p>{tempsSachage} h</p>

          <h2 className="font-semibold">Aspect de film sec</h2>
          {aspectdifilmsec.map((aspect) => (
            <p key={aspect}>{aspect}</p>
          ))}

          {viscosite && (
            <>
              <h2 className="font-semibold">Viscosite</h2>
              <p>{viscosite}</p>
            </>
          )}
        </div>
      </div>

      <div className="bg-gray-100 my-4 rounded-lg">
        <h1 className="p-2 py-4 font-bold text-3xl text-[#0081ca] border-b border-gray-300">
          Mise en oeuvre
        </h1>
        <div className="grid grid-cols-2 items-center gap-y-3 gap-x-1 p-2">
          <h2 className="font-semibold">Dilution</h2>
          <p>{dilution}</p>

          <h2 className="font-semibold">Supports</h2>
          <p>{supports.join(", ")}</p>

          <h2 className="font-semibold">Materiel d'Application</h2>
          <p>{materielApplication?.join(", ")}</p>

          <h2 className="font-semibold">Nettoyage du Materiel</h2>
          <p>{nettoyageMateriel}</p>

          <h2 className="font-semibold">Preparation du Support</h2>
          <p>{preparationSupport}</p>
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
