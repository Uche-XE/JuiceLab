import React from 'react';
import Footer from './components/Footer';
import JuiceLab from './components/JuiceLab';
import Navbar from './components/Navbar';
import Checkout from './components/Checkout';
import RecommendedProducts from './components/RecommendedProducts';
import Products from './components/Products';


const App = () => {
  return (
    <main style={{padding: "0", margin: "0"}}>
    <Checkout/>
    <Navbar/>
    <JuiceLab/>
    <Products/>
    <RecommendedProducts/>
    <Footer/>
    </main>
  );
};

export default App;