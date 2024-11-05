import { createContext,useState,useEffect } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [auth_userdetails,setAuth] = useState(null);

    useEffect(() => {
      const stored_user=localStorage.getItem('auth_userdetails');
      if (stored_user) {
        setAuth(JSON.parse(stored_user));
      }
      
    }, [])
    

    return (
        <AuthContext.Provider value={{auth_userdetails,setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;