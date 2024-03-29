'use server';

import { revalidatePath } from 'next/cache';
import prisma from './db';
import { redirect } from 'next/navigation';
import { z } from 'zod';

export const getAllTasks = async () => {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
};

export const getTaskById = async (id) => {
  return await prisma.task.findUnique({
    where: { id },
  });
};

export const createTask = async (formData) => {
  try {
    const content = formData.get('content');

    await prisma.task.create({
      data: {
        content,
      },
    });

    revalidatePath('/tasks');
  } catch (error) {
    throw new Error('Something went wrong while creating a task');
  }
};

export const createTaskCustom = async (prevState, formData) => {
  const content = formData.get('content');
  const TaskSchema = z.object({
    content: z.string().min(5),
  });

  try {
    TaskSchema.parse({ content });

    await prisma.task.create({
      data: {
        content,
      },
    });

    revalidatePath('/tasks');

    return { message: 'Task was created successfully', error: false };
  } catch (error) {
    return {
      message:
        error.errors?.[0]?.message ?? 'There was an error with creating a task',
      error: true,
    };
  }
};

export const updateTask = async (formData) => {
  const id = formData.get('id');
  const content = formData.get('content');
  const completed = formData.get('completed');

  await prisma.task.update({
    where: { id },
    data: {
      content,
      completed: Boolean(completed === 'on'),
    },
  });

  revalidatePath('/tasks');
  redirect('/tasks');
};

export const deleteTask = async (formData) => {
  const id = formData.get('id');

  await prisma.task.delete({
    where: { id },
  });

  revalidatePath('/tasks');
};
