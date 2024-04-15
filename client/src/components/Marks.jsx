import { useState, useEffect } from 'react';

export default function Marks() {
    const [marks, setMarks] = useState({});

    

    useEffect(() => {
        fetchMarks();
    }, []);

    const fetchMarks = () => {
        try {
            const token = localStorage.getItem('token');
            console.log('Token:', token);
            
            const response =  fetch('http://localhost:5173', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
    
            if (!response.ok) {
                throw new Error('Failed to fetch marks data');
            }
    
            const data =  response.json();
            setMarks(data);
        } catch (error) {
            console.error('Error fetching marks data:', error);
        }
    };
    
    return (
        <div>
            <h1>Marks</h1>
            <p>DSA: {marks.DSA}</p>
            <p>CA: {marks.CA}</p>
            <p>DBS: {marks.DBS}</p>
            <p>CGPA: {marks.CGPA}</p>
            
            
        </div>
    );
}
