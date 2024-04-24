import {Routes,Route} from "react-router-dom"
import './App.css'
import Home from './components/Home';
import Popup from "./components/Popup";
import Rollno from "./components/Rollno";
import OTPverify from "./components/OTPverify";
import Main from "./components/Main";
import Marks from "./components/Marks";
import Attendance from "./components/Attendance";
import Academic from "./components/Academic";
import Coactivities from "./components/Coactivities";
import axios from "axios";
import { UserContextProvider } from "./UserContext";



axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.withCredentials = true; 

function App() {

  return (

   <UserContextProvider>
    <Routes>
      
        <Route path="/" element={<Home/>}>
          <Route path="/" element={<Popup/>}>
            <Route path="/" element={<Rollno/>}/>
            <Route path="/" elememt={<OTPverify/>}/>
            <Route path="/" element={<Main/>}/>
            <Route path="/" element={<Marks/>}/>
            <Route path="/" element={<Attendance/>}/>
            <Route path="/" element={<Academic/>}/>
            <Route path="/" element={<Coactivities/>}/>
          </Route>
        </Route>

    </Routes>
    </UserContextProvider>
    
  );
}

export default App