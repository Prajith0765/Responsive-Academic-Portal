import { useState, useEffect } from "react";
import Popup from "./Popup";

const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const images = ["./public/img1.jpeg", "./public/img2.jpeg", "./public/img3.jpeg", "./public/img4.jpeg"]; // Replace with your image paths

  return (
    <div>
        <div>
      <header className="p-4 flex justify-center">
        <a href="/" className="flex items-center gap-4">
          <img src="./public/mcet_logo.png" alt="Image" className="h-50 w-60" />
        </a>
        <span>Affilated to Anna University<br/>An Autonomous Institute since 2011</span>
        <img src="./public/code.png" alt="code" className="relative flex justify-right ml-10 h-24 w-24" />
      </header>
        </div>
      <div className="slideshow-container flex items-center justify-center h-screen">
        {images.map((image, index) => (
          <div key={index} className={index === slideIndex ? "slideshow-slide block" : "slideshow-slide hidden"}>
            <img src={image}  alt={`Slide ${index + 1}`} className=" h-200 w-full flex items-center justify-center mt-48" />
          </div>
        ))}
        <div className="h-20 w-10"></div>
      </div>

      <Popup />
    </div>
  );
};

export default Home;
