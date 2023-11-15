const TaglineContentLandingPage = ({icon, title, content}) => {
    return(
        <div className="col-md-4 mb-4 mb-md-0 text-center d-flex flex-column justify-content-center align-items-center">
        <h2><i className={icon} aria-hidden="true"></i></h2>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    )
}

export default TaglineContentLandingPage;