import { useReducer } from "react";

const mergeReducer = <TState extends Record<string, unknown>>(
  oldState: TState,
  newState: Partial<TState>
): TState => ({ ...oldState, ...newState });

export const useSetState = <TState extends Record<string, unknown>>(
  initialState: TState
): readonly [TState, React.Dispatch<Partial<TState>>] => {
  const [state, setState] = useReducer<React.Reducer<TState, Partial<TState>>>(
    mergeReducer,
    initialState
  );

  return [state, setState] as const;
};
