"use client";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";
import locations from "@data/loactions.json";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import { FaMapLocationDot, FaPhone } from "react-icons/fa6";

function Maps({ ApiKey, MapId }: { ApiKey: string; MapId: string }) {
  const [selected, setSelected] = useState("0");
  const handleChange = (event: SelectChangeEvent) => {
    setSelected(event.target.value);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">Our Locations</h1>
      <p className="text-gray-500 font-semibold my-2">
        Discover our stores and service centers near you, offering a wide range
        of quality wall painting products to meet your every need.
      </p>
      <APIProvider apiKey={ApiKey}>
        <div className="w-full h-96 mx-auto rounded-lg overflow-hidden">
          <Map
            defaultZoom={6}
            defaultCenter={{ lat: 34.3, lng: 3 }}
            mapId={MapId}
          >
            {locations.map((location) => (
              <AdvancedMarker key={location.city} position={location}>
                <Pin />
              </AdvancedMarker>
            ))}
          </Map>
        </div>
      </APIProvider>

      <section className="flex flex-col gap-6 md:gap-2 md:flex-row mt-8">
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">Contact us</h1>
          <div className="flex items-center  gap-6 p-4 font-semibold">
            <h3 className="text-lg">Select the closest city</h3>
            <Select label="Location" value={selected} onChange={handleChange}>
              {locations.map((location, index) => (
                <MenuItem key={`${index}l`} value={index.toString()}>
                  {location.city}
                </MenuItem>
              ))}
            </Select>
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">Contact Information</h1>
          <div className="flex gap-4 flex-wrap p-4">
            {locations[parseInt(selected)].phones.map((phone) => (
              <div key={phone} className="flex items-center gap-2">
                <FaPhone size={25} />
                <p>{phone}</p>
              </div>
            ))}
          </div>
          <a
            target="blank"
            className="flex items-center gap-2 px-4 py-2"
            href={`https://www.google.com/maps?q=${
              locations[parseInt(selected)].lat
            },${locations[parseInt(selected)].lng}`}
          >
            <FaMapLocationDot size={25} />
            <p className="underline">
              {locations[parseInt(selected)].city} Agence
            </p>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Maps;
