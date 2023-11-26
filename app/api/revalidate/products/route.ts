import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export const POST = (request: NextRequest) => {
  const tag = request.nextUrl.searchParams.get('tag');
  const secret = request.nextUrl.searchParams.get('secret');

  if (secret !== '74TOzjQchRIx/WgECR3chYH05RfbtxT4IW4EcKPFy58=') {
    return NextResponse.json({ status: 401, message: 'Invalid' });
  }

  if (!tag) {
    return NextResponse.json({ status: 400, message: 'Missing tag param!' });
  }

  revalidateTag(tag);

  return NextResponse.json({ revalidate: true, now: Date.now() });
};
