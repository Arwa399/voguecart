import heroSlide1 from "../../assets/images/hero/hero-slide-1.png";
import heroSlide2 from "../../assets/images/hero/hero-slide-2.png";
import heroSlide3 from "../../assets/images/hero/hero-slide-3.png";


interface HeroSlideData{
        id: number,
        title: string,
        description: string,
        image: string,
        buttons: Array<{ text: string, link: string }>,
}

const slides: HeroSlideData[] = [{
    id: 1,
    title: "Welcome to Our Store",
    description: "Discover the latest trends and styles.",
    image: heroSlide1,
    buttons: [
        {
            text: "Shop Now",
            link: "/products"
        }
    ]
},
{
    id: 2,
    title: "New Arrivals",
    description: "Check out our newest products.",
    image: heroSlide2,
    buttons: [
        {
            text: "View Details",
            link: "/new-arrivals"
        }
    ]
},
{
    id: 3,
    title: "Exclusive Offers",
    description: "Don't miss out on our special deals.",
    image: heroSlide3,
    buttons: [
        {
            text: "Get Offer", 
            link: "/offers"
        }
    ]     
}
]
export type { HeroSlideData };
export default slides;