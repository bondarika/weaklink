// store.d.ts
import { RootState } from "./store";
import { RootAction } from "./store";

export const store: {
  getState: () => RootState;
  dispatch: (action: RootAction) => void;
};
