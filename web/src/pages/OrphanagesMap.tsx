import React from "react";

import { Map, TileLayer } from "react-leaflet";

import { Link } from "react-router-dom";

import mapMarker from "../images/map-marker.svg";
import { FiPlus } from "react-icons/fi";

import "../styles/pages/orphanages-map.css";
import "leaflet/dist/leaflet.css";

function OrphanagesMap() {
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarker} alt="Happy"/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :) </p>
                </header>
                <footer>
                    <strong>Ivoti</strong>
                    <span>Rio Grande do Sul</span>
                </footer>
            </aside>

            <Map 
                center={[-29.5919468,-51.1480857]} 
                zoom={15}
                style={{width: "100%", height: "100%"}}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </Map>
            <Link to="" className="create-orphanage">
               <FiPlus size={32} color="#fff" />
            </Link>
        </div>

    );
}

export default OrphanagesMap;