import { useContext, useState } from "react";
import Main from "./Main";
import { UserContext } from "../UserContext";
import {useUserAuth} from "../UserContext";
import {useNavigate} from "react-router-dom";

export default function OTPverify() {
    const [isSubmitClicked, setIsSubmitClicked] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [OTP, setOTP] = useState("");
    const [result, setResult] = useState("");
    const { setUpRecaptcha } = useUserAuth();
    const {user} = useContext(UserContext);
    const navigate = useNavigate();

    const handleSubmitButtonClick = () => {
        setIsSubmitClicked(true);
        setErrorMessage(false);
    };

    const getOTP = async (e) => {
        e.preventDefault();
        setError("");
        
        try {
            const response = await setUpRecaptcha(user.Mobilenumber);
            console.log(response);
            setResult(response);
            // Handle response if necessary
        } catch (err) {
            setError(err.message);
        }
        
    };

    const verifyOTP = async (e) => {
        e.preventDefault();
        setError("");
    if (OTP === "" || OTP === null) return;
    try {
      await result.confirm(OTP);
      navigate(<Main/>);
    } catch (err) {
      setError(err.message);
    }
    };

    return (
        <div>
            {!isSubmitClicked && (
                <div>
                    
                    <button
                        className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded mt-3"
                        onClick={getOTP}
                    >
                        Get OTP
                    </button>
                    <div id="recaptcha-container" />

                    <div className="mb-4">
                        <p className="text-lg font-semibold">Enter the OTP</p>
                        {error && <p className="text-red-500">{errorMessage}</p>}
                        <form onSubmit={verifyOTP}>
                            <input
                                type="text"
                                id="OTP"
                                value={OTP}
                                onChange={(ev) => setOTP(ev.target.value)}
                                className="border border-gray-300 rounded-md px-4 py-2 w-full mt-2 focus:outline-none focus:border-blue-500"
                            />
                            
                        </form>
                    </div>

                    {error && <p>{error}</p>}
                    {error && <p className="text-red-500">Please check your roll number.</p>}
                    <button
                        className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded mt-3"
                        onClick={handleSubmitButtonClick}
                        onSubmit={verifyOTP}
                    >
                        Submit
                    </button>
                </div>
            )}

            {isSubmitClicked && <Main />}
        </div>
    );
}
