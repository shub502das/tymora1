import {Link} from 'react-router-dom'

const Navmenu = ({menuOpen}) => {
    return <div className="nav_sec py-0 py-md-3">
            <div className="container">
                <nav className={`nav_menu ${menuOpen ? 'open' : ''} w-100 mx-auto bg-white`}>
                    <ul className="d-flex align-items-center justify-content-between flex-column flex-md-row">
                        <li><a href="#bestsellers">Bestsellers</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><Link to="/Collection">Collection</Link></li>
                        <li><a href="#reviews">Reviews</a></li>
                        <li><a href="#footer">Contact Us</a></li>
                    </ul>
                </nav>
            </div>
        </div>
};
export default Navmenu;