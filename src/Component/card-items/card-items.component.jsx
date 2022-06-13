import './card-items.styles.scss';

const Carditems = ({ cardpassitem }) => {
    const { name, quantity, imageUrl, price } = cardpassitem;
    return (
        <div className='cart-item-container'>
            <img src={imageUrl} alt={`{name}`} />
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>{quantity}x ${price}</span>
            </div>
        </div>
    )
}
export default Carditems;