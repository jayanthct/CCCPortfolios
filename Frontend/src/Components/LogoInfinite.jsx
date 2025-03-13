import React, { useState, useEffect } from "react";
import Slider from "react-infinite-logo-slider";
import logoinfinite1 from "../assets/Microsoft.png";
import logoinfinite2 from "../assets/paypal.svg";
import logoinfinite3 from "../assets/Wipro.png";
import logoinfinite4 from "../assets/Tata.png";
import logoinfinite5 from "../assets/Goldman.png";
import logoinfinite6 from "../assets/googlelogo.png";
import logoinfinite7 from "../assets/Autodesk.png";

const logoImages = [
  logoinfinite1,
  logoinfinite2,
  logoinfinite3,
  logoinfinite4,
  logoinfinite5,
  logoinfinite6,
  logoinfinite7,
];

const LogoInfinite = () => {
  const [sliderWidth, setSliderWidth] = useState("100px");

  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth >= 1024) {
        setSliderWidth("300px"); // lg screens
      } else {
        setSliderWidth("200px"); // sm screens
      }
    };

    updateWidth(); // Set initial width
    window.addEventListener("resize", updateWidth); // Listen to window resize

    return () => window.removeEventListener("resize", updateWidth); // Cleanup listener
  }, []);

  return (
    <article className="slider w-full bg-white rounded-[8px] p-6 mt-4 mb-4 h-fit">
      <Slider
        width={sliderWidth}
        duration={20}
        pauseOnHover={true}
        // blurBorders={true}
        // blurBorderColor="#FFFFFF"
      >
        {logoImages.map((logo, index) => (
          <Slider.Slide key={index}>
            <img
              src={logo}
              alt={`logo-${index}`}
              className="w-24 sm:w-36 lg:w-48"
            />
          </Slider.Slide>
        ))}
      </Slider>
    </article>
  );
};

export default LogoInfinite;
