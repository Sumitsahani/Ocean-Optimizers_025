import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth, db } from "./firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

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

  return (
    <form onSubmit={handleRegister}>
      <h1>Sign up</h1>
      <div className="form-group">
        <label htmlFor="fname">First name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter First name..."
          onChange={(e) => setFname(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="lname">Last name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Last name..."
          onChange={(e) => setLname(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter Email..."
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password..."
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
