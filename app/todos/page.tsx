// app/todos/page.tsx
import React from 'react';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import { getTodos } from '../../lib/todos';

export default async function TodosPage() {
  const todos = await getTodos();

  return (
    <main className="min-h-screen p-8 bg-gray-50 flex flex-col items-center">
      <div className="w-full max-w-2xl bg-white p-6 rounded-xl shadow-md border border-gray-100">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Daftar Tugas (Todo List)
        </h1>
        <TodoForm />
        <TodoList todos={todos} />
      </div>
    </main>
  );
}