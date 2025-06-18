import Innerbanner from "../components/Innerbanner.jsx";
import Faqs from "../components/Faqs.jsx";
import { Link } from "react-router";

const Cartpage = () => {
    return <>
        <Innerbanner
            bgimage="images/cart_banner.jpg"
            bannertitle="Your Shopping Bag"
        />
        <section className="cart_sec sec_margin">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="cart_summary">
                            <h3 className="cmn_head text_blue mb-4">Items in Bag</h3>
                            <div className="cart_items">
                                <div
                                    className="each_cart px-3 py-2 rounded-2 d-flex justify-content-between align-items-center">
                                    <div className="img_n_text d-flex justify-content-between align-items-center">
                                        <div className="img_sec rounded-2 shadow-lg">
                                            <img src="images/tissot_watch_women.png" alt="tissot" className="mx-auto"/>
                                        </div>
                                        <div className="text_sec ms-3">
                                            <a href="product-details.html?id=02" className="text-decoration-none">
                                                <h6 className="text_blue text-uppercase m-0">tissot</h6>
                                            </a>
                                            <p className="text_grey mb-0">Tissot Bellissima-T12620 Watch</p>
                                        </div>
                                    </div>
                                    <p className="text_blue m-0">₹26,995</p>
                                    <p className="text-success text-decoration-line-through m-0">₹5,396</p>
                                    <h6 className="fw-semibold text_gold fs-6 m-0">₹21,599</h6>
                                    <a href="javascript:void(0);" className="cart_remove"><img
                                        src="images/delete_icon.svg" alt=""/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 mt-3 mt-md-0">
                        <div className="order_summary p-4 rounded-2">
                            <h3 className="cmn_head text_blue">Price Details</h3>
                            <div className="price_items">
                                <div className="cart_price mt-4">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p className="text_blue m-0">Bag Total (1)</p>
                                        <p className="text_grey m-0" id="subtotal">₹26,995</p>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center my-3">
                                        <p className="text_blue m-0">Discount</p>
                                        <p className="text_grey text-uppercase text-decoration-line-through m-0" id="discount">
                                            ₹5,396</p>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center my-3">
                                        <p className="text_blue m-0">Shipping Fee</p>
                                        <p className="text-success text-uppercase m-0" id="discount">FREE</p>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center my-3">
                                        <p className="text_blue m-0">Convenience Fee</p>
                                        <p className="text-danger m-0">₹99</p>
                                    </div>
                                    <hr/>
                                        <div className="total_price d-flex justify-content-between align-items-center mb-4">
                                            <p className="text_blue m-0 fs-5">Net Payable</p>
                                            <p className="text_blue m-0 fs-5" id="netpay">₹21,698</p>
                                        </div>
                                        <div className="checkout_btn">
                                            <Link to="/checkout" className="cta_btn w-100 text-center">PROCEED TO CHECKOUT+</Link>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Faqs />
    </>
};
export default Cartpage;