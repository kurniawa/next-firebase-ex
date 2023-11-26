import { retrieveData, retrieveDataById } from '@/app/lib/firebase/service';
import { NextRequest, NextResponse } from 'next/server';

const products = [
  {
    id: '1',
    title: 'Sepatu Baru',
    description: 'sepatu asik',
    images: ['https://i.dummyjson.com/data/products/1/1.jpg'],
    price: 100000,
  },
  {
    id: '2',
    title: 'Sepatu Bekas',
    description: 'sepatu wasek',
    images: ['https://i.dummyjson.com/data/products/14/1.jpg'],
    price: 50000,
  },
  // {
  //   id: '3',
  //   title: 'Sepatu 3',
  //   description: 'sepatu bisa dimakan',
  //   images: ['https://i.dummyjson.com/data/products/14/1.jpg'],
  //   price: 50000,
  // },
];

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  console.log(id);
  if (id) {
    // const d_product = products.find((item) => item.id === id); // dari local data
    const d_product = await retrieveDataById('products', id);
    console.log(d_product);
    if (d_product) {
      return NextResponse.json({
        status: 200,
        message: 'success',
        data: d_product,
      });
    } else {
      return NextResponse.json({
        status: 404,
        message: 'Product not found!',
        data: null,
      });
    }
  }

  const products = await retrieveData('products');

  return NextResponse.json({
    status: 200,
    message: 'success',
    data: products,
  });
};
