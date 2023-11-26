import { retrieveData, retrieveDataById } from '@/app/lib/firebase/service';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('userId');
  console.log(id);
  if (id) {
    // const retrieved_doc = products.find((item) => item.id === id); // dari local data
    const retrieved_doc = await retrieveDataById('users', id);
    console.log(retrieved_doc);
    if (retrieved_doc) {
      return NextResponse.json({
        status: 200,
        message: 'success',
        data: retrieved_doc,
      });
    } else {
      return NextResponse.json({
        status: 404,
        message: 'Product not found!',
        data: null,
      });
    }
  }

  const retrieved_docs = await retrieveData('users');

  return NextResponse.json({
    status: 200,
    message: 'success',
    data: retrieved_docs,
  });
};
