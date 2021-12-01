import { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoicHJhdGhtZXNoc2hpbmRlIiwiYSI6ImNrdzY3bTNoMDA3ZnEyb3Bhd3J0enJtMWQifQ.WjeAIAzQy5TftknUrWbcfQ";

const Map = (props) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map", // container ID
      style: "mapbox://styles/mapbox/streets-v11", // style URL
      center: [76.3571538571062, 19.75554191457], // starting position [lng, lat]
      zoom: 3, // starting zoom
    });

    props.pickupCoordinates ? addToMap(map, props.pickupCoordinates) : {};
    props.dropoffCoordinates ? addToMap(map, props.dropoffCoordinates) : {};

    if (props.pickupCoordinates && props.dropoffCoordinates) {
      map.fitBounds([props.dropoffCoordinates, props.pickupCoordinates], {
        padding: 60,
      });
    }
  }, [props.pickupCoordinates, props.dropoffCoordinates]);

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  };

  // Coordinates of Mumbai :-72.83333, 18.96667

  return <Wrapper id="map"></Wrapper>;
};

export default Map;

const Wrapper = tw.div`
flex-1 h-1/2 
`;

const ButtonBackContainer = tw.div`
px-4 bg-transparent 
`;

const BackButtonConfirm = tw.img`
h-12 w-12 bg-red-500 rounded-full
`;
