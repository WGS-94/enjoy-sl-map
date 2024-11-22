import { useRef, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import osm from "./components/osm-providers.js";
// import "leaflet/dist/leaflet.css";
import "./App.css";

function App() {
  // -29.735549321048158, -51.16167775071418

  const mapRef = useRef();

  const [center, setCenter] = useState({ lat:-29.73555, lng: -51.16168});
  const ZOOM_LEVEL = 9;

  return (
    <>
      <div className="map-container">
        <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef} style={{ height: "100vh" }}>
          <TileLayer
            url={osm.maptiler.url}
            attribution={osm.maptiler.atribuition}
          ></TileLayer>
        </MapContainer>
      </div>
    </>
  );
}

export default App;
