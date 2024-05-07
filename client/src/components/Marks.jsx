import { useContext, useState } from 'react';
//import axios from 'axios';
import Main from './Main';
import { UserContext } from '../UserContext';

export default function Marks() {

    
    const [error] = useState(null);
    const [isBackClicked, setIsBackClicked] = useState(false);
    const {user} = useContext(UserContext);

    const handleBackButtonClick = () => {
        setIsBackClicked(true);
    };

   

    return (
        <div>
            {!isBackClicked && (
                <div>
                    
                    
                   
                    {user && (
                        <div>
                            <p className="text-lg font-bold">Name: {user.Name}</p>
                            <p className="text-lg font-bold" >Rollno: {user.Rollno}</p>
                            <h1 className="text-lg font-bold mb-10">Marks</h1>
                            <p className="text-lg  mb-2">DSA: {user.DSA}</p>
                            <p className="text-lg  mb-2">CA: {user.CA}</p>
                            <p className="text-lg  mb-2">DBS: {user.DBS}</p>
                            <h3 className="text-lg font-bold mb-2">CGPA: {user.CGPA}</h3>
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
            {isBackClicked && <Main />}
        </div>
    );
}
