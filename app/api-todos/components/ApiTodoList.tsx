'use client';

import React from 'react';
import { TaskItem } from '@/types/api-todo';

interface ApiTodoListProps {
  tasks: TaskItem[];
  onToggleTask: (id: number) => void;
}

export default function ApiTodoList({ tasks, onToggleTask }: ApiTodoListProps) {
  return (
    <div className="mt-2 space-y-3">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-sm font-semibold text-gray-700">Daftar Tugas</h2>
        <span className="text-xs bg-gray-200 text-gray-600 px-2.5 py-0.5 rounded-full font-medium">
          {tasks.length} item
        </span>
      </div>

      {tasks.length === 0 ? (
        <p className="text-center text-sm text-gray-500 py-6">Tidak ada tugas.</p>
      ) : (
        tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center justify-between p-3.5 bg-white border border-gray-100 rounded-xl shadow-sm"
          >
            <div className="flex items-center gap-3 flex-1 min-w-0 mr-3">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggleTask(task.id)}
                className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer"
              />
              <span
                className={`text-sm truncate font-medium ${
                  task.completed
                    ? 'line-through text-gray-400'
                    : 'text-gray-700'
                }`}
              >
                {task.title}
              </span>
            </div>

            <div className="flex items-center gap-1.5 shrink-0 text-[11px] font-medium">
              <span className="px-2.5 py-0.5 bg-purple-100 text-purple-600 rounded-full">
                ID: #{task.id}
              </span>
              <span className="px-2.5 py-0.5 bg-sky-100 text-sky-600 rounded-full">
                User: {task.userId}
              </span>
              <span
                className={`px-2.5 py-0.5 rounded-full ${
                  task.completed
                    ? 'bg-emerald-100 text-emerald-600'
                    : 'bg-amber-100 text-amber-600'
                }`}
              >
                {task.completed ? 'Selesai' : 'Pending'}
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}