import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validationMessage, setValidationMessage] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  useEffect(() => {
    if (password !== confirmPassword) {
      setValidationMessage("Passwords do not match");
    } else {
      setValidationMessage("");
    }
  }, [password, confirmPassword]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the user is registered
    const isRegistered = localStorage.getItem("isRegistered");

    if (isRegistered === "true") {
      localStorage.setItem("password", password);
      navigate("/login");
    } else {
      setValidationMessage("User not registered.");
    }
  };

  return (
    <section className="grid h-screen place-content-center bg-black text-slate-300">
      <form onSubmit={handleSubmit}>
        <div className="mb-10 text-center text-indigo-400">
          <p>
            <span className="font-bold">Password</span> and{" "}
            <span className="font-bold">Confirm</span> validation.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-6">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            placeholder="Password"
            required
            value={password}
            onChange={handlePasswordChange}
            className="w-80 appearance-none rounded-full border-0 bg-slate-800/50 p-2 px-4 focus:bg-slate-800 focus:ring-2 focus:ring-orange-500"
          />
          <div className="relative w-80">
            <input
              required
              type={showPassword ? "text" : "password"}
              id="confirm_password"
              name="confirm_password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className="w-full appearance-none rounded-full border-0 bg-slate-800/50 p-2 px-4 focus:bg-slate-800 focus:ring-2 focus:ring-orange-500"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 p-2 text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none"
            >
              {password ? (showPassword ? "Hide" : "Show") : ""}
            </button>
          </div>
          {validationMessage && (
            <p
              id="validation"
              className="text-center text-orange-500 italic text-sm"
            >
              {validationMessage}
            </p>
          )}
          <div className="flex">
            <button type="submit" className="gdbutton">
              Submit
            </button>
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="rounded-full p-2 px-4 text-white "
            >
              Back to login
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ForgetPassword;
