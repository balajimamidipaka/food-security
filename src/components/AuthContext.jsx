import { createContext, useContext, useState } from "react";

export const AuthContext=createContext();
export const useAuth=()=>useContext(AuthContext)

export default function AuthProvider({children}){
    const [isAuthenticated,setAuthenticated]=useState(false)
    const [username,setUsername]=useState(null)
    function login(username,password){
        if(username==='balaji' && password==='123'){
            setAuthenticated(true)
            setUsername(username)
            return true
        }
        else{
            setAuthenticated(false)
            setUsername(null)
            return false
        }
    }
    function logout(){
        setAuthenticated(false)
        setUsername(null)
    }
    return(
        <AuthContext.Provider value={{isAuthenticated,username,login,logout}}>
            {children}
        </AuthContext.Provider>
    )

}