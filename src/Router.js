import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
// // Pages
import Product from './page/Product'
import DetailProduct from './page/DetailProduct'
import ProductDetail from './page/ProductDetail'

const RouterComponent = props => {
  console.disableYellowBox = true;

  return (
    <Router>
      <Stack key="root">
        <Scene key="Product" component={Product}  initial hideNavBar/>
        <Scene key="ProductDetail" component={ProductDetail} hideNavBar />
      </Stack>
    </Router>
  );
};
export default RouterComponent;
