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
    image: "/path/to/image1.jpg",
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
    image: "/path/to/image2.jpg", 
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
    image: "/path/to/image3.jpg",
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