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
      setMarker(new google.maps.Marker());
      // setTimeout(() => {
      //   marker.setAnimation({ animation: google.maps.Animation.BOUNCE });
      // }, 500);
    }

    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  useEffect(() => {
    if (marker) {
      setTimeout(() => {
        marker.setOptions(options);
        marker.setIcon({
          url: "/marker.png",
          labelOrigin: new google.maps.Point(16, 56),
          // size: new google.maps.Size(32, 32),
          // anchor: new google.maps.Point(16, 32),
        });
        marker.setAnimation(google.maps.Animation.DROP);
        marker.setLabel({
          text: "Sacred Chank Productions",
          color: "#FFFFFF",
          fontWeight: "bold",
        });
      }, 1000);
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
      map?.event.addListenerOnce(map, "idle", function () {
        console.log("Here");
      });
    }
  });

  return (
    <>
      <div ref={ref} id="map" className="w-full h-96" />
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
  const center = { lat: 52.3559766, lng: -7.7276328 };
  const zoom = 16;
  return (
    <Wrapper apiKey={process.env.GOOGLE_MAPS_API_KEY}>
      <GoogleMap center={center} zoom={zoom}>
        <Marker position={center} />
      </GoogleMap>
    </Wrapper>
  );
};
export default Map;
