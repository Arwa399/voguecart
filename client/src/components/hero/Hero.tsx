import slides from "./HeroData";
import HeroSlide from "./HeroSlide/HeroSlide";

function Hero() {
  const slide = slides[0];

  return (
    <HeroSlide slide={slide} />
  );
}

export default Hero;