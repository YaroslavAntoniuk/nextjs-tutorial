'use client';

import { useState } from 'react';

const Client = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-row items-center justify-center">
      <button className="btn btn-primary" onClick={() => setCount(count - 1)}>
        -
      </button>

      <h1 className="text-7xl font-bold mx-4 min-w-32 text-center">{count}</h1>

      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
};

export default Client;
