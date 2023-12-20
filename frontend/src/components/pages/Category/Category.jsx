import React from 'react'; 
import CategoryListElement from '../../ui/CategoryListElement/CategoryListElement';
import './Category.css'

const Category = () => {

  return (
    <> 
      <div className="content">
        <h1 className='category-name'>Готелі</h1>
        <div className='category-content'>
            <div className='poplist-container'>
                <p className='category-popular'>Вам можуть сподобатися:</p>
                <div>
                    <CategoryListElement
                      name={'Hotel Arena'}
                      address={'s Gravesandestraat 55 Oost 1092 AA Amsterdam Netherlands'}
                      rating={3}
                    ></CategoryListElement>
                    <CategoryListElement
                      name={'Hotel George'}
                      address={'Templeton Place Earl s Court Kensington and Chelsea London SW5 9NB United Kingdom'}
                      rating={3}
                    >
                    </CategoryListElement>
                    <CategoryListElement
                      name={'Apex Temple Court Hotel'}
                      address={'Serjeant s Inn Fleet Street City of London London EC4Y 1LL United Kingdom'}
                      rating={3}
                    >
                    </CategoryListElement>
                    <CategoryListElement
                      name={'The Park Grand London Paddington'}
                      address={'Queens Garden Westminster Borough London W2 3BA United Kingdom'}
                      rating={3}
                    >
                    </CategoryListElement>
                    <CategoryListElement
                      name={'Monhotel Lounge SPA'}
                      address={'Rue d Argentine 16th arr 75116 Paris France'}
                      rating={3}
                    >
                    </CategoryListElement>
                </div>
            </div>
            <div className='input-container'>
                <form method='POST' className='search-form'>
                    <i className='fas fa-search'></i>
                    <input className='search-input' type="text" placeholder="Що Ви шукаєте?" 
                    />
                    <button className='search-button' type='submit'>Пошук</button>
                </form>
            </div>
        </div>
      </div>
    </>
  );
};

export default Category;