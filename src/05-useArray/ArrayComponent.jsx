import React from 'react';
import useArray from './useArray';

export default function ArrayComponent() {
  const [arr, push, update, remove, filter, clear] = useArray([
    1, 2, 3, 4, 5, 6,
  ]);
  return (
    <div>
      <div>{arr.join(',')}</div>
      <button onClick={() => push(7)}>Add 7</button>
      <button onClick={() => update(1, 9)}>Change second element to 9</button>
      <button onClick={() => remove(1)}>Remove second element</button>
      <button onClick={() => filter((n) => n < 4)}>
        Keep numbers less than 4
      </button>
      <button onClick={clear}>Clear</button>
    </div>
  );
}
