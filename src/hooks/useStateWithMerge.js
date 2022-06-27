import { useState } from "react";

export function useStateWithMerge(initialState) {
  const [state, setState] = useState(initialState);
  function mergeState(newState) {
    return setState((prevState) => ({ ...prevState, ...newState }));
  }
  return [state, mergeState];
}
