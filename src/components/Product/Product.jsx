import { useEffect, useState } from "react";
import "./product.css";
import FetchProduc from "../../api/FetchProduc";
import ProductCard from "../ProductCard/ProductCard";
function Product() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    FetchProduc().then((response) => {
      setProduct(response)
    
    });
  }, []);

  return (
    <section className="products container">
      {product.map((product) => (
        <ProductCard key={product.id}
          title={product.title}
          img={product.thumbnail}
          price={product.price}
        />
      ))}
    </section>
  );
}

export default Product;
