import { updateTask } from '@/utils/actions';

const EditForm = ({ task }) => {
  const { id, content, completed } = task;

  return (
    <form
      action={updateTask}
      className="p-12 border border-base-300 rounded-lg bg-slate-900"
    >
      <input type="hidden" name="id" value={id} />

      <input
        type="text"
        required
        defaultValue={content}
        name="content"
        className="input input-bordered w-full bg-slate-300 text-black"
      />
      <div className="font-control my-4">
        <label htmlFor="completed" className="label cursor-pointer">
          <span className="label-text">Completed</span>
          <input
            type="checkbox"
            defaultChecked={completed}
            id="completed"
            name="completed"
            className="checkbox checkbox-primary checkbox-sm"
          />
        </label>
      </div>
      <button className="btn btn-primary btn-block btn-sm" type="submit">
        Edit
      </button>
    </form>
  );
};

export default EditForm;
