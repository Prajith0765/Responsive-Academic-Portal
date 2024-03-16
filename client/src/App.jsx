import {Routes,Route} from "react-router-dom"
import './App.css'
import Home from './components/Home';
import Popup from "./components/Popup";
import Rollno from "./components/Rollno";

function App() {

  return (
    
    <Routes>
      
        <Route path="/" element={<Home/>}>
          <Route path="/" element={<Popup/>}>
            <Route path="/" element={<Rollno/>}/>
          </Route>
        </Route>

    </Routes>
  );
}

export default App