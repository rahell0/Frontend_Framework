import { NextResponse } from 'next/server';
import { getTasksFromApi } from '@/lib/tasks';
import { todoService } from '@/services/todoService';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = Number(searchParams.get('limit')) || 10;
    const skip = Number(searchParams.get('skip')) || 0;

    const tasks = await getTasksFromApi(limit, skip);

    // Format response dibuat persis sesuai dengan gambar acuan PDF praktisi
    return NextResponse.json(
      {
        success: true,
        message: 'Koneksi ke DummyJSON API berhasil! Data berhasil diambil.',
        count: tasks.length,
        total: 254,
        data: {
          tasks: tasks,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Gagal mengambil data dari server API.',
        error: (error as Error).message,
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.title || typeof body.title !== 'string') {
      return NextResponse.json(
        {
          success: false,
          message: 'Judul tugas (title) wajib diisi.',
        },
        { status: 400 }
      );
    }

    const createdApiTodo = await todoService.createTodo({
      todo: body.title,
      completed: false,
      userId: body.userId || 5,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Tugas baru berhasil dibuat melalui API.',
        data: {
          id: createdApiTodo.id,
          title: createdApiTodo.todo,
          completed: createdApiTodo.completed,
          userId: createdApiTodo.userId,
          source: 'dummyjson-api',
        },
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Gagal membuat tugas baru.',
        error: (error as Error).message,
      },
      { status: 500 }
    );
  }
}