import React, { useState, useEffect } from 'react';
import ShopCard from '../components/ShopCard';
import ShopData from '../db';
import Appbar from '../components/Appbar';
import { TextField } from '@material-ui/core';
const Home = () => {
  const [searchMenu, setSearchMenu] = useState('');
  const [search, setSearch] = useState(false);
  useEffect(() => {
    console.log(searchMenu);
    if (searchMenu.length > 0) {
      setSearch(true);
    } else {
      setSearch(false);
    }
  }, [searchMenu]);
  function defineSearch(e) {
    setSearchMenu(e.target.value);
  }
  return (
    <div style={{ height: '100vh' }}>
      <Appbar />
      <div className='container'>
        <div className='col-12 col-md-6 offset-md-3 my-3 '>
          <TextField
            id='outlined-search'
            label='Menu Search'
            type='Menu Search'
            variant='outlined'
            value={searchMenu}
            onChange={(e) => defineSearch(e)}
            style={{ width: '100%' }}
          />
        </div>

        <div className='row d-flex justify-content-center align-items-center'>
          {search
            ? ShopData.map((shop) => {
                if (
                  shop.title.toLowerCase().includes(searchMenu.toLowerCase()) ||
                  shop.description
                    .toLowerCase()
                    .includes(searchMenu.toLowerCase())
                ) {
                  return (
                    <ShopCard
                      title={shop.title}
                      picture={shop.picture}
                      link={shop.shop_link}
                      menu={shop.menu}
                    />
                  );
                } else {
                  return null;
                }
              })
            : ShopData.map((shop) => {
                return (
                  <ShopCard
                    title={shop.title}
                    picture={shop.picture}
                    link={shop.shop_link}
                    menu={shop.menu}
                  />
                );
              })}
        </div>
      </div>
    </div>
  );
};
export default Home;
