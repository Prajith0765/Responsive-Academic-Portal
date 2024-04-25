import { useState } from "react";
import axios from "axios";
import Main from "./Main";


export default function Attendance(){
    const [rollno, setRollno] = useState('');
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);
    const [isBackClicked, setIsBackClicked] = useState(false);
    

    const handleBackButtonClick = () => {
        setIsBackClicked(true);
    };

    const handleRollnoChange = (event) => {
        setRollno(event.target.value);
    };

    const fetchUserData = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/academic/${rollno}`);
            setUserData(response.data);
            setError(null); // Clear any previous errors
        } catch (error) {
            console.error('Error fetching user data:', error);
            setUserData(null);
            setError('Error fetching user data'); // Set error message
        }
    };
    
    return(
        <div>
            
            {!isBackClicked && (
                
            <div>
                <h2>Attendance</h2>
            <div>
                <label>Enter Rollno:</label>
                <input type="text" value={rollno} onChange={handleRollnoChange} />
                <button onClick={fetchUserData}>Fetch Data</button>
            </div>
            {userData && (
                <div>
                    <p>Name: {userData.Name}</p>
                    <p>DSA Attendence: {userData.DSAatt}</p>
                    <p>CA Attendence: {userData.CAatt}</p>
                    <p>DBS Attendence: {userData.DBSatt}</p>
                    <h3>Overall Attendence: {userData.Attendence}</h3>
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