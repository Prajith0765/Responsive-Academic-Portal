import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";
import {  RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import {auth} from "./FireBase";


export const UserContext = createContext({});

UserContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
    rollno: PropTypes.string, // Add rollno prop type
    
  };


export function UserContextProvider({children}){
    
    const [user, setUser] = useState(null);
    
    function setUpRecaptcha(number) {
        const recaptchaVerifier = new RecaptchaVerifier(
            auth,
          "recaptcha-container",
          {},
          
        );
        recaptchaVerifier.render();
        console.log(number);
        return signInWithPhoneNumber(auth, number, recaptchaVerifier);
      }
        
    
   
    
    return(
        <UserContext.Provider value={{user,setUser,setUpRecaptcha}}>
            {children}
            
        </UserContext.Provider>  
    );
}

export function useUserAuth() {
    return useContext(UserContext);
  }