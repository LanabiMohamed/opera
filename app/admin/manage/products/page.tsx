"use client";
import ImagePost from "@components/ImagePost";
import Select from "@components/Select";
import { notify } from "@components/Sonner";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { IoTrashBinSharp } from "react-icons/io5";
import ClipLoader from "react-spinners/ClipLoader";

interface Product {
  imageUrl: { image: string; id: string };
  title: string;
  definition: string;
  type: string;
  destination: string[];
  properties: string[];
  variances: { id: string; quantity: string; price: number }[];
}

function Page() {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState<Product>({
    imageUrl: { image: "", id: "" },
    title: "",
    type: "",
    definition: "",
    destination: [],
    properties: [],
    variances: [],
  });

  const [variances, setVariances] = useState({
    quantity: 0,
    price: 0,
    unit: "L",
  });

  const HandlePost = async () => {
    if (loading) return;
    if (
      !input.imageUrl.id ||
      !input.title ||
      !input.definition ||
      !input.destination.length ||
      !input.properties.length ||
      !input.variances.length
    )
      return notify({ type: "warning", message: "Fill all the fields" });
    setLoading(true);

    const res = await fetch("/api/product", {
      method: "POST",
      headers: {
        "Content-Type": "Application/Json",
      },
      body: JSON.stringify({ ...input, imageUrl: input.imageUrl.id }),
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
          setInput((prev) => ({ ...prev, title: e.target.value }))
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
            ...prev,
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
            label: "Insulation and Protective Products",
            key: "Insulation and Protective Products",
          },
          { label: "Steel Products", key: "Steel Products" },
          { label: "Wood Products", key: "Wood Products" },
          { label: "Floor Coatings", key: "Floor Coatings" },
        ]}
        onChangeHere={(item) =>
          setInput((prev) => ({
            ...prev,
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
            ...prev,
            destination: prev.destination.includes(item)
              ? prev.destination.filter((sub) => sub !== item)
              : [...prev.destination, item],
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
            ...prev,
            properties: prev.properties.includes(item)
              ? prev.properties.filter((sub) => sub !== item)
              : [...prev.properties, item],
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
                    sub.id ===
                    `${variances.quantity}|${variances.unit}|${variances.price}`
                )
              )
                return notify({
                  type: "warning",
                  message: "This variance already exists",
                });
              setInput((prev) => ({
                ...prev,
                variances: [
                  ...prev.variances,
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
                  ...prev,
                  variances: prev.variances.filter(
                    (subsub) => subsub.id !== sub.id
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
          setInput((prev) => ({ ...prev, imageUrl: { image, id } }));
        }}
      />

      <button
        onClick={HandlePost}
        className="bg-gray-600 text-white p-2 rounded-md w-full mt-4 hover:bg-gray-500 duration-150 flex items-center gap-2 justify-center"
        disabled={loading}
      >
        Post
        {loading && <ClipLoader color="white" size={20} />}
      </button>
    </div>
  );
}

export default Page;
