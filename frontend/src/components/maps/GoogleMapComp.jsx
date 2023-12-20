import React, { useEffect, useState } from "react";

const GoogleMapComp = ({ center, children }) => {
  const zoom = 18
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (!map) {
      setMap(new window.google.maps.Map(document.getElementById("map"), {
        center,
        zoom,
      }));
    }
  }, [map, center]);

  return (
    <>
      <div id="map" style={{ width: "100%", height: "100%" }} />
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { map });
        }
      })}
    </>
  );
};

export default GoogleMapComp;
