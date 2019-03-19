import { useState } from 'react';

const useToggleHook = (initialStatus = false) => {
  const [state, setState] = useState(initialStatus);
  const toggleState = () => setState(!state);
  return [state, toggleState];
};

export default useToggleHook;
