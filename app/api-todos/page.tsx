import React from 'react';
import TaskApiApp from './components/TaskApiApp';

export default function ApiTodosPage() {
  return (
    <main className="min-h-screen p-6 md:p-10 bg-white text-dark-70">
      <div className="w-full max-w-2xl mx-auto space-y-6">
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100">
          <header className="mb-6 border-b border-gray-100 pb-4">
            <h1 className="text-2xl md:text-3xl font-bold text-dark-70 text-center">
              Daftar Tugas (Todo List)
            </h1>
          </header>

          <TaskApiApp />
        </div>
      </div>
    </main>
  );
}