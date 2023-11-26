import React from 'react';
import ProductCard from '../components/ProductCard';
import { products_api_url } from '../lib/urls';
import { retrieveData } from '../lib/firebase/service';

// fetching products api local
const getProducts = async () => {
  //   const res = await fetch('https://dummyjson.com/products');
  const res = await fetch(products_api_url, {
    cache: 'force-cache', // no-store, kalau tidak ingin ada yang di cache
    next: {
      // revalidate: 3600, // setiap satu jam diperbaharui
      tags: ['products'],
    },
  });
  // .then(console.log);
  if (!res.ok) {
    throw new Error('Failed to fetch data!');
  }
  // console.log(res.json());
  return res.json();

  //   console.log(res.json());
};
// end - fetching products api local

interface ProductProps {
  id: number;
}

const ProductsPage = async () => {
  const data = await getProducts();
  // console.log(data);
  //   const products = data.products;
  const products = data.data;
  //   console.log(products);
  const limit_products = new Array();
  products.forEach((product: any) => {
    if (limit_products.length > 10) {
      return;
    }
    limit_products.push(product);
  });
  //   console.log(limit_products);
  return (
    <div>
      <h1>Products Page</h1>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
        {limit_products.length > 0 &&
          limit_products.map((product: any) => {
            // console.log(products.length);

            return (
              <ProductCard
                id={product.id}
                key={product.id}
                imageURL={product.images[0]}
                title={product.title}
                description={product.description}
                price={product.price}
              ></ProductCard>
            );
          })}
      </div>
    </div>
  );
};

export default ProductsPage;
