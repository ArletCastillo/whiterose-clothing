import { CartItemContainer, ItemDetails, Name, StyledImg } from './cart-item.styles.jsx';

const CartItem = ({ cartItem }) => {
    const {name, imageUrl, price, quantity} = cartItem;

    return(
        <CartItemContainer>
            <StyledImg src={imageUrl} alt={`${name}`}/>
            <ItemDetails>
                <Name>{name}</Name>
                <span>{quantity} x ${price}</span>
            </ItemDetails>
        </CartItemContainer>
    );
}

export default CartItem;