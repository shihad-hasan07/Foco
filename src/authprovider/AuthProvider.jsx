import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const authContext=createContext()

const AuthProvider = ({allRoutes}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    // create user in firebase
    const signup=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // and img url and username upon signup
    const addNameImage=(name,image)=>{
       return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:image
        })
    }

    // login user with email and password
    const login=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

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

    // logout all user
    const logOut=()=>{
        signOut(auth)
    }

    useEffect(()=>{
        const anyChanges=onAuthStateChanged(auth,(user)=>{
            user?setUser(user):setUser(null)
            setLoading(false)

            return()=>{
                anyChanges()
            }
        })
    },[])

    // set neccesery things to send using context api....
    const contextlist={
        signup,login,addNameImage,
        googleLogin,githubLogin,
        logOut,
        loading,
        user,
    }
    return (
        <div>
            <authContext.Provider value={contextlist}>{allRoutes}</authContext.Provider>
        </div>
    );
};

export default AuthProvider;