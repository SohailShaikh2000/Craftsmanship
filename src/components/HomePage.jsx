import "../styles/HomePage.scss";
import Viking from "../assets/Viking.svg";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="title-description-desktop">
        <div className="title">
          <h1>Craftsmanship at Its Finest</h1>
        </div>
        <div className="description">
          <div className="description-list">
            <p>Explore Our Unique Collection of Handmade Axes</p>
            <select name="products" id="products">
              <option value="Product Categories" id="product-categories">
                Product Categories
              </option>
              <option value="Option1">Option1</option>
              <option value="Option2">Option2</option>
              <option value="Option3">Option3</option>
            </select>
          </div>
          <div className="shop-now">
            <button>Shop Now</button>
          </div>
        </div>
      </div>
      <div className="homepage-img">
        <img src={Viking} alt="Viking" />
      </div>
      <h1 className="tagline">“Crafted Axes, Forged Adventures”</h1>
      <hr />
    </div>
  );
};

export default HomePage;
