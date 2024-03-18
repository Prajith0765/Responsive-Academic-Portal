import { useState } from "react";
import Rollno from "./Rollno";

export default function Popup() {
    const [isOpen, setIsOpen] = useState(false);
    const [isParentClicked, setIsParentClicked] = useState(false);
    const [isStudentClicked, setIsStudentClicked] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    const handleParentButtonClick = () => {
        setIsParentClicked(true);
        setIsStudentClicked(false);
    };

    const handleStudentButtonClick = () => {
        setIsStudentClicked(true);
        setIsParentClicked(false);
    };
    

    return (
        <div className="fixed bottom-5 right-5">
            <div>
                <button className="btn rounded-full" onClick={togglePopup}>ChatBot</button>
            </div>
            {isOpen && (
                <div className="absolute bottom-0 right-0 m-4">
                    <button className="absolute top-0 right-0" onClick={togglePopup}>X</button>
                    <div className="bg-white shadow-md rounded-lg p-4 w-96 h-96 flex flex-col justify-center items-center border border-gray-390">
                        <div className="mb-9">
                            <h1 className="text-lg font-bold">Are you a Parent or Student?</h1>
                        </div>
                        {!isParentClicked && !isStudentClicked && (
                            <div className="flex justify-between">
                                <button className="bg-orange-500 hover:bg-blue-600 text-white font-bold py-4 px-9 rounded" onClick={handleParentButtonClick}>Parent</button>
                                <div className="mx-4"></div>
                                <button className="bg-orange-500 hover:bg-blue-600 text-white font-bold py-2 px-9 rounded" onClick={handleStudentButtonClick}>Student</button>
                            </div>
                        )}
                        
                        {isStudentClicked && <Rollno/>}
                        
                        {isParentClicked && <Rollno />}
                    </div>
                </div>
            )}
        </div>
    );
}
