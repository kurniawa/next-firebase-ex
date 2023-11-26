'use client';
import { useRouter } from 'next/navigation';
import RevalidateProductsButton from './RevalidateProductsButton';
import { SessionProvider, signIn, useSession } from 'next-auth/react';
import { useEffect } from 'react';

const DashboardPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  console.log(session);
  console.log(status);
  useEffect(() => {
    if (status === 'unauthenticated') {
      // router.push('/auth/login');
      signIn();
    }
  }, [router, status]);
  return (
    <div>
      <h1>DashboardPage</h1>
      {/* <SessionProvider> */}
      <RevalidateProductsButton></RevalidateProductsButton>
      {/* </SessionProvider> */}
    </div>
  );
};

export default DashboardPage;
