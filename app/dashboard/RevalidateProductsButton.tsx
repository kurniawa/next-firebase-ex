'use client';

import { useState } from 'react';

const RevalidateProductsButton = () => {
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState(false);
  const [message, setMessage] = useState('');
  const revalidate = async () => {
    setPending(true);
    const res = await fetch(
      'http://localhost:3000/api/revalidate/products?tag=products&secret=74TOzjQchRIx/WgECR3chYH05RfbtxT4IW4EcKPFy58=',
      {
        method: 'POST',
      }
    );
    // console.log(await res.json());
    const response = await res.json();
    if (response.revalidate) {
      setStatus(true);
      setMessage('OK');
    } else {
      setMessage('Failed');
    }
    setPending(false);
  };
  return (
    <>
      <button
        className="btn btn-success"
        onClick={revalidate}
        disabled={pending}
      >
        RevalidateProductsButton{' '}
        {pending && (
          <span className="loading loading-infinity loading-md"></span>
        )}{' '}
      </button>
      {status && <span>{message}</span>}
      {!status && <span>{message}</span>}
    </>
  );
};

export default RevalidateProductsButton;
