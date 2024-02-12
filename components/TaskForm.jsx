'use client';

import { createTask } from '@/utils/actions';
import { useRef } from 'react';

const TaskForm = () => {
  const formRef = useRef(null);

  return (
    <form
      ref={formRef}
      action={async (formData) => {
        await createTask(formData);
        formRef.current?.reset();
      }}
    >
      <div className="flex flex-row w-full gap-4 my-8">
        <input
          className="input input-bordered bg-slate-50 text-black"
          name="content"
          type="text"
        />
        <button type="submit" className="btn btn-primary text-slate-50">
          Create Task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
