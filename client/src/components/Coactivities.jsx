//import axios from "axios";
import { useContext, useState } from "react";
import Main from "./Main";
import { UserContext } from "../UserContext";

export default function Coactivities(){
    
    const [error] = useState(null);
    const [isBackClicked, setIsBackClicked] = useState(false);
    const {user} = useContext(UserContext);

    const handleBackButtonClick = () => {
        setIsBackClicked(true);
    };

    

    
    return(
        <div>
            
            {!isBackClicked && (
            <div>
                
            
            {user && (
                <div>
                    <p className="text-lg font-bold ">Name:{user.Name}</p>
                    <p className="text-lg font-bold ">Rollno: {user.Rollno}</p>
                    <h1 className="text-lg font-bold mb-10" >Co-Activites</h1>
                    <p className="text-lg font-bold mb-5">{user['Co-activities']}</p>
                </div>
            )}
            {error && <p>{error}</p>}
            

            <button
                        className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded mt-3"
                        onClick={handleBackButtonClick}
                    >
                        Back
                    </button>
                    </div>
            )}
            {isBackClicked && <Main/>}
            
        </div>
    );
}