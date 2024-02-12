import { getAllTasks } from '@/utils/actions';
import Link from 'next/link';
import DeleteForm from './DeleteForm';

const TaskList = async () => {
  const tasks = await getAllTasks();

  if (!tasks.length) {
    return <h2 className="mt-8 font-medium text-lg">No tasks found</h2>;
  }

  return (
    <ul className="w-full">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex justify-between items-center px-6 py-4 mb-4 border border-base-300 rounded-lg bg-slate-900/50"
        >
          <h2
            className={`text-lg capitalize text-ellipsis ${
              task.completed ? 'line-through' : null
            }`}
          >
            {task.content}
          </h2>
          <div className="flex gap-6 items-center">
            <Link
              href={`/task/${task.id}`}
              className="btn btn-accent btn-xs px-4"
            >
              Edit
            </Link>
            <DeleteForm taskId={task.id} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
