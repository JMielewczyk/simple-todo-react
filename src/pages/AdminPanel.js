import React from "react";
import "../styles/AdminPanel.css";

const AdminPanel = () => {
  return (
    <div className="adminPanel-wrapper">
      <div className="inputs-wrapper">
        <label>
          Login:
          <input type="text" />
        </label>
        <label>
          Hasło:
          <input type="password" />
        </label>
      </div>
      <button>Zaloguj</button>
    </div>
  );
};

export default AdminPanel;
