import '../App.css';
import React from 'react';
import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList"
import PlantItem from './PlantItem';
import logo from '../assets/logo.png'


function App() {
  return <React.Fragment>
          <Banner>
            <img src={logo} alt='La maison jungle' className='lmj-logo' />
            <h1 className='lmj-title'>La maison jungle</h1>
			    </Banner>
          <Cart />
          <ShoppingList />
          <PlantItem />
        </React.Fragment>;
}

export default App;
