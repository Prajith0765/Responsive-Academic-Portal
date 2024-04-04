import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Popup from "./Popup";
import Main from "./Main";
import axios from "axios";

export default function Rollno() {
  const [isBackClicked, setIsBackClicked] = useState(false);
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);
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
      }
    }
  };
 
  function login(ev){
    ev.preventDefault();
    axios.post('/rollno',{
      Rollno,
    });
  }

  const navigate = useNavigate();

  return (
    <div>
      {!isSubmitClicked && !isBackClicked && (
        <div className="mb-4">
          <p className="text-lg font-semibold" >Enter Your Roll Number</p>
          {error && <p className="text-red-500">{errorMessage}</p>} {/* Error message */}
          <input
            type="text"
            id="rollNumber"
            className="border border-gray-300 rounded-md px-4 py-2 w-full mt-2 focus:outline-none focus:border-blue-500"
            onSubmit={login}
          />
          {error && <p className="text-red-500">Please enter your roll number.</p>} {/* Error message */}
          <button
            className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleSubmitCLciked}
            
          >
            Submit
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mt-4 ml-2"
            onClick={() => {
              navigate("/Popup");
              
            }}
          >
            Back
          </button>
        </div>
      )}
      {isBackClicked && <Popup />}

      {isSubmitClicked && <Main />}
    </div>
  );
}
