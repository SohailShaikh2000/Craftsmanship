import CampingAxe from "../assets/CampingAxe.svg";
import DecorativeAxe from "../assets/DecorativeAxe.svg";
import WoodworkingAxe from "../assets/WoodworkingAxe.svg";
import '../styles/Products.scss'

const Products = () => {
  return (
    <div className="products-container">
      <div className="product-info">
        <div className="product-title">
          <h1>Axe Masterpieces Collection</h1>
        </div>

        <div className="product-description">
          <p>
            At Heritage, we take immense pride in crafting exceptional handmade
            axes that not only stand as tools of enduring quality but also
            reflect our deep-rooted commitment to values that set us apart.
          </p>
          <h4>View all Products</h4>
        </div>
      </div>
      <div className="product-data">
        <div className="product">
          <img src={CampingAxe} alt="Camping Axe" />
          <p>
            Introducing the `WildernessWanderer` Camping Axe, your trusted
            companion for every outdoor adventure. Crafted with precision and
            care, this axe embodies the spirit of exploration and...
          </p>
          <h4>Camping</h4>
        </div>
        <div className="product">
          <img src={WoodworkingAxe} alt="Woodworking Axe" />
          <p>
            Introducing the `Craftsmans Edge` Woodworking Axe—a masterpiece
            designed for artisans who demand precision and quality in their
            craft. This axe is more than a tool; its an extension of you..
          </p>
          <h4>Woodworking</h4>
        </div>
        <div className="product">
          <img src={DecorativeAxe} alt="Decorative Axe" />
          <p>
            Presenting the Artisan`s Elegance Decorative Axe—a fusion of form
            and function that transcends the boundaries of utility to become a
            symbol of artistry and sophistication.
          </p>
          <h4>Decorative</h4>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Products;
