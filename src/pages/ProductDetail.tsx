import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

const mockProducts: Product[] = [
  {
    id: 1,
    name: "Stylish Watch",
    price: 99.99,
    description: "A sleek and modern watch that complements any outfit.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 2,
    name: "Leather Bag",
    price: 149.99,
    description: "A durable and fashionable leather bag for everyday use.",
    image: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 3,
    name: "Sunglasses",
    price: 79.99,
    description: "Protect your eyes in style with these trendy sunglasses.",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 4,
    name: "Wireless Headphones",
    price: 199.99,
    description: "Experience crystal-clear sound with these comfortable wireless headphones.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  }
];

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const foundProduct = mockProducts.find(p => p.id === Number(id));
    setProduct(foundProduct || null);
  }, [id]);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1
    });
    alert('Product added to cart!');
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2">
        <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg shadow-md" />
      </div>
      <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
        <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
        <p className="text-xl font-semibold mb-4">${product.price.toFixed(2)}</p>
        <p className="text-gray-700 mb-6">{product.description}</p>
        <button 
          onClick={handleAddToCart}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;