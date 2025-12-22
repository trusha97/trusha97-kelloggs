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
          <div className="bj">
            <div className="lang">
              <p onClick={openLang}>Language</p>

              <div className="login_bj">
                <div className="inner-bg-div"></div>
              </div>

              <div className="logo">
                <div className="logoimage"></div>
              </div>
            </div>
          </div>
          <div className="login_con">
            <h3 className="login_title">User Registration
              <p className="inviteCode">
                <span>{inviteCode}</span>
              </p>
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
            {/* <div className="login_input">
              <div className="login_input_t type_input">
                <span className="invite_icon">
                  <svg
                    className="invite_svg"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#9B9B9B"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H7Zm8-1a1 1 0 0 1 1-1h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 0 1-1-1Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                {!inviteCode && (
                  <span className="placeholder inline-placeholder">
                    Enter Invitation Code
                  </span>
                )}
                <input
                  type="text"
                  value={inviteCode}
                  autoComplete="off"
                  onChange={(e) => setInviteCode(e.target.value)}
                />
              </div>
            </div> */}

            <div className="login_input">
              <div className="login_input_t type_input">
                <div>
                  <svg
                    className="invite_svg"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#9B9B9B"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H7Zm8-1a1 1 0 0 1 1-1h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 0 1-1-1Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="aaa-input">
                  {!inviteCode && (
                    <span className="placeholder inline-placeholder">
                      Enter Invitation Code
                    </span>
                  )}
                  <input
                    type="text"
                    value={inviteCode}
                    autoComplete="off"
                    maxLength={12}
                    onChange={(e) => setInviteCode(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <button className="register_btn">Register</button>
            <div className="register-text">
            <h3>I already have an account</h3>
          </div>
          </div>
          
        </div>
      </div>



      {showLang && (
        <div
          className={`lang-overlay ${closing ? "fade-out" : ""}`}
          onClick={closeLang}
        >
          <div
            className={`lang-dropdown ${closing ? "close" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <p className="line-language" onClick={closeLang}>English</p>
            <p onClick={closeLang}>हिंदी</p>
          </div>
        </div>
      )}

    </>
  );
};

export default Register;
