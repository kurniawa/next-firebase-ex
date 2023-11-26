import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { products_api_url } from '../lib/urls';

interface ProductCardProps {
  id: string;
  imageURL: string;
  title: string;
  description: string;
  price: number;
}

const ProductCard = ({
  id,
  imageURL,
  title,
  description,
  price,
}: ProductCardProps) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <Link href={`${products_api_url}/${id}`}>
        <figure>
          <Image
            src={imageURL}
            alt={title}
            width={1000}
            height={1000}
            className="w-full"
          />
        </figure>
      </Link>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-between">
          <div className="text-xl font-bold">{formatPrice(price)}</div>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

function formatPrice(price: number) {
  return price.toLocaleString('id-ID', {
    style: 'currency',
    currency: 'IDR',
  });
}
