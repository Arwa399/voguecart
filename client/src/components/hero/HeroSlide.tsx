import type { HeroSlideData } from "./HeroData";


type HeroSlideProps = {
  slide: HeroSlideData;
};


function HeroSlide({ slide }: HeroSlideProps) {

  return (
    <div>
      <h2>{slide.title}</h2>
      <p>{slide.description}</p>
      <img src={slide.image} alt={slide.title} />
    </div>
  )
}

export default HeroSlide