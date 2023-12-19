import React from 'react';
import './CategoryCard.css'; 

const CategoryCard = ({ icon, title, available }) => {
  return (
    <div className="square-card">
        <h2 className="square-card-title"></h2>
        <img className="card-icon" src={icon} alt={title}></img>
    </div>
  );
};

export default CategoryCard;