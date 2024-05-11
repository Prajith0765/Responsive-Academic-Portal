import { useContext, useState } from "react";
import Main from "./Main";
import { UserContext } from "../UserContext";
import { useUserAuth } from "../UserContext";

export default function OTPverify() {
    const [error, setError] = useState("");
    const [OTP, setOTP] = useState("");
    const [result, setResult] = useState("");
    const [isMainPageVisible, setIsMainPageVisible] = useState(false); // State to manage visibility of main page
    const { setUpRecaptcha } = useUserAuth();
    const { user } = useContext(UserContext);

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

        if (OTP === "") {
            setError("Please enter OTP.");
            return;
        }

        try {
            await result.confirm(OTP);
            setIsMainPageVisible(true); // Show main page upon correct OTP verification
        } catch (err) {
            setError("Incorrect OTP. Please try again.");
        }
    };

    return (
        <div>
            {!isMainPageVisible ? ( // Render OTP verification UI if main page is not visible
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
                        {error && <p className="text-red-500">{error}</p>}
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

                    <button
                        className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded mt-3"
                        onClick={verifyOTP}
                    >
                        Submit
                    </button>
                </div>
            ) : (
                <Main /> // Render main page if main page is visible
            )}
        </div>
    );
}
