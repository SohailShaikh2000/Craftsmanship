import Axe from "../assets/Axe.svg";
import '../styles/SelectedProduct.scss'

const SelectedProduct = () => {
  return (
    <div className="selected-product-container">
      <div className="selected-product-data-desktop">
        <div className="selected-img">
          <img src={Axe} alt="Axe" />
        </div>
        <div className="selected-data">
          <div className="data">
            <h1>Choosing the <br /> Right Axe </h1>
            <h5>9/29/2023</h5>
            <p>
              Selecting the right axe for your needs is crucial. Consider the
              type of tasks you`ll be performing—whether it`s camping,
              woodworking, or decorative purposes. Research the various axe head
              shapes and handle lengths to find one that suits your
              requirements. In conclusion, with regular care and maintenance,
              your trusty axe will remain...
            </p>
            <h5 className="read-more">Read More</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedProduct;
