import React, { useContext } from "react";
import { useRouter } from "next/router";
import { UserContext } from "@/context/userContext";
import styles from "./styles.module.css";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
function SignUpForm() {
  const { signUpData, setSignUpData, signUp, role }: any =
    useContext(UserContext);

  const router = useRouter();
  const routeTo = (url: string) => {
    router.replace(url);
  };

  // const [state, setState] = React.useState({
  //   name: "",
  //   email: "",
  //   password: "",
  //   role: "freelancer",
  // });

  const handleChange = (evt: any) => {
    const value = evt.target.value;
    setSignUpData({
      ...signUpData,
      [evt.target.name]: value,
    });
  };

  const handleOnSubmit = (evt: any) => {
    evt.preventDefault();

    const { name, email, password } = signUpData;
    alert(
      `You are sign up with name: ${name} email: ${email} and password: ${password}`
    );

    for (const key in signUpData) {
      setSignUpData({
        ...signUpData,
        [key]: "",
      });
    }
  };

  return (
    <div className={`${styles.formContainer} ${styles.signUpContainer}`}>
      <form onSubmit={handleOnSubmit} className={styles.form}>
        <h1 className={styles.head1}>Бүртгэл үүсгэх</h1>
        <div className={styles.socialContainer}>
          <a className={`${styles.social} ${styles.aLink}`}>
            <FcGoogle
              onClick={() => {
                routeTo("https://mail.google.com/mail/u/0/#inbox");
              }}
              size={40}
            />
          </a>
          <a href="#" className={`${styles.social} ${styles.aLink}`}>
            <BsFacebook
              onClick={() => {
                routeTo("https://www.facebook.com/login/");
              }}
              size={40}
              color={"#3b5998"}
            />
          </a>
        </div>
        <span className={styles.span1}>Эсвэл и-мейл ашиглан бүртгүүлэх</span>
        <input
          type="text"
          name="name"
          value={signUpData.name}
          onChange={handleChange}
          placeholder="Нэр"
          className={styles.input}
        />
        <input
          type="email"
          name="email"
          value={signUpData.email}
          onChange={handleChange}
          placeholder="И-мейл"
          className={styles.input}
        />
        <input
          type="password"
          name="password"
          value={signUpData.password}
          onChange={handleChange}
          placeholder="Нууц үг"
          className={styles.input}
        />
        <button onClick={signUp} className={styles.btn}>
          Бүртгүүлэх
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
