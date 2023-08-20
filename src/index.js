import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './App.css';

import NavigationBar from './NavigationBar';
import CoverImage from './CoverImage';
import HeaderFreelancer from './HeaderFreelancer';
import CardList from './CardList';
import Button from './Button'
import HeaderCustomer from './HeaderCustomer';
import CustomerCardList from './CustomerCardList'
import EmailBanner from './EmailBanner'
import FooterBanner from './FooterBanner'
import FooterDevLinks from './FooterDevLinks';



ReactDOM.render(<div>
  <NavigationBar />
  <CoverImage />
  <HeaderFreelancer />
  <CardList />
  <Button />
  <HeaderCustomer />
  <CustomerCardList />
  <Button />
  <EmailBanner />
  <FooterBanner />
  <FooterDevLinks />


  </div>
  , document.getElementById('root'));