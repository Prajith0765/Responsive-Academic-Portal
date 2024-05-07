import { useContext, useState } from "react";

import Marks from "./Marks";
import Attendance from "./Attendance";
import Academic from "./Academic";
import Coactivities from "./Coactivities";
import { UserContext } from "../UserContext";



export default function Main(){
    
    const [isMarksClicked, setIsMarksClicked] = useState(false);
    const [isAttendanceClicked, setIsAttendanceClicked] = useState(false);
    const [isAcademicClicked, setIsAcademicClicked] = useState(false);
    const [isCoactivitiesClicked, setIsCoactivitiesClicked] = useState(false);
    const {user} = useContext(UserContext);
    

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
                
                <div>
                {user && (
                    <h1 className="text-lg font-bold mb-5">Welcome {user.Name} ({user.Rollno})</h1>
                
                )}
            

                <><div className="flex flex-wrap justify-center gap-5">
                    <button className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-9 mr-5 h-20 w-36" onClick={handleMarksButtonClick}>Marks</button>
                    <button className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-20 w-36" onClick={handleAttendanceButtonClick}>Attendance</button>
                    <button className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 mr-5 h-20 w-36" onClick={handleAcademicButtonClick}>Academic Performance</button>
                    <button className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  h-20 w-36" onClick={handleCoactivitiesButtonClick}>Co-activities</button>
                    

                </div><div className="flex justify-center items-end mt-5">
                        <p className="ml-2"><a href="">For further details contact</a></p>
                    </div></>
                    </div>
            )}
            


            

                        {isMarksClicked && <Marks/>}
                        {isAttendanceClicked && <Attendance/>}
                        {isAcademicClicked && <Academic/>}
                        {isCoactivitiesClicked && <Coactivities/>}
            

        </div>
        
    );
}