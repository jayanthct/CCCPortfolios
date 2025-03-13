import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
  "https://pbs.twimg.com/media/GlrFiUJWoAAFufR?format=jpg&name=large",
  "https://pbs.twimg.com/media/GlrFiUQX0AAoPH2?format=jpg&name=large",
  "https://pbs.twimg.com/media/GlrFiUJWAAACx9H?format=jpg&name=large",
  "https://pbs.twimg.com/media/GlrFiUJXgAAakvu?format=jpg&name=large",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSelect = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4 w-full">
        <p className="quote italic text-[18px] text-center w-[48ch] font-semibold text-[#494623]">"A portfolio speaks louder than words—it's the proof that your skills are more than just claims, they're reality"</p>
        <div className="w-full overflow-hidden ">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-[400px] object-cover rounded-xl ease-in-out"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}

          />
        </div>
        <div className="bottom-3 left-0 right-0 flex justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              className={`w-3 h-2 rounded-full  cursor-pointer ${
                currentIndex === index ? "bg-[#494623] w-8" : "bg-[#4946236a]"

              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
