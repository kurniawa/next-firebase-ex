import { NextRequest } from 'next/server';

export const isAuthenticated = (request: NextRequest) => {
  console.log('request', request);
  return false;
};
