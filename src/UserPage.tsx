// UserPage.tsx
import React from "react";
import "./App.css";
import { useSelector } from "react-redux";
import { RootState } from "./store";

const UserPage: React.FC = () => {
  const currentAmount = useSelector((state: RootState) => state.currentAmount);
  const bank = useSelector((state: RootState) => state.bank);
  const textColorAmount = useSelector(
    (state: RootState) => state.textColorAmount
  );

  const getColorForAmount = (amount: number): string => {
    return amount === textColorAmount ? "#960200" : "#DBFCFF";
  };

  return (
    <div>
      <div className="card">
        <h1 style={{ color: getColorForAmount(50000) }}>50 000</h1>
        <p style={{ color: getColorForAmount(40000) }}>40 000</p>
        <p style={{ color: getColorForAmount(30000) }}>30 000</p>
        <p style={{ color: getColorForAmount(20000) }}>20 000</p>
        <p style={{ color: getColorForAmount(10000) }}>10 000</p>
        <p style={{ color: getColorForAmount(5000) }}>5 000</p>
        <p style={{ color: getColorForAmount(2000) }}>2 000</p>
        <p style={{ color: getColorForAmount(1000) }}>1 000</p>
      </div>
      <div>
        <p>Текущая сумма</p>
        <p>{currentAmount}</p>
        <p>Банк</p>
        <p>{bank}</p>
      </div>
    </div>
  );
};
export default UserPage;