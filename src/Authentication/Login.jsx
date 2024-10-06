import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { auth, db } from "./firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import "./css/login.css";
import { SignInWithGoogle } from "./signInWithGoogle";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save login status and user name (or email) to localStorage
      localStorage.setItem("isAuthenticated", "true");
      
      localStorage.setItem("username", user.displayName || user.email.split("@")[0]);
      
      
      toast.success("User Logged in Successfully", {
        position: "top-center",
      });
      window.location.href = "/dashboard";
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "top-center",
      });
    }
  };

  const handleClick=(e)=>{
    e.preventDefault();
    toast.success("User Redirected to Sign up Page",{
      position:"top-center",
    })

    window.location.href="/register"
  }

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <section className="container forms">
        <div className="form login">
          <div className="form-content">
            <header>Login</header>
            <form onSubmit={handleLogin}>
              <div className="field input-field">
                <input
                  type="email"
                  className="input"
                  placeholder="Enter Email..."
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="field input-field">
                <input
                  type="password"
                  className="password"
                  placeholder="Enter password..."
                  onChange={(e) => setPassword(e.target.value)}
                />
                {/* <span class="material-symbols-outlined" id="eye-icon">visibility_off</span> */}
              </div>
             
              <div className="field button-field">
                <button type="submit">Login</button>
              </div>

              <div className="form-link">
                <span>
                  Already have an account?{" "}
                 
                  <a href="#" className="signup-link" onClick={handleClick}>
                    Sign up
                  </a>
                </span>
              </div>
            </form>
          </div>
          <div className="line"></div>

          <div className="media-options">
            <SignInWithGoogle/>
          </div>
        </div>
      </section>
    </>
  );







  
};
