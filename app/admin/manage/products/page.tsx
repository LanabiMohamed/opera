"use client";
import Image from "@components/Image";
import ListManager from "@components/ListManager";
import Select from "@components/Select";
import { useState } from "react";

interface Product {
  imageUrl: { image: string; id: string };
  title: string;
  definition: string;
  type: string;
  destination: string[];
  properties: string[];
}

function page() {
  const [input, setInput] = useState<Product>({
    imageUrl: { image: "", id: "" },
    title: "",
    type: "",
    definition: "",
    destination: [],
    properties: [],
  });
  return (
    <div>
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

      <h3 className="text-xl text-center font-semibold mt-10 mb-4">
        description
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

      <h3 className="text-xl text-center font-semibold mt-10 mb-4">
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

      <h3 className="text-xl text-center font-semibold mt-10 mb-4">
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

      <Image
        title={"Show the costumer the product"}
        clickMe={"click me"}
        image={input.imageUrl}
        HandleIsDone={(image, id) => {
          setInput((prev) => ({ ...prev!, imageUrl: { image, id } }));
        }}
      />
    </div>
  );
}

export default page;
