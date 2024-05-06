import { useState } from "react";
import Main from "./Main";
//import { UserContext } from "../UserContext";
import {useUserAuth} from "../UserContext";

export default function OTPverify() {
    const [isSubmitClicked, setIsSubmitClicked] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [OTP, setOTP] = useState("");
    const [number, setNumber] = useState("");
    const { setUpRecaptcha } = useUserAuth();

    const handleSubmitButtonClick = () => {
        setIsSubmitClicked(true);
        setErrorMessage(false);
    };

    const getOTP = async (e) => {
        e.preventDefault();
        setError("");
        if (number === "") {
            return setError("Enter the number");
        }
        try {
            const response = await setUpRecaptcha(number);
            console.log(response);
            // Handle response if necessary
        } catch (err) {
            setError(err.message);
        }
        console.log(number);
    };

    const verifyOTP = async (e) => {
        e.preventDefault();
    setError("");
    if (OTP === "" || OTP === null) return;
    
    };

    return (
        <div>
            {!isSubmitClicked && (
                <div>
                    <div className="mb-4">
                        <p className="text-lg font-semibold">Enter the number</p>
                        <input
                            type="number"
                            id="number"
                            value={number}
                            onChange={(ev) => setNumber(ev.target.value)}
                            className="border border-gray-300 rounded-md px-4 py-2 w-full mt-1 focus:outline-none focus:border-blue-500"
                        />
                    </div>
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
                            <button type="submit">Submit</button>
                        </form>
                    </div>

                    {error && <p>{error}</p>}
                    {error && <p className="text-red-500">Please check your roll number.</p>}
                    <button
                        className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded mt-3"
                        onClick={handleSubmitButtonClick}
                    >
                        Submit
                    </button>
                </div>
            )}

            {isSubmitClicked && <Main />}
        </div>
    );
}
