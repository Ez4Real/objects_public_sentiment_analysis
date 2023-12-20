import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import Main from './components/pages/Main/Main';
import Category from './components/pages/Category/Category';
import Item from './components/pages/Item/Item';
import './App.css';


function App() {
  return (
    <Router>
		<ScrollToTop/>
		<Header/>
		<main>
		  <Routes>
			<Route path="/" exact element={<Main />}/>
			<Route path="/category/:categoryName" element={<Category />}/>
			<Route path="/:categoryName/:itemName" element={<Item />}/>
		  </Routes>
		</main>
		<Footer/>
	</Router>
  );
}

export default App;
