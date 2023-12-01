import { Link } from "react-router-dom"

const CardLandingPage = ({ image, title, content, price, link, extraButton = {} }) => {
    return (
        <div className="col-md-6 col-lg-4 rounded">
            <div className="card bg-dark text-white p-0 pb-3 shadow mb-5" style={{ border: 0, textAlign: "left", height: "520px" }}>
                <div style={{ height: "200px" }}>
                    <img style={{ objectFit: "cover", height: "100%" }} src={image} className="card-img-top" alt="..." />
                </div>
                <div className="card-body p-4">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text" style={{height:"80px"}}>{content}</p>
                    <p className="card-text">{price}</p>
                    <Link to={link} className='btn button-coffee mt-3 me-3'>Order Now</Link>
                    {extraButton.link ? <Link to={extraButton.link} className='btn button-coffee mt-3'>{extraButton.label}</Link> : null}
                </div>
            </div>
        </div>
    )
}

export default CardLandingPage
