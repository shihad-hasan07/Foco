import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";
import { GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";

export const authContext=createContext()

const AuthProvider = ({allRoutes}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)


    // google login system....
    const googleLoginProvider=new GoogleAuthProvider()
    const googleLogin=()=>{
        return signInWithPopup(auth,googleLoginProvider)
    }

    // github login system
    const githubLoginProvider = new GithubAuthProvider();
    const githubLogin=()=>{
        return signInWithPopup(auth,githubLoginProvider)
    }

    useEffect(()=>{
        const anyChanges=onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(user)
            }
            else{
                setUser(null)
            }
            setLoading(false)

            return()=>{
                anyChanges()
            }
        })
    },[])

    // set neccesery things to send using context api....
    const contextlist={
        googleLogin,
        githubLogin,
        user
    }
    return (
        <div>
            <authContext.Provider value={contextlist}>{allRoutes}</authContext.Provider>
        </div>
    );
};

export default AuthProvider;