import WatchDetails from "../components/Watchdetails";

const ProductdetailsPage = () => {

    let sizeGuide = [
        {
           guideimg: "images/size_guide1.jpg", 
        },
        {
           guideimg: "images/size_guide2.jpg", 
        },
        {
           guideimg: "images/size_guide3.jpg", 
        }
    ];

    return <>
        <WatchDetails/>
        <section className="size_guide text-center">
            <div className="container">
                <h2 className="cmn_head blue_bar text_blue pb-2">Look at Our Size Quide</h2>
                <p className="cmn_para text_grey mt-3">Find Your Perfect Fit Before Making Your First Purchase</p>
                <div className="row">
                    {sizeGuide.map((guideItem, index) => (
                        <div className="col-md-4 mt-3" key={index}>
                            <div className="each_size mx-auto">
                                <img src={guideItem.guideimg} alt="Size Guide Image"/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>
};
export default ProductdetailsPage;