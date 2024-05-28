import Image from "next/image";
import { useState } from "react";
import buildMapSettings from "@/utils/buildMapSettings";

export default function MapControls({
  mapInstance,
  defaultZoom,
  defaultLayout,
}: {
  mapInstance: mapboxgl.Map;
  defaultZoom: number;
  defaultLayout: "light-v11" | "satellite-streets-v12";
}) {
  const [currentZoom, setCurrentZoom] = useState(defaultZoom);
  const [currentStyle, setCurrentStyle] = useState(defaultLayout);

  const handleStyleChange = () => {
    if (!mapInstance) return;

    if (currentStyle === "light-v11") {
      setCurrentStyle("satellite-streets-v12");
      mapInstance.setStyle("mapbox://styles/mapbox/satellite-streets-v12");
    } else {
      setCurrentStyle("light-v11");
      mapInstance.setStyle("mapbox://styles/mapbox/light-v11");
    }
  };

  const handleZoomChange = (type: "in" | "out") => {
    if (!mapInstance) return;

    if (type === "in") {
      const newZoom = currentZoom + 1;
      setCurrentZoom(newZoom);
      mapInstance.setZoom(newZoom);
    } else {
      const newZoom = currentZoom === 0 ? 0 : currentZoom - 1;
      setCurrentZoom(newZoom);
      mapInstance.setZoom(newZoom);
    }

  };

  return (
    <div className="absolute z-50 bottom-3 right-3 flex flex-col gap-10">
      <div className="flex flex-col items-end gap-2">
        <button
          className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-secondary font-light text-2xl p-0 shadow-md"
          onClick={() => handleZoomChange("in")}
        >
          +
        </button>
        <button
          className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-secondary font-bold text-lg shadow-md"
          onClick={() => handleZoomChange("out")}
        >
          –
        </button>
      </div>
      <button
        className="bg-white w-[100px] h-[100px] flex justify-center items-center rounded-md shadow-md"
        onClick={handleStyleChange}
      >
        <Image
          src={currentStyle === "light-v11" ? "/assets/satelite.png" : "/assets/default.png"}
          alt="select-map-type"
          className="w-[100px] h-[100px] rounded-md"
          width={100}
          height={100}
        />
      </button>
    </div>
  );
}
