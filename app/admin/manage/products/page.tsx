"use client";
import ImagePost from "@components/ImagePost";
import Loader from "@components/Loader";
import Select from "@components/Select";
import { notify } from "@components/Sonner";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { IoTrashBinSharp } from "react-icons/io5";
import ClipLoader from "react-spinners/ClipLoader";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

interface Product {
  imageUrl: { image: string; id: string };
  title: string;
  definition: string;
  type: string;
  destination: string[];
  properties: string[];
  variances: { quantity: string; price: number }[];
  densite: string;
  rendement: string;
  tempsSachage: string;
  aspectdifilmsec: string[];
  teinte: string;
  viscosite: string;
  dilution: string;
  supports: string[];
  materielApplication: string[];
  nettoyageMateriel: string;
  preparationSupport: string;
}

function Page() {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const id = params.get("id");
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState<Product | undefined>(
    id
      ? undefined
      : {
          imageUrl: { image: "", id: "" },
          title: "",
          type: "",
          definition: "",
          destination: [],
          properties: [],
          variances: [],
          densite: "",
          rendement: "",
          tempsSachage: "",
          aspectdifilmsec: [],
          teinte: "",
          viscosite: "",
          dilution: "",
          supports: [],
          materielApplication: [],
          nettoyageMateriel: "",
          preparationSupport: "",
        }
  );
  const [Toggles, setToggles] = useState({
    ficheT: true,
    miseOeuvre: true,
  });
  useEffect(() => {
    if (!id) return;
    const HandleFetchProduct = async () => {
      const res = await fetch(`/api/products/${id}`, {
        cache: "no-cache",
      });
      if (!res.ok) {
        notify({ type: "error", message: "Failed to fetch the product" });
        return;
      }
      const product = await res.json();
      setInput({
        densite: "",
        rendement: "",
        tempsSachage: "",
        aspectdifilmsec: [],
        teinte: "",
        viscosite: "",
        dilution: "",
        supports: [],
        materielApplication: [],
        nettoyageMateriel: "",
        preparationSupport: "",
        ...product,
      });
      setDensite(
        product.densite
          ? {
              from: Number(product.densite.split(" ")[0]),
              to: Number(product.densite.split(" ")[2]),
              unit: product.densite.split(" ")[1],
            }
          : { from: 0, to: 0, unit: "-/+" }
      );
      const response = await fetch(`/api/image/${product.imageUrl}`);
      const { image } = await response.json();
      setInput((prev) => ({
        ...prev!,
        imageUrl: { image, id: product.imageUrl },
      }));
    };
    HandleFetchProduct();
  }, [id]);

  const [variances, setVariances] = useState({
    quantity: 0,
    price: 0,
    unit: "L",
  });
  const [densite, setDensite] = useState({
    from: 0,
    to: 0,
    unit: "-/+",
  });

  // if (!input)
  return <Loader />;
  const HandlePost = async () => {
    if (loading) return;
    if (
      !input.imageUrl.id ||
      !input.title ||
      !input.definition ||
      !input.destination.length ||
      !input.properties.length ||
      !input.variances.length ||
      !densite.from ||
      !densite.to ||
      !densite.unit ||
      !input.rendement ||
      !input.tempsSachage ||
      !input.aspectdifilmsec.length ||
      !input.dilution ||
      !input.supports.length ||
      !input.materielApplication.length
    )
      return notify({ type: "warning", message: "Fill all the fields" });
    setLoading(true);

    const res = await fetch("/api/manage/products", {
      method: id ? "PATCH" : "POST",
      headers: {
        "Content-Type": "Application/Json",
      },
      body: JSON.stringify({
        ...input,
        imageUrl: input.imageUrl.id,
        densite: `${densite.from} ${densite.unit} ${densite.to}`,
      }),
    });
    if (res.ok) {
      notify({ type: "success", message: "Product posted successfully" });
      setInput({
        imageUrl: { image: "", id: "" },
        title: "",
        type: "",
        definition: "",
        destination: [],
        properties: [],
        variances: [],
        densite: "",
        rendement: "",
        tempsSachage: "",
        aspectdifilmsec: [],
        teinte: "",
        viscosite: "",
        dilution: "",
        supports: [],
        materielApplication: [],
        nettoyageMateriel: "",
        preparationSupport: "",
      });
    } else {
      notify({ type: "error", message: "Error posting the product" });
    }
    setLoading(false);
  };

  return (
    <div className="p-2">
      <h3 className="text-xl text-center font-semibold mt-10 mb-4">Title</h3>
      <input
        value={input.title}
        onChange={(e) =>
          setInput((prev) => ({ ...prev!, title: e.target.value }))
        }
        className={`border border-gray-500 focus:outline-none w-full p-2 rounded-md ${
          false ? "rtl text-right" : ""
        }`}
        placeholder="Title..."
      />
      <h3 className="text-xl text-center font-semibold mt-20 mb-4">
        Definition
      </h3>
      <textarea
        value={input.definition}
        onChange={(e) =>
          setInput((prev) => ({
            ...prev!,
            definition: e.target.value,
          }))
        }
        className={`border border-gray-500 focus:outline-none w-full p-2 rounded-md h-36 ${
          false ? "rtl text-right" : ""
        }`}
        placeholder="Definition..."
      />

      <h3 className="text-xl text-center font-semibold mt-20 mb-4">Type</h3>
      <Select
        borderColor="border-green-600"
        selectedBorderColor="border-gray-500"
        labelslist={[
          { label: "Interior Walls Paints", key: "Interior Walls Paints" },
          { label: "Exterior Walls Paints", key: "Exterior Walls Paints" },
          {
            label: "Protective Products",
            key: "Protective Products",
          },
          { label: "Steel Products", key: "Steel Products" },
          { label: "Wood Products", key: "Wood Products" },
        ]}
        onChangeHere={(item) =>
          setInput((prev) => ({
            ...prev!,
            type: item,
          }))
        }
        value={input.type}
      />

      <h3 className="text-xl text-center font-semibold mt-20 mb-4">
        Destination
      </h3>
      <Select
        borderColor="border-green-600"
        selectedBorderColor="border-gray-500"
        labelslist={[
          { label: "Habitations", key: "Habitations" },
          { label: "Bureaux", key: "Bureaux" },
          { label: "Hotel", key: "Hotel" },
          { label: "Restaurants", key: "Restaurants" },
          { label: "Showroom", key: "Showroom" },
          { label: "Magasins", key: "Magasins" },
        ]}
        onChangeHere={(item) =>
          setInput((prev) => ({
            ...prev!,
            destination: prev!.destination.includes(item)
              ? prev!.destination.filter((sub) => sub !== item)
              : [...prev!.destination, item],
          }))
        }
        value={input.destination}
        multi
      />
      <h3 className="text-xl text-center font-semibold mt-20 mb-4">
        Properties
      </h3>
      <Select
        borderColor="border-green-600"
        selectedBorderColor="border-gray-500"
        labelslist={[
          { label: "Tres haute resistance", key: "Tres haute resistance" },
          { label: "Extra brilliant", key: "Extra brilliant" },
          {
            label: "Effects decoratifs metallise",
            key: "Effects decoratifs metallise",
          },
          { label: "Durable", key: "Hotel" },
          { label: "Tres bonne tenue", key: "Tres bonne tenue" },
          { label: "Tres faible odeur", key: "Tres faible odeur" },
          { label: "Seche rapidement", key: "Seche rapidement" },
          { label: "Ne jaunissant", key: "Ne jaunissant" },
          {
            label: "Excellente adherence surface lisse",
            key: "Excellente adherence surface lisse",
          },
          { label: "Facile a applique", key: "Facile a applique" },
          { label: "Tres opacifiante", key: "Tres opacifiante" },
        ]}
        onChangeHere={(item) =>
          setInput((prev) => ({
            ...prev!,
            properties: prev!.properties.includes(item)
              ? prev!.properties.filter((sub) => sub !== item)
              : [...prev!.properties, item],
          }))
        }
        value={input.properties}
        multi
      />

      <h3 className="text-xl text-center font-semibold mt-20 mb-4">
        {"Add the product's prices"}
      </h3>
      <div className="border border-gray-400 rounded-xl p-4 mb-20">
        <div className="flex justify-between flex-col md:flex-row gap-2 md:items-center">
          <h3 className="text-xl text-center font-semibold">Price</h3>
          <div className="border border-gray-500 rounded-md overflow-hidden flex items-center px-2">
            <input
              value={variances.price}
              onChange={(e) =>
                setVariances((prev) => ({
                  ...prev,
                  price: Number(e.target.value),
                }))
              }
              className="focus:outline-none flex-1 p-2"
              type="number"
            />
            <p>Dzd</p>
          </div>
          <h3 className="text-xl text-center font-semibold">Quantity</h3>
          <div className="border border-gray-500 rounded-md overflow-hidden flex items-center px-2">
            <input
              value={variances.quantity}
              onChange={(e) =>
                setVariances((prev) => ({
                  ...prev,
                  quantity: Number(e.target.value),
                }))
              }
              className="focus:outline-none flex-1 p-2"
              type="number"
            />
            <select
              value={variances.unit}
              onChange={(e) =>
                setVariances((prev) => ({ ...prev, unit: e.target.value }))
              }
              className="focus:outline-none p-2 bg-white"
            >
              <option value="L">L</option>
              <option value="Kg">Kg</option>
            </select>
          </div>
          <IoMdAdd
            size={25}
            className="hover:scale-125 duration-200 cursor-pointer md:mx-0 mx-auto"
            onClick={() => {
              if (variances.price === 0 || variances.quantity === 0) return;
              if (
                input.variances.find(
                  (sub) =>
                    sub.quantity ===
                      `${variances.quantity} ${variances.unit}` &&
                    sub.price === variances.price
                )
              )
                return notify({
                  type: "warning",
                  message: "This variance already exists",
                });
              setInput((prev) => ({
                ...prev!,
                variances: [
                  ...prev!.variances,
                  {
                    id: `${variances.quantity}|${variances.unit}|${variances.price}`,
                    quantity: `${variances.quantity} ${variances.unit}`,
                    price: variances.price,
                  },
                ],
              }));
              setVariances({ quantity: 0, price: 0, unit: "L" });
            }}
          />
        </div>
        <div className="flex mt-6 gap-2">
          {input.variances.map((sub, index) => (
            <div
              key={index}
              className="relative text-center border border-gray-500 p-3 rounded-md"
              onClick={() =>
                setInput((prev) => ({
                  ...prev!,
                  variances: prev!.variances.filter(
                    (subsub) =>
                      subsub.quantity !== sub.quantity ||
                      subsub.price !== sub.price
                  ),
                }))
              }
            >
              <p>{sub.quantity}</p>
              <p>{sub.price} Dzd</p>
              <IoTrashBinSharp
                size={40}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30 hover:opacity-65 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>

      <ImagePost
        title={"Show the product to the costumer"}
        clickMe={"click me"}
        image={input.imageUrl}
        HandleIsDone={(image, id) => {
          setInput((prev) => ({ ...prev!, imageUrl: { image, id } }));
        }}
      />

      <div className="flex items-end gap-2 my-10">
        <div className="flex-1 h-0.5 bg-black"></div>
        <div
          className="flex items-center gap-1 cursor-pointer"
          onClick={() =>
            setToggles((prev) => ({
              ...prev,
              ficheT: !prev.ficheT,
            }))
          }
        >
          <h2 className="text-black">Caracteristiques technique</h2>
          {Toggles.ficheT ? <FaAngleUp /> : <FaAngleDown />}
        </div>
      </div>
      {Toggles.ficheT && (
        <div>
          <div className="flex items-center justify-around">
            <b className="text-lg">Densite a 20° - 25° C</b>
            <div className="flex items-center gap-3">
              <input
                type="number"
                value={densite.from}
                onChange={(e) =>
                  setDensite((prev) => ({
                    ...prev,
                    from: Number(e.target.value),
                  }))
                }
                className="w-24 border border-black rounded-md px-2"
              />
              <select
                className="bg-white focus:outline-none p-2"
                value={densite.unit}
                onChange={(e) =>
                  setDensite((prev) => ({ ...prev, unit: e.target.value }))
                }
              >
                <option value="-/+">-/+</option>
                <option value="+/-">+/-</option>
              </select>
              <input
                type="number"
                value={densite.to}
                onChange={(e) =>
                  setDensite((prev) => ({
                    ...prev,
                    to: Number(e.target.value),
                  }))
                }
                className="w-24 border border-black rounded-md px-2"
              />
            </div>
          </div>

          <div className="flex items-center justify-around my-10">
            <b className="text-lg">Rendement</b>
            <div className="flex items-center gap-3">
              <input
                value={input.rendement}
                onChange={(e) =>
                  setInput((prev) => ({
                    ...prev!,
                    rendement: e.target.value,
                  }))
                }
                className="w-24 border border-black rounded-md px-2"
              />
              <p>{`m² / ${
                input.variances[0]?.quantity.split(" ")[1] ?? "L"
              }`}</p>
            </div>
          </div>

          <div className="flex items-center justify-around my-10">
            <b className="text-lg">Temps de sechage a 35° C</b>
            <div className="flex items-center gap-3">
              <input
                value={input.tempsSachage}
                onChange={(e) =>
                  setInput((prev) => ({
                    ...prev!,
                    tempsSachage: e.target.value,
                  }))
                }
                className="w-24 border border-black rounded-md px-2"
              />
              <p>h</p>
            </div>
          </div>

          <div className="flex items-center justify-around my-10">
            <b className="text-lg">Viscosite</b>
            <div className="flex items-center gap-3">
              <input
                value={input.viscosite}
                onChange={(e) =>
                  setInput((prev) => ({
                    ...prev!,
                    viscosite: e.target.value,
                  }))
                }
                className="w-44 border border-black rounded-md px-2"
              />
            </div>
          </div>

          <div className="my-10">
            <p className="text-lg text-center pb-4 font-semibold">
              Aspect du film sec
            </p>
            <Select
              borderColor="border-green-600"
              selectedBorderColor="border-gray-500"
              labelslist={[
                {
                  label: "Sable",
                  key: "Sable",
                },
                {
                  label: "Nacre",
                  key: "Nacre",
                },
                {
                  label: "Soyeux",
                  key: "Soyeux",
                },
                { label: "Liminescent", key: "Liminescent" },
                { label: "Mat", key: "Mat" },
                { label: "Brillant", key: "Brillant" },
                { label: "Satine", key: "Satine" },
                { label: "Metallise", key: "Metallise" },
                { label: "Lumineaux", key: "Lumineaux" },
              ]}
              onChangeHere={(item) =>
                setInput((prev) => ({
                  ...prev!,
                  aspectdifilmsec: prev!.aspectdifilmsec.includes(item)
                    ? prev!.aspectdifilmsec.filter((sub) => sub !== item)
                    : [...prev!.aspectdifilmsec, item],
                }))
              }
              value={input.aspectdifilmsec}
              multi
            />
          </div>
        </div>
      )}

      <div className="flex items-end gap-2 my-10">
        <div className="flex-1 h-0.5 bg-black"></div>
        <div
          className="flex items-center gap-1 cursor-pointer"
          onClick={() =>
            setToggles((prev) => ({
              ...prev,
              miseOeuvre: !prev.miseOeuvre,
            }))
          }
        >
          <h2 className="text-black">Mise en oeuvre</h2>
          {Toggles.miseOeuvre ? <FaAngleUp /> : <FaAngleDown />}
        </div>
      </div>
      {Toggles.miseOeuvre && (
        <div>
          <div className="my-10">
            <p className="text-lg text-center pb-4 font-semibold">
              Preparation Support
            </p>

            <Select
              borderColor="border-green-600"
              selectedBorderColor="border-gray-500"
              labelslist={[
                {
                  label:
                    "Le Support droit etre parfaitement propre, sec et sain. ",
                  key: "Le Support droit etre parfaitement propre, sec et sain. ",
                },
              ]}
              onChangeHere={(item) =>
                setInput((prev) => ({
                  ...prev!,
                  preparationSupport:
                    prev!.preparationSupport === item ? "" : item,
                }))
              }
              value={input.preparationSupport}
            />
          </div>

          <div className="flex items-center justify-around my-10">
            <p className="text-lg text-center pb-4 font-semibold">
              Nettoyage de Materiel
            </p>

            <Select
              borderColor="border-green-600"
              selectedBorderColor="border-gray-500"
              labelslist={[
                {
                  label: "Diluant",
                  key: "Diluant",
                },
                { label: "Eau", key: "Eau" },
              ]}
              onChangeHere={(item) =>
                setInput((prev) => ({
                  ...prev!,
                  nettoyageMateriel:
                    prev!.nettoyageMateriel === item ? "" : item,
                }))
              }
              value={input.nettoyageMateriel}
            />
          </div>

          <div className="my-10">
            <p className="text-lg text-center pb-4 font-semibold">
              {"Materiel d'application"}
            </p>

            <Select
              borderColor="border-green-600"
              selectedBorderColor="border-gray-500"
              labelslist={[
                {
                  label: "Rouleau",
                  key: "Rouleau",
                },
                { label: "Rouleau laquer", key: "Rouleau laquer" },
                { label: "Rouleau decorative", key: "Rouleau decorative" },
                {
                  label: "Pistolet",
                  key: "Pistolet",
                },
                { label: "Pistolet airless", key: "Pistolet airless" },
                { label: "Pinceau", key: "Pinceau" },
                { label: "Pinceau eponge", key: "Pinceau eponge" },
                { label: "Couteau", key: "Couteau" },
                { label: "Brosse", key: "Brosse" },
              ]}
              onChangeHere={(item) =>
                setInput((prev) => ({
                  ...prev!,
                  materielApplication: prev!.materielApplication.includes(item)
                    ? prev!.materielApplication.filter((sub) => sub !== item)
                    : [...prev!.materielApplication, item],
                }))
              }
              value={input.materielApplication}
              multi
            />
          </div>

          <div className="my-10">
            <p className="text-lg text-center pb-4 font-semibold">Supports</p>
            <Select
              borderColor="border-green-600"
              selectedBorderColor="border-gray-500"
              labelslist={[
                {
                  label: "Platre",
                  key: "Platre",
                },
                {
                  label: "Ciment",
                  key: "Ciment",
                },

                {
                  label: "Enduit",
                  key: "Enduit",
                },

                { label: "Metal", key: "Metal" },

                { label: "Brique", key: "Brique" },
                { label: "Pierre", key: "Pierre" },
                { label: "Sol", key: "Sol" },
                { label: "Faience", key: "Faience" },
                { label: "Carreiage", key: "Carreiage" },
                { label: "Beton", key: "Beton" },
                { label: "Bios", key: "Bios" },
              ]}
              onChangeHere={(item) =>
                setInput((prev) => ({
                  ...prev!,
                  supports: prev!.supports.includes(item)
                    ? prev!.supports.filter((sub) => sub !== item)
                    : [...prev!.supports, item],
                }))
              }
              value={input.supports}
              multi
            />
          </div>

          <div className="my-10">
            <p className="text-lg text-center pb-4 font-semibold">Dilution</p>
            <Select
              borderColor="border-green-600"
              selectedBorderColor="border-gray-500"
              labelslist={[
                {
                  label: "Diluant",
                  key: "Diluant",
                },
                {
                  label: "White spirit Diluant",
                  key: "White spirit Diluant",
                },
                {
                  label: "Eau",
                  key: "Eau",
                },
                {
                  label: "Eau, Ne pas diluer de preference",
                  key: "Eau, Ne pas diluer de preference",
                },

                { label: "Durcisseur", key: "Durcisseur" },

                { label: "Thinner", key: "Thinner" },
              ]}
              onChangeHere={(item) =>
                setInput((prev) => ({
                  ...prev!,
                  dilution: prev!.dilution === item ? "" : item,
                }))
              }
              value={input.dilution}
            />
          </div>
        </div>
      )}

      <button
        onClick={HandlePost}
        className="bg-gray-600 text-white p-2 rounded-md w-full mt-4 hover:bg-gray-500 duration-150 flex items-center gap-2 justify-center"
        disabled={loading}
      >
        {id ? "Update" : "Post"}
        {loading && <ClipLoader color="white" size={20} />}
      </button>
    </div>
  );
}
export default Page;
