




import React, { useState } from "react";
import "./Register.css";
import { eye } from "../../utils/images";

const Register = () => {
  const [showLang, setShowLang] = useState(false);
  const [closing, setClosing] = useState(false);

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [withdrawPassword, setWithdrawPassword] = useState("");
  const [inviteCode, setInviteCode] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showWithdraw, setShowWithdraw] = useState(false);

  const openLang = () => {
    setShowLang(true);
    setClosing(false);
  };

  const closeLang = () => {
    setClosing(true);
    setTimeout(() => {
      setShowLang(false);
      setClosing(false);
    }, 600);
  };

  const onlyNumbers = (value, max = 10) =>
    value.replace(/[^0-9]/g, "").slice(0, max);

  return (
    <>
      <div className="content">
        <div className="main-register-div">

          {/* Language */}
          <p onClick={openLang}>Language</p>

          <div className="login_con">
            <h3 className="login_title">
              User Registration
              <p className="inviteCode"><span>e25482f1</span></p>
            </h3>

            {/* Phone */}
            <div className={`login_input ${phone ? "filled" : ""}`}>
              <span className="phoneText">+91</span>
              <div className="login_input_t">
                {!phone && <span className="placeholder">Enter Phone Number</span>}
                <input
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  value={phone}
                  autoComplete="off"
                  onChange={(e) => setPhone(onlyNumbers(e.target.value))}
                />
              </div>
            </div>

            {/* Password */}
            <div className="login_input">
              <div className="login_input_t type_input">
                {!password && <span className="placeholder">New Password</span>}
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  maxLength={20}
                  autoComplete="off"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="login_input_img" onClick={() => setShowPassword(!showPassword)}>
                <img src={eye} alt="eye" />
              </div>
            </div>

            {/* Confirm Password */}
            <div className="login_input">
              <div className="login_input_t type_input">
                {!confirmPassword && (
                  <span className="placeholder">Confirm Password</span>
                )}
                <input
                  type={showConfirm ? "text" : "password"}
                  value={confirmPassword}
                  maxLength={20}
                  autoComplete="off"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className="login_input_img" onClick={() => setShowConfirm(!showConfirm)}>
                <img src={eye} alt="eye" />
              </div>
            </div>

            {/* Withdrawal Password */}
            <div className="login_input">
              <div className="login_input_t type_input">
                {!withdrawPassword && (
                  <span className="placeholder">Withdrawal Password</span>
                )}
                <input
                  type={showWithdraw ? "text" : "password"}
                  value={withdrawPassword}
                  maxLength={20}
                  autoComplete="off"
                  onChange={(e) => setWithdrawPassword(e.target.value)}
                />
              </div>
              <div className="login_input_img" onClick={() => setShowWithdraw(!showWithdraw)}>
                <img src={eye} alt="eye" />
              </div>
            </div>

            {/* Invitation Code */}
            <div className="login_input">
              <div className="login_input_t type_input">
                {!inviteCode && (
                  <span className="placeholder">Enter Invitation Code</span>
                )}
                <input
                  type="text"
                  value={inviteCode}
                  autoComplete="off"
                  onChange={(e) => setInviteCode(e.target.value)}
                />
              </div>
            </div>

            <button className="register_btn">Register</button>
          </div>
        </div>
      </div>

      {/* Language Modal */}
      {showLang && (
        <div className={`lang-overlay ${closing ? "fade-out" : ""}`} onClick={closeLang}>
          <div
            className={`lang-dropdown ${closing ? "close" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <p onClick={closeLang}>English</p>
            <p onClick={closeLang}>हिंदी</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
