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
                <button className="btn bg-blue-600 hover:bg-orange-400 rounded-full h-23 w-20" onClick={togglePopup}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
</svg>
</button>
            </div>
            {isOpen && (
                <div className="absolute bottom-0 right-0 m-4">
                    <button className="absolute top-0 right-0 w-7" onClick={togglePopup}>X</button>
                    <div className="bg-white shadow-md rounded-lg p-4 w-96 h-96 flex flex-col justify-center items-center border border-gray-390">
                        
                        {!isParentClicked && !isStudentClicked && (
                            
    
                            <div className="mb-9">
                                <h1 className="text-lg font-bold mb-9">Are you a Parent or Student?</h1>
                                <div className="flex justify-between">
                                <button className="bg-orange-500 hover:bg-blue-600 text-white font-bold py-4 px-9 rounded" onClick={handleParentButtonClick}>Parent</button>
                                <div className="mx-4"></div>
                                <button className="bg-orange-500 hover:bg-blue-600 text-white font-bold py-2 px-9 rounded" onClick={handleStudentButtonClick}>Student</button>
                                </div>
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
