import PropTypes from "prop-types";

const CardProduct = ({ image, title, price, buttonUrl, buttonText }) => {
  return (
    <>
      <div className="card h-100">
        {/* <!-- Product image--> */}
        <img className="card-img-top" src={image} alt="..." />
        {/* <!-- Product details--> */}
        <div className="card-body p-4">
          <div className="text-center">
            {/* <!-- Product name--> */}
            <h5 className="fw-bolder">{title}</h5>
            {/* <!-- Product reviews--> */}
            <div className="d-flex justify-content-center small text-warning mb-2">
              <div className="bi-star-fill"></div>
              <div className="bi-star-fill"></div>
              <div className="bi-star-fill"></div>
              <div className="bi-star-fill"></div>
              <div className="bi-star-fill"></div>
            </div>
            {/* <!-- Product price--> */}
            <span className="text-muted text-decoration-line-through">
              {price}
            </span>
            {price}
          </div>
        </div>
        {/* <!-- Product actions--> */}
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <a className="btn btn-outline-dark mt-auto" href={buttonUrl}>
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

CardProduct.defaultProps = {
  image: "http://picsum.photos/id/200/200/120",
  title: "Product dummy title",
  price: 0.0,
  buttonUrl: "#",
  buttonText: "Button Dummy text",
};

CardProduct.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonUrl: PropTypes.string.isRequired,
};

export default CardProduct;
