'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/app/components/ui/button';
import { Todo } from '@/app/todo';

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete?: (id: number) => void;
};

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li
      className={`p-4 rounded-xl border flex items-center justify-between gap-3 transition-all duration-200 ${
        todo.completed
          ? 'bg-emerald-50/30 border-emerald-200'
          : 'bg-white border-gray-100 hover:border-gray-300'
      }`}
    >
      {/* Bagian Checklist & Judul Tugas */}
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <input
          id={`todo-${todo.id}`}
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="w-5 h-5 rounded cursor-pointer accent-emerald-600"
        />
        <label
          htmlFor={`todo-${todo.id}`}
          className={`text-base font-medium truncate cursor-pointer transition-all ${
            todo.completed ? 'line-through text-gray-400' : 'text-gray-800'
          }`}
        >
          {todo.title}
        </label>
      </div>

      {/* Aksi: Detail & Hapus */}
      <div className="flex items-center gap-2 shrink-0">
        <Link
          href={`/task/${todo.id}`}
          className="text-xs font-semibold px-2.5 py-1.5 rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
        >
          Detail →
        </Link>
        {onDelete && (
          <Button
            type="button"
            onClick={() => onDelete(todo.id)}
            title="Hapus tugas"
            variant="destructive"
            size="xs"
            className="text-xs font-medium"
          >
            Hapus
          </Button>
        )}
      </div>
    </li>
  );
}