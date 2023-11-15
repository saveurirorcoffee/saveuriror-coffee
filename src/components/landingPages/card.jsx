import { Link } from "react-router-dom"

const CardLandingPage = ({ image, title, content, price, link}) => {
    return (
        <div className="col-md-6 col-lg-4 rounded">
            <div className="card bg-dark text-white p-0 pb-3 shadow mb-5" style={{ border: 0, textAlign: "left", height: "520px" }}>
                <img style={{ height: "200px" }} src={image} className="card-img-top" alt="..." />
                <div className="card-body p-4">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text" style={{height:"80px"}}>{content}</p>
                    <p className="card-text">{price}</p>
                    <Link to={link} className='btn button-coffee mt-3'>Order Now</Link>
                </div>
            </div>
        </div>
    )
}

export default CardLandingPage