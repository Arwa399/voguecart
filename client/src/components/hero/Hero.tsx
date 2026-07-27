import { useEffect, useState } from "react";
import HeroSlide from "./HeroSlide";
import slides from "./HeroData";
import "./Hero.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

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
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <HeroSlide slide={slides[currentSlide]} />

      <button className="hero__arrow hero__arrow--left" onClick={prevSlide}>
        <FaChevronLeft />
      </button>

      <button className="hero__arrow hero__arrow--right" onClick={nextSlide}>
        <FaChevronRight />
      </button>
    </>
  );
}

export default Hero;
