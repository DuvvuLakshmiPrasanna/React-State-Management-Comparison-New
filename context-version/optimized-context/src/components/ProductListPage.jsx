import React from "react";
import { products } from "../data/products";
import { useRenderCount } from "../hooks/useRenderCount";
import { ProductCard } from "./ProductCard";

export function ProductListPage() {
  const renderCount = useRenderCount();

  return (
    <section className="panel product-area">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Catalog</p>
          <h2>Featured products</h2>
        </div>
      </div>
      {
        <small data-testid="render-count">Render count: {renderCount}</small>
      }
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
