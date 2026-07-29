import collectionModelImage from "../../assets/images/collection/collection-model.png"
import "./Collection.css"

function Collection() {
  return (
    <section className="collection">
        <div className="collection__content">
            <h3 className="collection__subtitle">New Season</h3>
            <h1 className="collection__title">Autumn Collection</h1>
            <div className="collection__line"></div>
            <p className="collection__description">Layer up in timeless pieces that blend comfort and elegance for the season ahead.</p>
            <button className="collection__button">Explore Collection</button>
        </div>
        <div className="collection__image">
            <img src= {collectionModelImage} alt="collection-model" />
        </div>
    </section>
  )}
export default Collection