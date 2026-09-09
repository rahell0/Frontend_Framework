import { todoService } from '@/services/todoService';
import { TaskItem, ApiTodo } from '@/types/api-todo';

export async function getTasksFromApi(limit = 15, skip = 0): Promise<TaskItem[]> {
  // Masukkan limit & skip dalam bentuk object sesuai interface FetchTodosParams
  const data = await todoService.fetchTodos({ limit, skip });

  return data.todos.map((todo: ApiTodo) => ({
    id: todo.id,
    title: todo.todo,
    completed: todo.completed,
    userId: todo.userId,
    source: 'dummyjson-api',
  }));
}