// AdminPage.tsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  resetAmount,
  updateAmount,
  bankUpdate,
  changeTextColor,
  resetTextColor,
} from "./actions";
import { RootState } from "./store";

const AdminPage: React.FC = () => {
  const dispatch = useDispatch();
  const currentAmount = useSelector((state: RootState) => state.currentAmount);

  const handleBankUpdate = () => {
    dispatch(bankUpdate(currentAmount));
    dispatch(resetAmount());
  };

  const handleTextColorChange = (amount: number) => {
    dispatch(changeTextColor(amount));
  };

    const handleResetTextColor = () => {
      dispatch(resetTextColor());
    };

  return (
    <div>
      <h2>Админка</h2>
      <div className="button-style">
        <div className="plus-buttons">
          <button onClick={() => dispatch(updateAmount(1000))}>
            Увеличить на 1000
          </button>
          <button onClick={() => dispatch(updateAmount(2000))}>
            Увеличить на 2000
          </button>
          <button onClick={() => dispatch(updateAmount(5000))}>
            Увеличить на 5000
          </button>
          <button onClick={() => dispatch(updateAmount(10000))}>
            Увеличить на 10000
          </button>
          <button onClick={() => dispatch(updateAmount(20000))}>
            Увеличить на 20000
          </button>
          <button onClick={() => dispatch(updateAmount(30000))}>
            Увеличить на 30000
          </button>
          <button onClick={() => dispatch(updateAmount(40000))}>
            Увеличить на 40000
          </button>
          <button onClick={() => dispatch(updateAmount(50000))}>
            Увеличить на 50000
          </button>
        </div>
        <div className="color-buttons">
          <button onClick={() => handleTextColorChange(1000)}>
            Выбрать 1 000
          </button>
          <button onClick={() => handleTextColorChange(2000)}>
            Выбрать 2 000
          </button>
          <button onClick={() => handleTextColorChange(5000)}>
            Выбрать 5 000
          </button>
          <button onClick={() => handleTextColorChange(10000)}>
            Выбрать 10 000
          </button>
          <button onClick={() => handleTextColorChange(20000)}>
            Выбрать 20 000
          </button>
          <button onClick={() => handleTextColorChange(30000)}>
            Выбрать 30 000
          </button>
          <button onClick={() => handleTextColorChange(40000)}>
            Выбрать 40 000
          </button>
          <button onClick={() => handleTextColorChange(50000)}>
            Выбрать 50 000
          </button>
        </div>
      </div>
      <div className="other">
        <button onClick={() => dispatch(resetAmount())}>
          Сбросить счетчик
        </button>
        <button onClick={handleBankUpdate}>В банк</button>
        <button onClick={handleResetTextColor}>Сбросить выбор</button>
      </div>
    </div>
  );
};

export default AdminPage;
