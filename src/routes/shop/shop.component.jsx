
 import CategoriesPreviewShop from  '../categories-preview-shop/categories-preview-shop.component';


import { Routes, Route } from 'react-router-dom';

import Category from '../category/category.component';

import './shop.styles.scss';

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreviewShop />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;