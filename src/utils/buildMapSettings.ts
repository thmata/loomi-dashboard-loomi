import mapboxgl from "mapbox-gl";
import geoJson from "@/mock/points.json";
import getPreviousMonthName from "./previusMonth";

export default function buildMapSettings(mapInstance: mapboxgl.Map) {
  const locations = geoJson.features as any[];

  locations.forEach((location, i) => {
    const json = {
      type: "geojson",
      data: location,
    } as mapboxgl.AnySourceData;

    const source = mapInstance.getSource(`point-${i}`)

    if (!source) mapInstance.addSource(`point-${i}`, json);

    mapInstance.addLayer({
      id: "point-layer-" + i,
      type: "fill",
      source: `point-${i}`,
      layout: {},
      paint: {
        "fill-color": "#795695",
        "fill-opacity": 0.5,
      },
    });

    mapInstance.addLayer({
      id: "pint-out-layer-" + i,
      type: "line",
      source: `point-${i}`,
      layout: {},
      paint: {
        "line-color": "#371f76",
        "line-width": 3,
      },
    });

    mapInstance?.on("click", `point-layer-${i}`, async (e) => {
      const data = await fetch(
        "https://628bf017667aea3a3e387e51.mockapi.io/orders-month"
      ).then((response) => response.json());

      new mapboxgl.Popup({
        closeButton: false,
      })
        .setLngLat(e.lngLat)
        .setHTML(
          `
              <h3>Pedidos realizados no mês</h3>
              <p class="green bg-rounded">+ ${data?.growth || 0} %</p>
              <p class="green">em relação ao mês ${getPreviousMonthName()}</p>
              <p><strong>${data?.value || 0}</strong> pedidos</p>
            `
        )
        .addTo(mapInstance);
    });

    mapInstance.on("mouseenter", "states-layer", () => {
      mapInstance.getCanvas().style.cursor = "pointer";
    });

    mapInstance.on("mouseleave", "states-layer", () => {
      mapInstance.getCanvas().style.cursor = "";
    });
  });
}
