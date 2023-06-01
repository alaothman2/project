import React, { useState } from "react";
import { Link } from "react-router-dom";
function Forgetpass() {
  const [email, setEmail] = useState("");
  return (
    <div>
      <div className="container">
        <div className="form-outline mb-4">
          <input
            className="form-control"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button></button>

        <div className="login">
          <h2>login</h2>
          <div className="inputBx">
            <input type="password" placeholder="new-password" />
          </div>
          <div className="inputBx">
            <input type="password" placeholder="confirm-password" />
          </div>

          <div className="inputBx">
            <Link to="/login">
              <input type="submit" placeholder="confirmed" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forgetpass;
