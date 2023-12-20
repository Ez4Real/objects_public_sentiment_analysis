import React from 'react';

import hotelInfo from '../../../assets/icons/Hotel/hotelInfo.png';
import './HotelInfo.css'


const HotelInfo = ({ name, address, rating }) => {
    const addressArray = address.split(' ');
    const cityCountry = addressArray.slice(-2).join(' ');
    const truncatedAddress = addressArray.slice(0, -2).join(' ');

    return (
        <div className="hotel-info">
            <img className="hotel-info-icon" src={hotelInfo} alt={name} />
            <h1 className='hotel-info-name'>{name}</h1>
            <div className="list-el-rating">
              {Array.from({ length: rating }, (_, index) => (
                <span key={index} role="img" aria-label="star">
                  ⭐
                </span>
              ))}
            </div>
            <p className='hotel-info-place'>{cityCountry}</p>
            <p className='hotel-info-adress'>Адреса: {truncatedAddress}</p>
        </div>
    );
};

export default HotelInfo;