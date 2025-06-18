import Innerbanner from "../components/Innerbanner";

const Checkoutpage = () => {
    return <>
        <Innerbanner
            bgimage="images/checkout_banner.jpg"
            bannertitle="Complete Your Purchase"
        />
        <section className="checkout_sec sec_margin text-center">
            <div className="container">
                <h2 className="cmn_head blue_bar text_blue pb-2">Confirm and Pay Now</h2>
                <p className="cmn_para text_grey mt-3">Almost there! Complete your checkout to enjoy the deal.</p>
                <form action="/thank-you" id="checkout_form" className="text-start mx-auto">
                    <div className="shipping_info">
                        <h2 className="fw-semibold text_blue">Shipping Information</h2>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="each_field mb-3">
                                    <input type="text" placeholder="First Name" className="w-100 rounded-2"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="each_field mb-3">
                                    <input type="text" placeholder="Last Name" className="w-100 rounded-2"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="each_field mb-3">
                                    <input type="email" placeholder="Email Address" className="w-100 rounded-2"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="each_field mb-3">
                                    <input type="tel" placeholder="Phone Number" className="w-100 rounded-2"/>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="each_field mb-3">
                                    <input type="text" placeholder="Address" className="w-100 rounded-2"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="each_field mb-3">
                                    <select name="" id="" className="w-100 rounded-2">
                                        <option value="">Country</option>
                                        <option value="India">India</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="each_field mb-3">
                                    <input type="text" placeholder="City" className="w-100 rounded-2"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="each_field mb-3">
                                    <select name="" id="" className="w-100 rounded-2">
                                        <option value="">State</option>
                                        <option value="India">West Bengal</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="each_field mb-3">
                                    <input type="tel" placeholder="ZIP Code" className="w-100 rounded-2"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="payment_info">
                        <h2 className="fw-semibold text_blue">Payment Information</h2>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="each_field mb-3">
                                    <input type="tel" placeholder="Card Number" className="w-100 rounded-2"/>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="each_field mb-3">
                                    <select name="" id="" className="w-100 rounded-2">
                                        <option value="">Month</option>
                                        <option value="January">January</option>
                                        <option value="February">February</option>
                                        <option value="March">March</option>
                                        <option value="April">April</option>
                                        <option value="May">May</option>
                                        <option value="June">June</option>
                                        <option value="July">July</option>
                                        <option value="August">August</option>
                                        <option value="September">September</option>
                                        <option value="October">October</option>
                                        <option value="November">November</option>
                                        <option value="December">December</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="each_field mb-3">
                                    <select name="" id="" className="w-100 rounded-2">
                                        <option value="">Year</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="each_field mb-3">
                                    <input type="tel" placeholder="CVV" className="w-100 rounded-2"/>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="each_field">
                                    <button type="submit" className="checkout_submit cta_btn w-100 text-center" id="checkout_submit">PROCEED TO CHECKOUT+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    </>
};
export default Checkoutpage;