const StoryRight = ({ title, content, image }) => {
    return (
        <div id="story" className="row w-100 pb-5">
            <div className="col-md-6 ps-5 mt-3 mt-md-5 mt-lg-0 pt-md-5 pt-lg-0 mb-4 mb-md-0">
                <img className='rounded image-our-story' style={{ objectFit: "cover", width: "100%" }} src={image} alt="" />
            </div>
            <div className="col-md-6 pe-4 pe-md-0 ps-5 mb-md-5">
                <h1 className=' lh-base'>{title}</h1>
                <p className='mt-md-5 mt-4 lh-lg text-justify'>{content}</p>
            </div>
        </div>
    )
}

export default StoryRight