"use client";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";
import locations from "@data/loactions.json";

function Maps({ ApiKey, MapId }: { ApiKey: string; MapId: string }) {
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
    </div>
  );
}

export default Maps;
