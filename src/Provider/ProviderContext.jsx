/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import {  FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from './../Firebase/firebase.config';
import {  useNavigation } from 'react-router-dom';

export const ContextData = createContext()
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();



const ProviderContext = ({children}) => {
    
    const [user,setUser] = useState({})
    const [loading,setLoading] = useState(true)

    const register = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const login = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout = ()=>{
         setLoading(true);
         return signOut(auth);
    }

    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    const facebookSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth,facebookProvider);
    }


    useEffect(()=>{
        const unsubscribe = ()=>{
            onAuthStateChanged(auth,(currentUser)=>{
                setUser(currentUser);
                setLoading(false);
                console.log(currentUser);
            })
        }
        return ()=> unsubscribe()
    },[])









    const data = {
        user,loading,register,login,logout,googleSignIn,facebookSignIn
    }




    return (
        <ContextData.Provider value={data}>
            {children}
        </ContextData.Provider>
    );
};

export default ProviderContext;