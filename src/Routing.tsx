// Routing.tsx
import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import UserPage from "./UserPage";
import AdminPage from "./AdminPage";
import "./styles.css";

const Routing: React.FC = () => {
  const location = useLocation();

  return (
    <Provider store={store}>
      <div>
        {location.pathname === "/" && (
          <nav>
            <li>
              <Link to="/user">Показать участникам</Link>
            </li>
            <li>
              <Link to="/admin">Кнопочки организаторов</Link>
            </li>
          </nav>
        )}

        <hr />


          <Routes>
            <Route path="/user" element={<UserPage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>

      </div>
    </Provider>
  );
};

export default Routing;
