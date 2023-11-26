'use client';
import { register_api_url } from '@/app/lib/urls';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const RegisterPage = () => {
  const { push } = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleRegister = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    const res = await fetch(register_api_url, {
      method: 'POST',
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
        fullname: e.target.fullname.value,
      }),
    });
    console.log(res);
    if (res.status === 200) {
      e.target.reset();
      push('/auth/login');
    } else {
      console.log(res);
      setError('Email atau username sudah ada?');
    }

    setLoading(false);
  };
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <Image
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
            width={50}
            height={50}
          /> */}
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            onSubmit={(e) => handleRegister(e)}
            method="POST"
          >
            <div>
              <label
                htmlFor="nama"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nama lengkap
              </label>
              <div className="mt-2">
                <input
                  id="fullname"
                  name="fullname"
                  type="fullname"
                  autoComplete="fullname"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="username"
                  autoComplete="username"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="btn btn-primary"
                defaultValue={'Daftar'}
                disabled={loading}
              >
                Daftar
                {loading && (
                  <span className="loading loading-spinner loading-md"></span>
                )}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Sudah terdaftar?{' '}
            <Link
              href={'/auth/login'}
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Masuk
            </Link>
          </p>
          {error && <div className="text-red-500">{error}</div>}
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
