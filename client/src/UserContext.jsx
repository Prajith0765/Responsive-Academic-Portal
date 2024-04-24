import { createContext, useState } from "react";
import PropTypes from "prop-types";
import {  RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import {auth} from "./FireBase";



export const UserContext = createContext({});

UserContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
    rollno: PropTypes.string, // Add rollno prop type
    
  };


export function UserContextProvider({children, rollno}){

    const [user, setUser] = useState(rollno);
    
    function setUpRecaptcha(number){
        const recaptchaVerifier = new RecaptchaVerifier(
            "recaptcha-container",
              {},
              auth
            );
            recaptchaVerifier.render();
            return signInWithPhoneNumber(auth, number, recaptchaVerifier);
        }
        
    
   
    
    return(
        <UserContext.Provider value={{user,setUser,setUpRecaptcha}}>
            {children}
            
        </UserContext.Provider>  
    );
}