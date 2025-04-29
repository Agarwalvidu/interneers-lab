import React from "react";
import { Product as ProductType } from "../data/product";
import "../styles/Product.css";

interface ProductProps {
  product: ProductType;
  onClick: () => void;
  isExpanded: boolean;
}

const Product: React.FC<ProductProps> = ({ product, onClick, isExpanded }) => {
  return (
    <div
      className={`product-card ${isExpanded ? "product-expanded" : ""}`}
      onClick={onClick}
    >
      <h3 className="product-title">{product.name}</h3>
      <p className="product-brand">
        <strong>Brand:</strong> {product.brand}
      </p>
      <p className="product-price">
        <strong>Price:</strong> ${product.price}
      </p>
      <p className="product-category">
        <strong>Category:</strong> {product.category.title}
      </p>
      {isExpanded && (
        <div className="product-details">
          <p>{product.description}</p>
          <p>
            <strong>Available:</strong> {product.quantity_in_warehouse ?? 0}
          </p>
          <div className="product-dates">
            <p>
              <small>
                Created: {new Date(product.created_at).toLocaleString()}
              </small>
            </p>
            <p>
              <small>
                Updated: {new Date(product.updated_at).toLocaleString()}
              </small>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
