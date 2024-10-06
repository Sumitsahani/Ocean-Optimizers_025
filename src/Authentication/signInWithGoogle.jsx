import React from 'react';
import googleImage from './images/sign-in-with-google.png';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from './firebase';

export const SignInWithGoogle = () => {

    const googleLogin=()=>{
        const provider=new GoogleAuthProvider()
        signInWithPopup(auth,provider).then(async(result)=>{
            console.log(result)
            if(result.user){
                window.location.href="/dashboard"
            }
        })
    }

    return (
        <div>
            <p className="continue-p" style={{display:"flex", justifyContent:"center"}}>-- Or continue with --</p>
            <div style={{display:"flex", justifyContent:"center",cursor:"pointer"}} onClick={googleLogin}>
                <img src={googleImage} width={"60%"} alt="Sign in with Google" />
            </div>
        </div>
    );
};
