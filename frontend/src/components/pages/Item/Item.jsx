import React from 'react';
import { Wrapper } from "@googlemaps/react-wrapper";
import GoogleMapComp from '../../maps/GoogleMapComp';
import Marker from '../../maps/Marker';
import './Item.css';

const Item = () => {
    const coords = { lat: 48.8743481, lng: 2.2897334 };

    return (
        <div className="page-container">
            <div className="left-section">
            </div>
            <div className="center-section">
            </div>
            <div className="right-section">
                <Wrapper apiKey="">
                    <GoogleMapComp center={coords}>
                        <Marker position={coords} />
                    </GoogleMapComp>
                </Wrapper>
            </div>
        </div>
    );
};

export default Item;