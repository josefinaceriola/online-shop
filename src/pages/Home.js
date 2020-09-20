import React from 'react';
import ShopCard from '../components/ShopCard';
import ShopData from '../db';

const Home = () => {
  return (
    <div tyle={{ height: '100vh' }}>
      <div className='container'>
        <div className='row d-flex justify-content-center align-items-center'>
          {ShopData.map((shop) => {
            return (
              <ShopCard
                title={shop.title}
                picture={shop.picture}
                link={shop.shop_link}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Home;
