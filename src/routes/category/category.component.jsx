// import './category.styles.scss';
 import { CategoryContext } from '../../contexts/categories.context';

 import ProductCard from '../../Component/product-card/product-card.component';


import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';



import './category.styles.scss';

const Category = () => {
  const { category } = useParams();
  const { Categorieswalamap } = useContext(CategoryContext);
  const [products, setProducts] = useState(Categorieswalamap[category]);

  useEffect(() => {
    setProducts(Categorieswalamap[category]);
  }, [category, Categorieswalamap]);

  return (
    <Fragment>
      <h2 className='category-title'>{category.toUpperCase()}</h2>
      <div className='category-container'>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
//https://github.com/ZhangMYihua/crwn-clothing-v2/blob/lesson-21/src/routes/category/category.component.jsx