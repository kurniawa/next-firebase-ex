import { NextRequest, NextResponse } from 'next/server';

export const POST = async (request: NextRequest) => {
  const req = await request.json();
  console.log(req);
  if (req) {
    return NextResponse.json(req);
  } else {
    return NextResponse.json({
      status: 404,
      message: 'Request failed!',
    });
  }
};
