// app/(auth)/login/components/LoginForm.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // PINDAH LANGSUNG KE HALAMAN TODO LIST (/todos)
    router.push('/todos');
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email / Username:
        </label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Masukkan email"
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Masukkan password"
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
        >
          Login
        </button>
      </div>

      <p className="text-center text-sm text-gray-600 pt-2">
        Belum punya akun?{' '}
        <Link href="/register" className="text-blue-600 hover:underline font-semibold">
          Daftar di sini
        </Link>
      </p>
    </form>
  );
}