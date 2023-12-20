import { NavLink } from 'react-router-dom';
import listHotelIcon from '../../../assets/icons/Hotel/listHotelIcon.png';
import './CategoryListElement.css'

const CategoryListElement = ({ name, address, rating }) => {
    const addressArray = address.split(' ');
    const cityCountry = addressArray.slice(-2).join(' ');
    const truncatedAddress = addressArray.slice(0, -2).join(' ');
  
    return (
      <NavLink to={`/hotels/${name}`}>
        <div className="list-el-container">
          <img src={listHotelIcon} alt="Hotel Icon" className="list-el-icon" />
          <div className="list-el-info">
            <h3 className="list-el-name">{name}</h3>
            <p className="list-el-sf">{truncatedAddress}</p>
            <p className="list-el-adress">{cityCountry}</p>
            <div className="list-el-rating">
              {Array.from({ length: rating }, (_, index) => (
                <span key={index} role="img" aria-label="star">
                  ⭐
                </span>
              ))}
            </div>
          </div>
        </div>
      </NavLink>
    );
  };

  export default CategoryListElement;