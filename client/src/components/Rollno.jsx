// eslint-disable-next-line no-unused-vars
import { useState } from "react";

export default function Rollno(){

    
    return(
        <div className="mb-4">
                <p className="text-lg font-semibold">Enter Your Roll Number</p>
                <input type="text" className="border border-gray-300 rounded-md px-4 py-2 w-full mt-2 focus:outline-none focus:border-blue-500"></input>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Submit</button>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mt-4 ml-2">Back</button>
        </div>
    );
}