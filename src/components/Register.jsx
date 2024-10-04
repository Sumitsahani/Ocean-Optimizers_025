import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth, db } from "./firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import "./css/login.css";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          
          firstName: fname,
          lastName: lname,
        });
      }
      toast.success("User Registered Successfully",{
        position:"top-center",
      })

      
    } catch (error) {
      console.log(error.message);
      toast.error(error.message,{
        position:"top-center",
      })
    }
  };

  const handleClick=(e)=>{
    e.preventDefault()

    window.location.href="/login"
  }

  return (
    <section className="container forms">
            <div className="form login">
              <div className="form-content">
                 <header>Sign Up</header>
    <form onSubmit={handleRegister}>
      
      <div className="field input-field">
        <input
          type="text"
          className="form-control"
          placeholder="Enter First name..."
          onChange={(e) => setFname(e.target.value)}
        />
      </div>
      <div className="field input-field">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Last name..."
          onChange={(e) => setLname(e.target.value)}
        />
      </div>
      <div className="field input-field">
        <input
          type="email"
          className="form-control"
          placeholder="Enter Email..."
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="field input-field">
        <input
          type="password"
          className="form-control"
          placeholder="Enter password..."
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="field button-field">
        <button type="submit">Sign up</button>

      </div>


      <div className="form-link">
                <span>
                  Already Registered?
                 
                  <a href="#" className="login-link" onClick={handleClick}>
                    Login
                  </a>
                </span>
              </div>
    </form>
    </div>
    </div>
    </section>
  );
};


