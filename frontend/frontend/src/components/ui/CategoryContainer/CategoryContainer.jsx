import React from 'react';
import './CategoryContainer.css';
import CategoryCard from '../CategoryCard/CategoryCard';
import hotelImage from '../../../assets/images/hotelImage.png';

const CategoryContainer = () => {
  return (
    <div className="category-container">
      <div className="pair-category-cont">
        <CategoryCard icon={hotelImage} title={"Готелі"}></CategoryCard>
        <CategoryCard></CategoryCard>
      </div>
      <div className="pair-category-cont">
        <CategoryCard></CategoryCard>
        <CategoryCard></CategoryCard>
      </div>
        
        
    </div>
  );
};

export default CategoryContainer;