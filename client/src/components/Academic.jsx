import{ useState } from 'react';
import axios from 'axios';





export default function Academic() {
    const [rollno, setRollno] = useState('');
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);
   
    

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

    return (
        <div>
            <h1 >Academic Performance</h1>
            <div>
                <label>Enter Rollno:</label>
                <input type="text" value={rollno} onChange={handleRollnoChange} />
                <button onClick={fetchUserData}>Fetch Data</button>
            </div>
            {userData && (
                <div>
                    <p>Name: {userData.Name}</p>
                    <p>Rollno: {userData.Rollno}</p>
                    <p>Academic Performance: {userData.AcademicPerformance}</p>
                </div>
            )}
            {error && <p>{error}</p>}
            
            
        </div>
        
    );
}
