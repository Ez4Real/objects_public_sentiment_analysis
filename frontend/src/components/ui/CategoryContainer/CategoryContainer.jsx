import React from 'react';
import './CategoryContainer.css';
import CategoryCard from '../CategoryCard/CategoryCard';
import hotelImage from '../../../assets/icons/hotelImage.png';
import productImage from '../../../assets/icons/productImage.png';
import brandImage from '../../../assets/icons/brandImage.png';
import personImage from '../../../assets/icons/personImage.png';


const CategoryContainer = () => {
  return (
    <div className="category-container">
      <div className="pair-category-cont">
        <CategoryCard 
          icon={hotelImage}
          title={"Готелі"}
          available={true}
          backgroundStyle={
            {background: 'linear-gradient(to bottom right, #FFAB73, #FFAEC0)'}
          }
          to={'/category/hotels'}
        >
        </CategoryCard>
        <CategoryCard
          icon={brandImage}
          title={"Бренди"}
          available={true}
          backgroundStyle={
            {background: 'linear-gradient(to top right, #F0FF42, #3DB2FF)'}
          }
          to={'/category/brands'}
        >
        </CategoryCard>
      </div>
      <div className="pair-category-cont">
        <CategoryCard
          icon={productImage}
          title={"Продукти"}
          available={true}
          backgroundStyle={
            {background: 'linear-gradient(to bottom left, #28FFBF, #F7E6AD)'}
          }
          to={'/category/products'}
        >
        </CategoryCard>
        <CategoryCard
          icon={personImage}
          title={"Особистості"}
          available={true}
          backgroundStyle={
            {background: 'linear-gradient(to top left, #C67ACE, #FF9A8C)'}
          }
          to={'/category/persons'} 
        >
        </CategoryCard>
      </div>
        
        
    </div>
  );
};

export default CategoryContainer;