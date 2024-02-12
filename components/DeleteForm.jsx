import { deleteTask } from '@/utils/actions';

const DeleteForm = ({ taskId }) => {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={taskId} />
      <button className="btn btn-xs btn-error">Delete</button>
    </form>
  );
};

export default DeleteForm;
