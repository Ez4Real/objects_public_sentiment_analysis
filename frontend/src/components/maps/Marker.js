import React, { useEffect, useState } from "react";

const Marker = ({ position, map }) => {
  const [marker, setMarker] = useState(null);

  useEffect(() => {
    if (!marker && map) {
      setMarker(new window.google.maps.Marker({ position, map }));
    }
  }, [marker, position, map]);

  return null;
};

export default Marker;
