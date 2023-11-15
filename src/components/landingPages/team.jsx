const Team = ({image, name, }) => {
    return (
        <div className="col-md-6 col-lg-3 rounded">
            <div className="card bg-dark text-white p-0 pb-3 shadow mb-5" style={{ border: 0, textAlign: "left", height: "450px" }}>
                <img style={{ height: "350px", objectFit:"cover" }} src={image} className="card-img-top" alt="..." />
                <div className="card-body p-4">
                    <h5 className="card-title text-center">{name}</h5>
                </div>
            </div>
        </div>
    )
}

export default Team