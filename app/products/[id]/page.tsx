import ProductCard from '@/app/components/ProductCard';
import { retrieveDataById } from '@/app/lib/firebase/service';
import { products_api_url } from '@/app/lib/urls';

interface ProductDetailProps {
  params: { id: number };
}

// fetch local api
// const getProductDetail = async (id: number) => {
//   const res = await fetch(`${products_api_url}?id=${id}`);
//   // .then((res) => res.json())
//   // .then(console.log);
//   if (!res) {
//     throw new Error('Fetching product detail error!');
//   }
//   return await res.json();
//   // console.log(product);
// };
// // end - fetch local api

// // fetch - firestore
interface ProductDetailFirestoreProps {
  params: { id: string };
}

const getFirestoreProductDetail = async (id: string) => {
  const res = await retrieveDataById('products', id);
  if (!res) {
    throw new Error('Fetching product detail from firestore error!');
  }
  // console.log(res);
  return res;
};
// end - fetch - firestore

const getData = async (id: string) => {
  const res = await fetch(`${products_api_url}?id=${id}`, {
    cache: 'no-store',
    next: { tags: ['product'] },
  });
  if (!res) {
    throw new Error('Fetching error!');
  }
  return res.json();
};

const ProductDetail = async (props: ProductDetailFirestoreProps) => {
  const { params } = props;
  // const product = await getFirestoreProductDetail(params.id);
  const product = await getData(params.id);
  console.log(product);
  // console.log(products_api_url);
  // console.log(res);
  // const response = res.json();
  // console.log(response);
  return (
    <div>
      <h1>ProductDetail</h1>
      <ProductCard
        id={product.data.id}
        title={product.data.title}
        description={product.data.description}
        imageURL={product.data.images[0]}
        price={product.data.price}
      ></ProductCard>
    </div>
  );
};

export default ProductDetail;
