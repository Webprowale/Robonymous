import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
function Register() {
  return (
    <div className="container-fluid hero login">
    <div className=" mx-auto formBody">
      <div className="text-center">
      <span className="fs-1 text-black">🧸</span>
      <h2 className="fw-bold  fs-2 fText mb-5">Register</h2>
      </div>
      <form>
        <div class="mb-3 inputBody  ps-3 mx-auto">
          <span>
            <FontAwesomeIcon icon={faUser} size="2xl" color="#C33764" />
          </span>
          <input
            type="text"
            class=""
            placeholder="Username"
            name="username"
          />
        </div>

        <div class=" mb-3 inputBody  ps-3 mx-auto">
          <span>
          <FontAwesomeIcon icon={faLock} size="2xl" color="#C33764" />
          </span>
          <input type="password" class="" placeholder="Email" name="password" />
        </div>
        <button className="formBtn hero text-white px-5 py-2 rounded-pill w-100">Register</button>
      </form>
      <p className='fw-bold text-center mt-2'><Link to='/login'>Already Have an Account? Login</Link></p>
      <p className='fw-semibold regText m-2'>By using this service, you agree to our Privacy Policy, Terms of Service and any related policies. (Check Disclaimer)</p>
    </div>
  </div>
  )
}

export default Register