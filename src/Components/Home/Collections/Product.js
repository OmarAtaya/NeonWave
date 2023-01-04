import React from 'react';
import {ProductCard, ProductImage, ProductTitle, ProductPrice} from './ProductElements';

const Product = ({product}) => {
  return (
    <ProductCard>
        <ProductImage src={product.image} alt=""/>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductPrice>FROM AED {product.price}</ProductPrice>
    </ProductCard>
  )
}

export default Product