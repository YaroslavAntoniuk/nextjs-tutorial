'use client';

import { deleteTask } from '@/utils/actions';
import { useFormStatus } from 'react-dom';

const DeleteButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="btn btn-error btn-xs px-4 text-slate-50"
      disabled={pending}
    >
      {pending ? 'Please wait...' : 'Delete Task'}
    </button>
  );
};

const DeleteForm = ({ taskId }) => {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={taskId} />
      <DeleteButton />
    </form>
  );
};

export default DeleteForm;
