import Link from 'next/link';
import React from 'react';

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <nav className="w-56 left-0 bg-primary">
        <ul className="flex flex-col gap-3">
          <Link href={'/'} className="btn btn-secondary">
            <li>Home</li>
          </Link>
          <Link href={'/about'} className="btn btn-secondary">
            <li>About</li>
          </Link>
          <Link href={'/about/profile'} className="btn btn-secondary">
            <li>Profile</li>
          </Link>
        </ul>
      </nav>
      <div>{children}</div>
    </div>
  );
};

export default AboutLayout;
// Layuot vs template, kalo layout state terbawa, sedangkan template tidak passing layout
