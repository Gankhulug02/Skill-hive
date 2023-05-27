import { UserContext } from "@/context/userContext";
import React, { useContext, useState } from "react";

import SignInForm from "./signIn";
import SignUpForm from "./signUp";

import styles from "./styles.module.css";

export default function App() {
  const { whatRole, signUpData }: any = useContext(UserContext);

  const [type, setType] = useState("signIn");

  const handleOnClick = (text: string) => {
    if (text !== type) {
      setType(text);
      return;
    }
  };

  return (
    <div className={styles.body}>
      <div
        className={`${styles.container} ${
          type === "signUp" ? styles.rightPanelActive : ""
        }`}
        id="container"
      >
        <SignUpForm />
        <SignInForm />
        <div className={styles.overlayContainer}>
          <div className={styles.overlay}>
            <div className={`${styles.overlayPanel} ${styles.overlayLeft}`}>
              <h1 className={styles.head1}>Welcome Back!</h1>
              <p className={styles.par1}>
                To keep connected with us please login with your personal info
              </p>
              <button
                className={`${styles.ghost} ${styles.btn}`}
                id="signIn"
                onClick={() => handleOnClick("signIn")}
              >
                Нэвтрэх
              </button>
              <div className={styles.switchBtn}>
                <button
                  className={`${styles.ghost} ${styles.btn1}`}
                  id="freelancer"
                  onClick={() => {
                    whatRole("Freelancer");
                  }}
                  style={{
                    backgroundColor:
                      signUpData.role === "Freelancer" ? "white" : "#ff4b2b",
                    color:
                      signUpData.role === "Freelancer" ? "#ff4b2b" : "white",
                  }}
                >
                  Зөгий
                </button>
                <button
                  className={`${styles.ghost} ${styles.btn1}`}
                  id="client"
                  style={{
                    backgroundColor:
                      signUpData.role === "Client" ? "white" : "#ff4b2b",
                    color: signUpData.role === "Client" ? "#ff4b2b" : "white",
                  }}
                  onClick={() => {
                    whatRole("Client");
                  }}
                >
                  Зөгийчин
                </button>
              </div>
            </div>
            <div className={`${styles.overlayPanel} ${styles.overlayRight}`}>
              <h1 className={styles.head1}>Hello, Friend!</h1>
              <p className={styles.par1}>
                Enter your personal details and start journey with us
              </p>
              <button
                className={`${styles.ghost} ${styles.btn}`}
                id="signUp"
                onClick={() => handleOnClick("signUp")}
              >
                Бүртгүүлэх
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
