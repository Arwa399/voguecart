import { Link } from "react-router-dom";
import type { HeroSlideData } from "./HeroData";
import "./HeroSlide.css";


type HeroSlideProps = {
  slide: HeroSlideData;
};


function HeroSlide({ slide }: HeroSlideProps) {

  return (
    <div>
      <section className="heroSection" style={{backgroundImage: `url(${slide.image})`}}>
        <div className="overlay"></div>
        <div className="heroContent">
          <div className="heroText">
          <h2>{slide.title}</h2>
          <p>{slide.description}</p>
          <div className="heroButtons">
            {slide.buttons.map((button, index) => (
              <Link key={index} to={button.link} className="heroBtn">
                {button.text}
              </Link>
            ))}
          </div>         
          </div>
        </div>
      </section>
    </div>
  )
}

export default HeroSlide