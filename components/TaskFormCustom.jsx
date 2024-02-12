'use client';

import { createTaskCustom } from '@/utils/actions';
import { useRef } from 'react';
import { useFormStatus } from 'react-dom';

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="btn btn-primary text-slate-50"
      disabled={pending}
    >
      {pending ? 'Please wait...' : 'Create Task'}
    </button>
  );
};

const TaskFormCustom = () => {
  const formRef = useRef(null);

  return (
    <form
      ref={formRef}
      action={async (formData) => {
        await createTaskCustom(formData);
        formRef.current?.reset();
      }}
    >
      <div className="flex flex-row w-full gap-4 my-8">
        <input
          className="input input-bordered bg-slate-50 text-black"
          name="content"
          type="text"
        />
        <SubmitButton />
      </div>
    </form>
  );
};

export default TaskFormCustom;
