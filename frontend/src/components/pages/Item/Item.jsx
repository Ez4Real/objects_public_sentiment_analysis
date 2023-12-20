import React from 'react';
import HotelInfo from '../../ui/HotelInfo/HotelInfo';
import PublicSentiment from '../../ui/PublicSentiment/PublicSentiment';
import BarChart from '../../diagrams/BarChart/BarChart';
import { Wrapper } from "@googlemaps/react-wrapper";
import GoogleMapComp from '../../maps/GoogleMapComp';
import Marker from '../../maps/Marker';
import './Item.css';


import happyMood from '../../../assets/icons/Emotions/happyMood.png';


const Item = () => {
    const coords = { lat: 48.8743481, lng: 2.2897334 };

    return (
        <div className="page-container">
            <div className="left-section">
                <HotelInfo
                      name={'Hotel Arena'}
                      address={'s Gravesandestraat 55 Oost 1092 AA Amsterdam Netherlands'}
                      rating={3}
                ></HotelInfo>
            </div>
            <div className="center-section">
                <PublicSentiment
                  moodIcon={happyMood}
                  moodRating={'Позитивна'}
                  summary={'Загалом у цього готеля чудова оцінка суспільства. Ми з радістю можемо рекомендувати його Вам!'}
                >
                </PublicSentiment>
                <div className='analyze-container'>
                    <BarChart></BarChart>
                </div>
            </div>
            <div className="right-section">
                <Wrapper apiKey="AIzaSyAdgBbzi07nkFlUEeAcllkRFJ3T2TT__xg">
                    <GoogleMapComp center={coords}>
                        <Marker position={coords} />
                    </GoogleMapComp>
                </Wrapper>
            </div>
        </div>
    );
};

export default Item;