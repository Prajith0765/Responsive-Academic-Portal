import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Academic() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        try {
            const response = await axios.get('/user-data');
            if (response.data) { 
                setUserData(response.data);
            } else {
                console.error('User data is null');
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    return (
        <div>
            <h1>Academic Performance</h1>
            {userData && (
                <div>
                    <p>Name: {userData.Name}</p>
                    {userData.Rollno}
                </div>
            )}
            {!userData && <p>Loading...</p>}
            <div className="button-container">
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded h-10 w-30 mt-64">Back</button>
            </div>
        </div>
    );
}
