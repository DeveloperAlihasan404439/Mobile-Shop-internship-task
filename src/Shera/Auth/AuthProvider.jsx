import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "./Firebase";

export const authContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const provider = new GoogleAuthProvider()

    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleUser = ()=>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const logOut = ()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        const subscribe = onAuthStateChanged(auth, creent=>{
            setUser(creent)
            setLoading(false)
        })
        return()=>{
            subscribe()
        }
    },[])
    const authInfo = {user,loading,createUser,loginUser,googleUser,logOut}
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;