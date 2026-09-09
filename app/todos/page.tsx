import React from 'react';
import TodoStateOnlyApp from './components/TodoStateOnlyApp';

// Function simulasi untuk fetch data awal
async function getInitialTodos() {
  return [
    {
      id: 1,
      title: 'Belajar React Server Components (RSC)',
      description: 'Memahami dasar RSC di Next.js App Router.',
      completed: true,
      createdAt: new Date().toISOString().split('T')[0],
    },
    {
      id: 2,
      title: 'Memahami Next.js App Router',
      description: 'Eksplorasi routing dan layout.',
      completed: false,
      createdAt: new Date().toISOString().split('T')[0],
    },
    {
      id: 3,
      title: 'Membuat Aplikasi Todo List',
      description: 'Latihan praktikum PWF.',
      completed: false,
      createdAt: new Date().toISOString().split('T')[0],
    },
  ];
}

export default async function TodosPage() {
  const initialTodos = await getInitialTodos();

  return (
    <main className="min-h-screen p-6 md:p-10 bg-white text-dark-70">
      <div className="w-full max-w-2xl mx-auto space-y-6">
        <h1 className="text-2xl md:text-3xl font-bold text-dark-70 text-center mb-6">
          Daftar Tugas (State Only)
        </h1>
        {/* Panggil TodoStateOnlyApp yang mengelola function state */}
        <TodoStateOnlyApp initialTodos={initialTodos} />
      </div>
    </main>
  );
}