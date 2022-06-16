import { useContext } from 'react';
import { CategoryContext } from '../../contexts/categories.context';
import CategoryPreview from '../../Component/category-preview/category-preview.component';
const CategoriesPreviewShop = () => {
    const { Categorieswalamap } = useContext(CategoryContext);
    return (
        <>
            {Object.keys(Categorieswalamap).map((title) => {
                const product = Categorieswalamap[title];
                return (
                    <CategoryPreview key={product.id} title={title} product={product} />
                )
            })}
        </>


    );
}
export default CategoriesPreviewShop;