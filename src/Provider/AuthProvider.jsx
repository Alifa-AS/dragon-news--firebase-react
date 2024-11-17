import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, 
    getAuth, 
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut} from "firebase/auth";
import app from "../Firebase/firebase.config";


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log(user)
    
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogin = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        return signOut(auth);
    }


    const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        userLogin
    };
   

    // observer
    useEffect(() => {
      const unsubscribe =   onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return() => {
            unsubscribe(); //user harai jabe na
        }
    },[])

    return (
        // share value
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;