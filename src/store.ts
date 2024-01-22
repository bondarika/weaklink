import { createStore } from "redux";

export interface RootState {
  currentAmount: number;
  bank: number;
  textColorAmount: number | null; // Новое поле для хранения числа, цвет которого нужно изменить
}

type RootAction =
  | { type: "UPDATE_AMOUNT"; payload: number }
  | { type: "RESET_AMOUNT" }
  | { type: "RESET_TEXT_COLOR" }
  | { type: "BANK_UPDATE"; payload: number }
  | { type: "CHANGE_TEXT_COLOR"; payload: number | null };

const loadState = (): RootState | undefined => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state: RootState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch {
    // ignore write errors
  }
};

const initialState: RootState = loadState() || {
  currentAmount: 0,
  bank: 0,
  textColorAmount: null,
};

const rootReducer = (state = initialState, action: RootAction): RootState => {
  switch (action.type) {
    case "UPDATE_AMOUNT":
      return { ...state, currentAmount: state.currentAmount + action.payload };
    case "RESET_AMOUNT":
      return { ...state, currentAmount: 0 };
    case "BANK_UPDATE":
      return { ...state, bank: state.bank + action.payload, currentAmount: 0 };
    case "CHANGE_TEXT_COLOR":
      return { ...state, textColorAmount: action.payload };
    case "RESET_TEXT_COLOR":
      return { ...state, textColorAmount: null };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
