import { useState } from "react";
import HeroSlide from "./HeroSlide/HeroSlide";
import slides  from "./HeroData";



function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  console.log(slides[currentSlide]);

  const nextSlide = () => {
  if (currentSlide === slides.length - 1) {
    setCurrentSlide(0);
  } else {
    setCurrentSlide(currentSlide + 1);
  }
};
  const prevSlide = () => {
    if (currentSlide == 0){
      setCurrentSlide(slides.length-1)
    } else{
      setCurrentSlide (currentSlide -1);
    }
  }


  return (
    <>
      <HeroSlide slide={slides[currentSlide]} />
      <button onClick={nextSlide}>next</button>
      <button onClick={prevSlide}>prev</button>
    </>
  );
}



export default Hero;