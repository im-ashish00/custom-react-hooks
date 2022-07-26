import { useState } from 'react';

export default function useArray(arr) {
  const [array, setArray] = useState(arr);
  function push(element) {
    setArray((a) => [...a, element]);
  }
  function update(index, newElement) {
    setArray((a) => [
      ...a.slice(0, index),
      newElement,
      ...a.slice(index + 1, a.length),
    ]);
  }

  function remove(index) {
    setArray((a) => [...a.slice(0, index), ...a.slice(index + 1, a.length)]);
  }
  function filter(cb) {
    setArray((a) => a.filter(cb));
  }
  function clear() {
    setArray([]);
  }

  return [array, push, update, remove, filter, clear];
}
