import TaglineContentLandingPage from "../../components/landingPages/tagline"

const TaglineLandingPage = () => {
    return (
        <div className="row w-100 mt-3 tagline-container py-5 px-5 px-md-0 py-md-0">
            <TaglineContentLandingPage
                icon="fa fa-shopping-cart"
                title="Easy To Order"
                content="Our products are very easy to order. What are you waiting for, click order now. Satisfaction Guaranteed"
            />
            <TaglineContentLandingPage
                icon="fa fa-paper-plane"
                title="Fast Delivery"
                content="With our cutting-edge technology, your order is processed immediately after payment and delivered to your home"
            />
            <TaglineContentLandingPage
                icon="fa fa-coffee"
                title="Quality Coffee"
                content="We always maintain the quality and flavour of our coffee so that it is preserved when it reaches your home."
            />
        </div>
    )
}

export default TaglineLandingPage