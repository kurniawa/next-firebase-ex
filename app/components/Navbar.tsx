'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const disableNavbar = ['/auth/login', '/auth/register'];
  //   console.log(pathname);
  const router = useRouter;
  const { data: session, status }: { data: any; status: string } = useSession();
  // console.log(session);
  // console.log(status);

  return (
    <>
      {!disableNavbar.includes(pathname) && (
        <nav className="flex gap-3 items-center">
          <h1>Navbar</h1>
          <ul className="flex gap-3">
            <Link
              href={'/'}
              className={`btn ${
                pathname === '/' ? 'btn-secondary' : 'btn-primary'
              }`}
            >
              <li>Home</li>
            </Link>
            <Link
              href={'/about'}
              className={`btn ${
                pathname === '/about' ? 'btn-secondary' : 'btn-primary'
              }`}
            >
              <li>About</li>
            </Link>
            <Link
              href={'/about/profile'}
              className={`btn ${
                pathname === '/about/profile' ? 'btn-secondary' : 'btn-primary'
              }`}
            >
              <li>Profile</li>
            </Link>
            <Link
              href={'/products'}
              className={`btn ${
                pathname === '/products' ? 'btn-secondary' : 'btn-primary'
              }`}
            >
              <li>Products</li>
            </Link>
            <Link
              href={'/dashboard'}
              className={`btn ${
                pathname === '/dashboard' ? 'btn-secondary' : 'btn-primary'
              }`}
            >
              <li>Dashboard</li>
            </Link>
            {status === 'authenticated' ? (
              <div className="flex items-center gap-3">
                <h4>{session?.user?.username}</h4>
                <button onClick={() => signOut()} className="btn btn-warning">
                  <li>Sign Out</li>
                </button>
              </div>
            ) : (
              <button onClick={() => signIn()}>
                <li>Sign In</li>
              </button>
            )}
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navbar;
