'use client';

import { createTaskCustom } from '@/utils/actions';
import { useEffect, useRef } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import toast from 'react-hot-toast';

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

const initialState = {
  message: '',
  error: false,
};

const TaskFormCustom = () => {
  const [state, formAction] = useFormState(createTaskCustom, initialState);
  const formRef = useRef(null);

  useEffect(() => {
    if (state.message) {
      if (state.error) {
        toast.error(state.message);
        return;
      }

      toast.success(state.message);
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction}>
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
