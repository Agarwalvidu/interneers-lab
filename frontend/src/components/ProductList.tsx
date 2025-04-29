import React, { useState } from "react";
import Product from "./Product";
import { products } from "../data/product";
import "../styles/ProductList.css";

const ProductList: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="product-list">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          isExpanded={product.id === expandedId}
          onClick={() =>
            setExpandedId(product.id === expandedId ? null : product.id)
          }
        />
      ))}
    </div>
  );
};

export default ProductList;
