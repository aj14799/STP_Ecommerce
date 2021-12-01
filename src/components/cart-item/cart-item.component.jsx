import React from 'react'
import { CartItemContainer, ItemDetailsContainer, NameSpanner, QuantitySpanner, ImageHolder } from "./cart-item.styles";

function CartItem({ item: { imageUrl, price, name, quantity } }) {
    return (
        <CartItemContainer>
            <ImageHolder src={imageUrl} alt={name} />
            <ItemDetailsContainer>
                <NameSpanner>{name}</NameSpanner>
                <QuantitySpanner>{quantity}* Rs {price*74.3}</QuantitySpanner>
            </ItemDetailsContainer>
        </CartItemContainer>
    )
}

export default CartItem
