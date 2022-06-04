import './category-items.styles.scss';

const CategoryItem =({Category})=>{
    const {imageUrl,title ,id}= Category;
    return(
        <div key={id}className='category-container'>
        <div className='background-image' style={{
          backgroundImage: `url(${imageUrl})`
        }} />

        
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
    )
}
export default CategoryItem;