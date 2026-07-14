import slides from "./HeroData";
import HeroSlide from "./HeroSlide";

function Hero() {
  const slide = slides[0];

  return (
    <HeroSlide slide={slide} />
  );
}

export default Hero;