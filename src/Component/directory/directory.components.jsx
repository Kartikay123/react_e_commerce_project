import CategoryItem from '../Category-items/category-item.component';
import './directory.styles.scss';
const Directory =({Category})=>{
    return (
        <div className="directory-container">
    {Category.map((Category)=>
    (
      <CategoryItem Category={Category}/>
    ))}
     
    </div>
    )
}
export default Directory;