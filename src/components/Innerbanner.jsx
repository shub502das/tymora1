const Innerbanner = ({bgimage, bannertitle}) => {

    return <>
        <section className="inner_banner collection_banner text-center" style={{ backgroundImage: `url(${bgimage})` }}>
            <div className="container">
                <h1 className="cmn_head text-white">{bannertitle}</h1>
            </div>
        </section>
    </>
};

export default Innerbanner;