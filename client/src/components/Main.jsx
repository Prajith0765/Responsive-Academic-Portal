
export default function Main(){

    return(
        <div>
            <div className="flex flex-wrap justify-center gap-5">
                <button className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5 h-20 w-36">Marks</button>
                <button className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-20 w-36">Attendance</button>
                <button className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5 h-20 w-36">Academic Performance</button>
                <button className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  h-20 w-36">Absent</button>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded h-10 w-30 mt-5">Back</button>
            </div>
            <div className="flex justify-center items-end mt-5">
  <p className="ml-2"><a href="">For further details contact</a></p>
</div>

        </div>
    );
}