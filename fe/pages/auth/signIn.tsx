import React, { useContext } from "react";
import { useRouter } from "next/router";
import styles from "./styles.module.css";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { UserContext } from "@/context/userContext";

function SignInForm() {
  const { signIn, signInData, setSignInData }: any = useContext(UserContext);

  const router = useRouter();

  const routeTo = (url: string) => {
    router.replace(url);
  };

  const handleChange = (evt: any) => {
    const value = evt.target.value;
    setSignInData({
      ...signInData,
      [evt.target.name]: value,
    });
  };

  return (
    <div className={`${styles.formContainer} ${styles.signInContainer}`}>
      <form
        //  onSubmit={handleOnSubmit}
        className={styles.form}
      >
        <h1 className={styles.head1}>Нэвтрэх</h1>
        <div className={styles.socialContainer}>
          <a>
            <FcGoogle
              onClick={() => {
                routeTo("https://mail.google.com/mail/u/0/#inbox");
              }}
              size={40}
            />
          </a>
          <a>
            <BsFacebook
              onClick={() => {
                routeTo("https://www.facebook.com/login/");
              }}
              size={40}
              color={"#3b5998"}
            />
          </a>
        </div>
        <span className={styles.span1}>Бусад бүртгэлээр нэвтрэх</span>
        <input
          type="email"
          placeholder="И-мейл"
          name="email"
          value={signInData.email}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Нууц үг"
          value={signInData.password}
          onChange={handleChange}
          className={styles.input}
        />
        <a href="#" className={styles.aLink}>
          Нууц үг сэргээх?
        </a>
        <button onClick={signIn} className={styles.btn}>
          Нэвтрэх
        </button>
      </form>
    </div>
  );
}

export default SignInForm;
