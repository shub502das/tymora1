import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const WatchDetails = ({ product }) => {

    const navigate = useNavigate();

    const { addToCart } = useCart();

    return (
        <section className="product_details">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="img_sec rounded-2 d-flex justify-content-center align-items-center flex-column mx-auto">
                            <img src={product.prodImg} alt={product.prodTitleFull} className="mx-auto" />
                        </div>
                    </div>
                    <div className="col-md-6 mt-3 mt-md-0">
                        <div className="content_sec mx-auto">
                            <h1 className="cmn_head text_blue">{product.prodTitleFull}</h1>
                            <p className="current_price text_gold d-flex align-items-center fw-semibold my-1">
                                <span className="original_price text-decoration-line-through fw-semibold me-2">
                                    ₹{(product.price.originalPrice).toLocaleString('en-IN')}
                                </span>
                                ₹{(product.price.currentPrice).toLocaleString('en-IN')}
                            </p>
                            <h6 className="text_gold mb-0">You save (₹{(product.price.discountPrice).toLocaleString('en-IN')})</h6>
                            <p className="cmn_para text_grey my-2">{product.prodDescription}</p>
                            <div className="prod_feature d-flex align-items-center bg_blue rounded-2 p-3 text-white my-3">
                                <div className="each_feature d-flex align-items-center w-100">
                                    <img src="/images/warranty_icon.svg" alt="Icon" />
                                    <h5 className="fw-bold mb-0">24 Months Warranty</h5>
                                </div>
                                <div className="each_feature d-flex align-items-center w-100">
                                    <img src="/images/authentic_icon.svg" alt="Icon" />
                                    <h5 className="fw-bold mb-0">100% Authenticity Guarantee</h5>
                                </div>
                            </div>
                            <div className="offer_sec">
                                <h3 className="cmn_head text-uppercase text_blue fs-6">AVAILABLE OFFERS</h3>
                                <ul>
                                    <li className="cmn_para text_grey ms-3 position-relative">Cash on Delivery</li>
                                    <li className="cmn_para text_grey ms-3 position-relative">Free Shipping on All Purchases</li>
                                </ul>
                            </div>
                            <Link to="#" onClick={(e) => {e.preventDefault(); addToCart(product); navigate("/Cart");}} className="cta_btn mt-3 w-100 text-center">BUY NOW+</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WatchDetails;
