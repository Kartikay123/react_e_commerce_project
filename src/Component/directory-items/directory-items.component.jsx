import './directory-items.styles.scss';
import{useNavigate} from 'react-router-dom';

const DirectoryItem =({Category})=>{
    const {imageUrl,title ,id,route}= Category;
    const navigate = useNavigate();
    const OnnavigateHandler =()=> navigate(route);
    return(
        <div key={id}className='directory-items-container' onClick={OnnavigateHandler}>
        <div className='background-image' style={{
          backgroundImage: `url(${imageUrl})`
        }} />

        
        <div className='body'>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
    )
}
export default DirectoryItem;