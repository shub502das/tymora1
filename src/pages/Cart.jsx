import { Link } from "react-router-dom";
import Innerbanner from "../components/Innerbanner.jsx";
import Faqs from "../components/Faqs.jsx";
import { useCart } from "../context/CartContext.jsx";

const Cartpage = () => {
    const { cartItems, removeFromCart, updateQuantity } = useCart();

    const getSubtotal = () =>
        cartItems.reduce((sum, item) => sum + item.price.originalPrice * item.quantity, 0);

    const getDiscount = () =>
        cartItems.reduce((sum, item) => sum + item.price.discountPrice * item.quantity, 0);

    const getNetPayable = () => getSubtotal() - getDiscount() + 99;

    return <>
        <Innerbanner
            bgimage="/images/cart_banner.jpg"
            bannertitle="Your Shopping Bag"
        />
        <section className="cart_sec sec_margin">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="cart_summary">
                            <h3 className="cmn_head text_blue mb-4">Items in Bag ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})</h3>
                            <div className="cart_items">
                                {cartItems.length === 0 ? (
                                    <div className="each_cart p-3 rounded-2">
                                        <h5 className="text-danger mb-2">No Product in the Cart</h5>
                                        <p className="text_grey mw-100 mb-0">Looks like you haven't added anything yet.</p>
                                    </div>
                                ) : (
                                    cartItems.map((item) => (
                                        <div key={item.id} className="each_cart px-3 py-2 rounded-2 d-flex justify-content-between align-items-center">
                                            <div className="img_n_text d-flex justify-content-between align-items-center">
                                                <div className="img_sec rounded-2 shadow-lg">
                                                    <img src={item.prodImg} alt="Watch Image" className="mx-auto" />
                                                </div>
                                                <div className="text_sec ms-3">                                                    
                                                    <Link to={`/Product-details/${item.slug}`}><h6 className="text_blue text-uppercase m-0">{item.prodTitle}</h6></Link>                                                    
                                                    <p className="text_grey mb-0">{item.prodsubtitle}</p>
                                                </div>
                                            </div>
                                            <div className="quantity_change d-flex align-items-center gap-2">
                                                <button
                                                    className="btn btn-sm btn-outline-secondary"
                                                    onClick={() =>
                                                        item.quantity > 1 && updateQuantity(item.id, item.quantity - 1)
                                                    }
                                                >−</button>

                                                <span className="text_blue">{item.quantity}</span>

                                                <button
                                                    className="btn btn-sm btn-outline-secondary"
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                >+</button>
                                            </div>
                                            <p className="d text-danger m-0 small text-decoration-line-through">₹{(item.price.originalPrice * item.quantity).toLocaleString('en-IN')}</p>
                                            <h6 className="fw-semibold text_gold fs-6 m-0">₹{(item.price.currentPrice * item.quantity).toLocaleString('en-IN')}</h6>
                                            <a onClick={() => removeFromCart(item.id)} className="cart_remove">
                                                <img src="/images/delete_icon.svg" alt="" />
                                            </a>
                                        </div>
                                    ))
                                )}

                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 mt-3 mt-md-0">
                        <div className="order_summary p-4 rounded-2">
                            <h3 className="cmn_head text_blue">Price Details</h3>
                            <div className="price_items">
                                <div className="cart_price mt-4">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p className="text_blue m-0">Bag Total</p>
                                        <p className="text_grey m-0" id="subtotal">₹{(getSubtotal()).toLocaleString('en-IN')}</p>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center my-3">
                                        <p className="text_blue m-0">Discount</p>
                                        <p className="text_grey text-uppercase text-decoration-line-through m-0" id="discount">
                                            ₹{(getDiscount()).toLocaleString('en-IN')}</p>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center my-3">
                                        <p className="text_blue m-0">Shipping Fee</p>
                                        <p className="text-success text-uppercase m-0" id="discount">FREE</p>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center my-3">
                                        <p className="text_blue m-0">Convenience Fee</p>
                                        <p className="text-danger m-0">₹99</p>
                                    </div>
                                    <hr />
                                    <div className="total_price d-flex justify-content-between align-items-center mb-4">
                                        <p className="text_blue m-0 fs-5">Net Payable</p>
                                        <p className="text_blue m-0 fs-5" id="netpay">₹{(getNetPayable()).toLocaleString('en-IN')}</p>
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