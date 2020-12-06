import React from "react";

import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import { Link } from "react-router-dom";

import Leaflet from "leaflet";

import mapMarker from "../images/map-marker.svg";
import { FiPlus, FiArrowRight } from "react-icons/fi";

import "../styles/pages/orphanages-map.css";
import "leaflet/dist/leaflet.css";

const mapIcon = Leaflet.icon({
    iconUrl: mapMarker,
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
});

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarker} alt="Happy" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :) </p>
        </header>
        <footer>
          <strong>Ivoti</strong>
          <span>Rio Grande do Sul</span>
        </footer>
      </aside>
      <Map
        center={[-29.5919468, -51.1480857]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker
            position={[-29.5919468, -51.1480857]}
            icon={mapIcon}
        >
          <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup" >
              Lar das meninas
              <Link to="orphanages/1">
              <FiArrowRight size={20} color="#fff" />
              </Link>
          </Popup>
        </Marker>
      </Map>
      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
