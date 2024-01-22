// actions.ts


export const updateAmount = (amount: number) => ({
  type: "UPDATE_AMOUNT",
  payload: amount,
});

export const resetAmount = () => ({
  type: "RESET_AMOUNT",
});

export const bankUpdate = (amount: number) => ({
  type: "BANK_UPDATE",
  payload: amount,
});

export const changeTextColor = (amount: number) => ({
  type: "CHANGE_TEXT_COLOR",
  payload: amount,
});
export const resetTextColor = () => ({
  type: "RESET_TEXT_COLOR",
});