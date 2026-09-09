'use client';

import React, { useState, useEffect } from 'react';
import ApiTodoList from './ApiTodoList';
import { TaskItem } from '@/types/api-todo';

export default function TaskApiApp() {
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTasks = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const res = await fetch('/api/todos?limit=10');
      const json = await res.json();

      if (json.success && json.data?.tasks) {
        setTasks(json.data.tasks);
      } else if (json.success && Array.isArray(json.data)) {
        setTasks(json.data);
      } else {
        setError(json.message || 'Gagal memuat tugas dari API.');
      }
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleToggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  if (isLoading) {
    return (
      <div className="py-12 text-center text-gray-500 font-medium text-sm">
        Memuat data dari API DummyJSON...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 text-red-600 rounded-xl border border-red-100 text-center">
        <p className="font-semibold text-sm">Terjadi Kesalahan</p>
        <p className="text-xs mt-1">{error}</p>
        <button
          onClick={fetchTasks}
          className="mt-3 px-3 py-1 bg-red-600 text-white rounded-md text-xs font-medium"
        >
          Coba Lagi
        </button>
      </div>
    );
  }

  return <ApiTodoList tasks={tasks} onToggleTask={handleToggleTask} />;
}