'use server';

import { revalidatePath } from 'next/cache';
import prisma from './db';
import { redirect } from 'next/navigation';

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

export const createTaskCustom = async (formData) => {
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

  redirect('/tasks');
};

export const deleteTask = async (formData) => {
  const id = formData.get('id');

  await prisma.task.delete({
    where: { id },
  });

  revalidatePath('/tasks');
};
