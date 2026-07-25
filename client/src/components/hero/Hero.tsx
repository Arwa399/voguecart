import { useEffect, useState } from "react";
import HeroSlide from "./HeroSlide/HeroSlide";
import slides from "./HeroData";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  // console.log(slides[currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      if (prev === slides.length - 1) {
        return 0;
      }
      return prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      if (prev === 0) {
        return slides.length - 1;
      }
      return prev - 1;
    });
  };

  useEffect(() => {
     const interval = setInterval(() => {
      nextSlide();
    }, 5000);
     return () => {clearInterval(interval)}
  }, []);

  return (
    <>
      <HeroSlide slide={slides[currentSlide]} />
      <button onClick={nextSlide}>next</button>
      <button onClick={prevSlide}>prev</button>
    </>
  );
}

export default Hero;
