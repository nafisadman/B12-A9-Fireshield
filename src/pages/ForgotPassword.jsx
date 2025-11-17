import React, { use } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useLocation } from "react-router";

const ForgotPassword = () => {
  const { user } = use(AuthContext);
  const location = useLocation();
  const email = location.state?.email || "";
//   console.log(user.email);
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Reset Password now!</h1>
            <p className="py-6">
              Clicking the button will take you to your gmail
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" className="input w-full" defaultValue={email} placeholder="Email"/>
                <a className="btn btn-neutral mt-4" href="https://mail.google.com/" target="_blank">Reset Password</a>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
