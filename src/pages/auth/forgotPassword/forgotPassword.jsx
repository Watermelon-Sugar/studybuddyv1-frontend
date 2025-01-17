import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ForgotPassword() {
  const navigate = useNavigate();

  const handleSubmitEmail = (e) => {
    e.preventDefault();
    navigate('/account/login/forgotpassword/enterotp');
  };

  return (
    <div className="mt-[3rem] flex flex-col justify-center gap-[1rem] ">
      <div className="mb-[2.5em] flex flex-col gap-[1rem]">
        <h2 className="text-center text-[2rem] font-semibold sm:text-[1.5rem]">
          Forgot Password
        </h2>
        <p className="text-center">
          A Four-Digit code will be sent to your mail
        </p>
      </div>
      <form
        action=""
        className="flex flex-col gap-[2rem]"
        onSubmit={handleSubmitEmail}
      >
        <div className="form-group mt-[3rem]">
          <label htmlFor="email">
            Enter the email address you registered with
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="seun@altcamp.com"
            className="input"
            required
          />
        </div>

        <button className="auth-btn">Send Password Reset Code</button>
      </form>
    </div>
  );
}
