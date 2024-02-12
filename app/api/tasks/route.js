import db from '@/utils/db';
import { NextResponseWrapper } from '@/utils/response';

export const GET = async () => {
  const tasks = await db.task.findMany();

  return NextResponseWrapper(tasks);
};

export const POST = async (req) => {
  const { content } = await req.json();

  const task = await db.task.create({
    data: {
      content,
    },
  });

  return NextResponseWrapper(task);
};
