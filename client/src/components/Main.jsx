import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { useNavigate } from "react-router-dom";
import Marks from "./Marks";
import Attendance from "./Attendance";
import Academic from "./Academic"
import Coactivities from "./Coactivities";
export default function Main(){
    const [isMarksClicked, setIsMarksClicked] = useState(false);
    const [isAttendanceClicked, setIsAttendanceClicked] = useState(false);
    const [isAcademicClicked, setIsAcademicClicked] = useState(false);
    const [isCoactivitiesClicked, setIsCoactivitiesClicked] = useState(false);

    const handleMarksButtonClick = () => {
        setIsMarksClicked(true);
        setIsAttendanceClicked(false);
        setIsAcademicClicked(false);
        setIsCoactivitiesClicked(false);
    };

    const handleAttendanceButtonClick = () => {
        setIsAttendanceClicked(true);
        setIsMarksClicked(false);
        setIsAcademicClicked(false);
        setIsCoactivitiesClicked(false);
    };

    const handleAcademicButtonClick = () => {
        setIsAcademicClicked(true);
        setIsMarksClicked(false);
        setIsAttendanceClicked(false);
        setIsCoactivitiesClicked(false);
    };

    const handleCoactivitiesButtonClick = () => {
        setIsCoactivitiesClicked(true);
        setIsMarksClicked(false);
        setIsAttendanceClicked(false);
        setIsAcademicClicked(false);
    };

    
    return(
        <div>
            
            {!isMarksClicked && !isAttendanceClicked && !isAcademicClicked && !isCoactivitiesClicked && (
                <><div className="flex flex-wrap justify-center gap-5">
                    <button className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5 h-20 w-36" onClick={handleMarksButtonClick}>Marks</button>
                    <button className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-20 w-36" onClick={handleAttendanceButtonClick}>Attendance</button>
                    <button className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5 h-20 w-36" onClick={handleAcademicButtonClick}>Academic Performance</button>
                    <button className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  h-20 w-36" onClick={handleCoactivitiesButtonClick}>Co-activities</button>
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded h-10 w-30 mt-5">Back</button>

                </div><div className="flex justify-center items-end mt-5">
                        <p className="ml-2"><a href="">For further details contact</a></p>
                    </div></>
            )}
            

                        {isMarksClicked && <Marks/>}
                        {isAttendanceClicked && <Attendance/>}
                        {isAcademicClicked && <Academic/>}
                        {isCoactivitiesClicked && <Coactivities/>}

        </div>
    );
}