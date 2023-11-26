import {
  register,
  retrieveData,
  retrieveDataById,
} from '@/app/lib/firebase/service';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (request: NextRequest) => {
  const req = await request.json();
  console.log(req);
  const data = {
    username: req.username,
    password: req.password,
    fullname: req.fullname,
  };
  const res = await register(req);

  return NextResponse.json(
    { status: res.status, message: res.message },
    { status: res.statusCode }
  );
};
