"use client";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl"
import { useEffect, useRef, useState } from "react";
import MapControls from "./controls";
import "./popup.css";
import buildMapSettings from "@/utils/buildMapSettings";

mapboxgl.accessToken =
  "pk.eyJ1IjoidGhmbWF0YSIsImEiOiJjbHdwcnhicTkyc21oMnFwcHgzejUxa21uIn0.hiI77ntydQ_JopY95-7VhQ";

export default function Map() {
  const mapContainerRef = useRef(null);

  const [map, setMap] = useState<mapboxgl.Map | null>(null);
  const [rendered, setRendered] = useState(false);

  const defaultZoom = 3;
  const defaultLayout = "light-v11";

  useEffect(() => {
    const mapInstance = new mapboxgl.Map({
      container: mapContainerRef.current as any,
      style: `mapbox://styles/mapbox/${defaultLayout}`,
      center: { lng: -51.7754685812489, lat: -9.824825083247916 },
      zoom: defaultZoom,
      dragRotate: false,
      attributionControl: false,
      projection: {
        name: "mercator",
      },
    });

    mapInstance.on("load", () => {
      mapInstance.resize();
      setRendered(true);

      buildMapSettings(mapInstance);
    });

    setMap(mapInstance);

    return () => mapInstance.remove();
  }, []);

  map?.on('style.load', () => {
    buildMapSettings(map)
  });

  return (
    <div className="relative w-full h-[800px] rounded-[8px]">
      <div
        className="z-0 absolute w-full h-[800px] top-0 bottom-0 right-0 left-0 rounded-[8px]"
        ref={mapContainerRef}
      />
      {rendered && map && (
        <MapControls
          mapInstance={map}
          defaultLayout={defaultLayout}
          defaultZoom={defaultZoom}
        />
      )}
    </div>
  );
}

