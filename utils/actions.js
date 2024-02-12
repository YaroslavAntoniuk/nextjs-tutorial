'use server';

import { revalidatePath } from 'next/cache';
import prisma from './db';

export const getAllTasks = async () => {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: 'desc',
    },
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

export const deleteTask = async (formData) => {
  const id = formData.get('id');

  await prisma.task.delete({
    where: { id },
  });

  revalidatePath('/tasks');
};
