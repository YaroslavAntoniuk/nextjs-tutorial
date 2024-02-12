import EditForm from '@/components/EditForm';
import { getTaskById } from '@/utils/actions';
import Link from 'next/link';

const Task = async ({ params }) => {
  const task = await getTaskById(params.id);

  if (!task) {
    return (
      <>
        <div className="my-8">
          <Link href="/tasks" className="btn btn-accent">
            &#8592; Back to tasks
          </Link>
          <div className="w-full h-5/6 items-center justify-center">
            Task not found.
          </div>
        </div>
      </>
    );
  }

  return (
    <div>
      <div className="my-8">
        <Link href="/tasks" className="btn btn-accent">
          &#8592; Back to tasks
        </Link>
      </div>
      <EditForm task={task} />
    </div>
  );
};

export default Task;
