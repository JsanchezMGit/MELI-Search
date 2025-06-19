import React from 'react';
import type { Product } from '../types/productTypes';

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <div className="product-item">
      <img src={product.thumbnail} alt={product.title} />
      <div className="product-info">
        <h3>{product.title}</h3>
        <p className="price">${product.price.toLocaleString()}</p>
        {product.original_price && (
          <p className="original-price">${product.original_price.toLocaleString()}</p>
        )}
        <p className="condition">{product.condition === 'new' ? 'Nuevo' : 'Usado'}</p>
        {product.shipping.free_shipping && (
          <p className="free-shipping">Envío gratis</p>
        )}
      </div>
    </div>
  );
};

export default ProductItem;