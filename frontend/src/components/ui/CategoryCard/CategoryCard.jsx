import React from 'react';
import { NavLink } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';
import './CategoryCard.css'; 

const CategoryCard = ({ icon, title, available, backgroundStyle, to }) => {
  return (
    <Tilt tiltReverse={true}>
      <NavLink to={to}>
        <div className="square-card" style={backgroundStyle}>
            <h2 className="square-card-title">{title}</h2>
            <img className="card-icon" src={icon} alt={title}></img>
        </div>
      </NavLink>
    </Tilt>
  );
};

export default CategoryCard;