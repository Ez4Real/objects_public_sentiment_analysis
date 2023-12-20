import React from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

export const GoogleMapsWrapper = ({ children }) => {
  const apiKey = "yourApiKey";

  if (!apiKey) {
    return <div>Cannot display the map: google maps api key missing</div>;
  }

  return (
    <Wrapper apiKey={"AIzaSyAdgBbzi07nkFlUEeAcllkRFJ3T2TT__xg"}>
        {children}
    </Wrapper>
  )
};