import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser,faEnvelope} from '@fortawesome/free-solid-svg-icons';
function Login() {
  return (
    <div className="container-fluid p-5 hero">
      <div className="container p-5 bg-white">
        <div className="text-center">
          <h2 className="fw-bold  fs-2 fText">Member Login</h2>
        </div>
        <form>
          <div class="input-group mb-3 p-3 rounded-pill bg-white border-0 outline-0">
            <span class="input-group-text" id="username-addon">
            <FontAwesomeIcon icon={faUser} />
            </span>
            <input
              type="text"
              class="form-control p-3"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="username-addon"
              name="username"
            />
          </div>

          <div class="input-group mb-3 p-3 rounded-pill bg-white border-0 outline-0">
            <span class="input-group-text" id="email-addon">
            <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <input
              type="email"
              class="form-control"
              placeholder="Email"
              aria-label="Email"
              aria-describedby="email-addon"
              name="email"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
