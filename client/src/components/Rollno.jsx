import { useState } from "react";

import Popup from "./Popup";
import Main from "./Main";
import axios from "axios";



export default function Rollno() {
  const [isBackClicked, setIsBackClicked] = useState(false);
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);
  const [Rollno, setRollno] = useState("");
  const [error, setError] = useState(false); // State to track input error
  const [errorMessage, setErrorMessage] = useState("");
  
  const handleSubmitCLciked = async () => {
    const rollNumber = document.getElementById("rollNumber").value; // Get the value of roll number input
    if (!rollNumber) {
      setError(true); // Set error state if input is empty
    }else {
      try {
        // Make Axios GET request
        const response = await axios.post('/rollno',{
          Rollno,
        });
        
        console.log(response.data); // Log response data
        setIsSubmitClicked(true);
        setIsBackClicked(false);
      } catch (error) {
        
        console.error('Error fetching data:', error);
        setError(false); // Set error state to display error message
        setErrorMessage("An error occurred while fetching data. Please try again later."); // Set error message
        alert('Login Failed');
      }
    }
  }; 
  
  async function login(ev){
    ev.preventDefault();
    try{
       await axios.post('/rollno',{
        Rollno,
      });
      
      alert("Login Successful");
    } catch(e){
      alert("Login Failed");
    }
    
  }

 

  return (
    <div>
      {!isSubmitClicked && !isBackClicked && (
        <div className="mb-4">
          <p className="text-lg font-semibold" >Enter Your Roll Number</p>
          {error && <p className="text-red-500">{errorMessage}</p>} {/* Error message */}
          <input
            type="text"
            id="rollNumber"
            value={Rollno}
            onChange={ev => setRollno(ev.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 w-full mt-2 focus:outline-none focus:border-blue-500"
            onSubmit={login}
          />
          {error && <p className="text-red-500">Please enter your roll number.</p>} {/* Error message */}
          <button
            className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded mt-3"
            onClick={handleSubmitCLciked}
            
          >
            Submit
          </button>
          
        </div>
      )}
      {isBackClicked && <Popup />}

      {isSubmitClicked && <Main />}
    </div>
  );
}
