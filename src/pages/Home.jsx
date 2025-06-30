import { Link } from "react-router-dom";
import Bannerslider from "../components/Bannerslider";
import CompanySlider from "../components/Companyslider";
import ReviewSlider from "../components/Reviewslider";
import MainProducts from "../components/Bestsellerproducts";
import LatestCollection from "../components/LatestCollection";

const Homepage = () => {
    return <>
        <Bannerslider />
        <MainProducts/>
        <section className="delivery_sec border-start-0 border-end-0">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="each_sec">
                            <h2 className="cmn_head text_blue">Only on <br />Tymora Watches</h2>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="each_sec d-flex align-items-center">
                            <div
                                className="delivery_icon delivery_icon bg_blue d-flex justify-content-center align-items-center">
                                <img src="/images/delivery_icon1.svg" alt="" />
                            </div>
                            <div className="content_sec ms-3">
                                <h4 className="cmn_head text_blue fs-6">Free Shipping</h4>
                                <p className="cmn_para cmn_para_sm text_grey">(On All Products)</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="each_sec d-flex align-items-center">
                            <div
                                className="delivery_icon delivery_icon bg_blue d-flex justify-content-center align-items-center">
                                <img src="/images/delivery_icon2.svg" alt="" />
                            </div>
                            <div className="content_sec ms-3">
                                <h4 className="cmn_head text_blue fs-6">Cash On delivery</h4>
                                <p className="cmn_para cmn_para_sm text_grey">(On Every Watch)</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="each_sec d-flex align-items-center">
                            <div
                                className="delivery_icon delivery_icon bg_blue d-flex justify-content-center align-items-center">
                                <img src="/images/delivery_icon3.svg" alt="" />
                            </div>
                            <div className="content_sec ms-3">
                                <h4 className="cmn_head text_blue fs-6">Surprises</h4>
                                <p className="cmn_para cmn_para_sm text_grey">(On Every Purchase)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
        <section className="feature_sec sec_margin" id="features">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-between flex-column">
                        <div className="each_feature rounded-2 position-relative overflow-hidden mx-auto">
                            <Link to="/Collection">
                                <img src="/images/feature_img1.jpg" alt="" className="mx-auto rounded-2" />
                                <div className="content_sec text-end position-absolute">
                                    <p className="cmn_para cmn_para_sm text-white mb-2">Buy Stylish & Trendy Unisex Watches</p>
                                    <h2 className="cmn_head text-white fw-bold">Diverse Lifestyle</h2>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-between flex-column">
                        <div className="each_feature rounded-2 position-relative overflow-hidden mx-auto my-3 my-md-0">
                            <Link to="/Collection">
                                <img src="/images/feature_img2.jpg" alt="" className="mx-auto rounded-2" />
                                <div className="content_sec text-end position-absolute">
                                    <p className="cmn_para cmn_para_sm text-white mb-2">Wear Your Style</p>
                                    <h2 className="cmn_head text-white fw-bold">Huge Collections</h2>
                                </div>
                            </Link>
                        </div>
                        <div className="each_feature rounded-2 position-relative overflow-hidden mx-auto">
                            <Link to="/Collection">
                                <img src="/images/feature_img3.jpg" alt="" className="mx-auto rounded-2" />
                                <div className="content_sec text-end position-absolute">
                                    <p className="cmn_para cmn_para_sm text-white mb-2">Exclusive Collection Of Men’s & Women’s
                                        Watches</p>
                                    <h2 className="cmn_head text-white fw-bold">Popular Brands</h2>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <LatestCollection/>
        <CompanySlider/>
        <section className="edition_sec sec_margin text-white">
            <div className="container">
                <p className="cmn_para">Free Shipping & The Best Indie Art Ever!</p>
                <h2 className="cmn_head my-3">Be the First to<br/> Get Limited Editions</h2>
                <Link to="/Collection" className="cta_btn text-white">Shop Now+</Link>
            </div>
        </section>
        <ReviewSlider/>
    </>
};
export default Homepage;