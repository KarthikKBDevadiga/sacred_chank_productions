import { Wrapper } from "@googlemaps/react-wrapper";
import React, {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
} from "react";
import Constants from "../helpers/Constants";
import PlayIcon from "../icons/PlayIcon";

const Marker = (options) => {
  const [marker, setMarker] = useState();

  useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker(<PlayIcon />));
    }

    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  useEffect(() => {
    if (marker) {
      marker.setOptions(options);
      marker.setIcon("/marker.png");
    }
  }, [marker, options]);
  return null;
};

const GoogleMap = ({ center, zoom, children }) => {
  const ref = useRef();
  const [map, setMap] = useState();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(
        new window.google.maps.Map(ref.current, {
          center,
          zoom,
          styles: Constants.GOOGLE_MAP_STYLE,
          mapTypeControl: false,
          streetViewControl: false,
          panControl: false,
          zoomControl: false,
          scrollwheel: false,
          navigationControl: false,
          mapTypeControl: false,
          scaleControl: false,
          draggable: false,
          disableDefaultUI: true,
        })
      );
    }
  });

  return (
    <>
      <div ref={ref} id="map" className="w-full h-64" />
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          // set the map prop on the child component
          return cloneElement(child, { map });
        }
      })}
    </>
  );
};

const Map = () => {
  const center = { lat: -34.397, lng: 150.644 };
  const zoom = 11;
  return (
    <Wrapper apiKey={process.env.GOOGLE_MAPS_API_KEY}>
      <GoogleMap center={center} zoom={zoom}>
        <Marker position={center} />
      </GoogleMap>
    </Wrapper>
  );
};
export default Map;
