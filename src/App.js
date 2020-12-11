import React from 'react';
// import { Button } from '@material-ui/core';

import StoreFront from './components/storefront/storefront.js';
import Header from './components/header/header.js'
import Footer from './components/footer/footer.js'


function App() {
  return (
    <>
      <Header />
      <StoreFront />
      <Footer />
    </>
  );
}

export default App;
