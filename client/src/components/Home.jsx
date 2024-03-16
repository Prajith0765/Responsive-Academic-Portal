import Popup from "./Popup";

export default function Home(){
    
    
    return(
       
        <div>
           <header className="p-4 flex justify-center">
           <a href="" className="flex items-center gap-4">
            <img src="./public/mcet_logo.png" alt="Image" className="h-50 w-60"></img>
            </a>
            <span className="">Affilated to Anna University<br/>An Autonomous Institute since 2011</span>
            <img src="./public/code.png" alt="code" className="relative flex justify-right h-24 w-24" />

            
            
            
            </header> 
            <Popup></Popup>
        </div>
    );
}