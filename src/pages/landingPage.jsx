import './style.css'
import { useEffect } from 'react';
import OurProductLandingPage from '../sections/landingPages/ourProduct';
import TaglineLandingPage from '../sections/landingPages/tagline';
import Story from '../components/landingPages/story';
import StoryRight from '../components/landingPages/storyRight';
import Gallery from '../sections/landingPages/gallery';

const LandingPage = () => {
  useEffect(() => {
    const nextButton = document.getElementById('next');

    if (nextButton) {
      const intervalId = setInterval(() => {
        nextButton.click();
      }, 5000);

      return () => clearInterval(intervalId);
    }
  }, []);

  const burgerButtonClicked = () => {
    const navContent = document.getElementById('navbarSupportedContent');
    const navContainer = document.getElementById('navbar-container');
    const buttonNavbar = document.getElementById('button-navbar');
    navContent.classList.toggle('bg-coffee');
    navContainer.classList.toggle('z-index-99');
    buttonNavbar.classList.toggle('navbar-button-border');
  }

  return (
    <section id='home' className="main-container bg-dark text-white">
      <div className=" position-relative">
        <div id='navbar-container' className="navbar-fixed py-2 position-absolute">
          <nav className="navbar navbar-expand-lg container border-bottom border-1">
            <div className="container-fluid">
              <a className="navbar-brand text-center text-md-start text-white" href="#home"><h3>Saveurior Coffee</h3></a>
              <button onClick={burgerButtonClicked} className="navbar-toggler bg-coffee" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0 navbar">
                  <li className="nav-item me-md-5 me-0 mt-4 mb-2 mb-md-0 mt-md-0">
                    <a className="nav-link active text-white" aria-current="page" href="#home">Home</a>
                  </li>
                  <li className="nav-item me-md-5 me-0 ms-md-3 ms-0 mb-2 mb-md-0 ">
                    <a className="nav-link active text-white" aria-current="page" href="#story">About</a>
                  </li>
                  <li className="nav-item me-md-5 me-0 ms-md-3 ms-0 mb-2 mb-md-0 ">
                    <a className="nav-link active text-white" aria-current="page" href="#product">Menu</a>
                  </li>
                  <li className="nav-item me-md-5 me-0 ms-md-3 ms-0 mb-2 mb-md-0">
                    <a className="nav-link active text-white" aria-current="page" href="#contact">Contact</a>
                  </li>
                  <li className="nav-item mt-2 mt-md-0">
                    <form className="ms-md-5">
                      <button id='button-navbar' className="btn button-coffee text-white" type="submit">Shop Coffee</button>
                    </form>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div id="carouselExampleIndicators" className="carousel slide w-100">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://images.unsplash.com/photo-1515442261605-65987783cb6a?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100 carousel-image" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://plus.unsplash.com/premium_photo-1675362191731-0b7947b5f1b6?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100 carousel-image" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&q=80&w=1928&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100 carousel-image" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev d-none" style={{ height: "100svh" }} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button id='next' className="carousel-control-next d-none" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div style={{ margin: "0 auto", left: "0", right: 0 }} className="position-absolute text-center carousel-header-container">
          <div className="text-white fw-bold">
            <h3>Welcome</h3>
            <h1 className=" text-uppercase custom-font">Your coffee is ready to serve <br /> Do you want to order a coffee ?</h1>
          </div>
          <div className="mt-5">
            <a href='#product' className="btn px-3 py-2 text-white rounded me-4 button-coffee">Order Now</a>
            <a href='#product' className="btn px-3 py-2 text-white rounded btn-view-menu">View Menu</a>
          </div>
        </div>
      </div>

      <Story
        title="Why Saveurior Coffee"
        content='Saveurior Coffee is the ultimate choice for coffee lovers who value superior quality and flavour. Our name "Saveurior" comes from the French word "Saveur" meaning flavour, combined with the suffix "-ior" taken from the Indonesian word "superior", reflecting our determination to be the best in the world of coffee. We are committed to dedication to quality in the selection, processing, and serving of coffee, we will indulge your taste buds with every exceptional sip.'
        image="images/Catalogue - 2.png"
        position="0px -10px"
      />

      <TaglineLandingPage />

      <Story
        title="From Pangalengan to Your Cup"
        content='Saveurior coffee comes from the Pangalengan area which is known worldwide for its quality coffee. We carefully select the best arabica beans, then process them using the fullwash method to maintain the purity of the authentic coffee flavour. We proudly uphold the standard of authenticity by using 100% pure arabica coffee without any blends. That way, you can experience the true delicacy of coffee that characterises our region.'
        image="https://majalah.ottencoffee.co.id/wp-content/uploads/2016/03/guatemala-central-ame_moor-3.jpg"
      />

      <StoryRight
        title="Saveurior Coffee Vision and Mission"
        content='Our vision is to be a provider of quality and authentic arabica coffee that can be enjoyed by coffee lovers in Indonesia and can market our products abroad. Our mission is to ensure that the coffee beans have a quality flavour and innovate in providing services to customers.'
        image="images/3.jpg"
      />

      <OurProductLandingPage />

      <div id='gallery' className="row w-100 mt-5 mt-4 ps-4 ps-md-5 ps-4">
        <h1 className='text-center mb-5'>Gallery Saveuriror Coffee</h1>
        <Gallery />
      </div>

      <div id='contact' className="row w-100 p-5 bg-coffee mt-5">
        <div className="col-md-4 ps-md-5">
          <p><i class="fa fa-phone" aria-hidden="true"></i>+628 2229 5902 40</p>
        </div>
        <div className="col-md-4 ps-md-5">
          <p><i class="fa fa-envelope" aria-hidden="true"></i> seveurirorcoffe@gmail.com</p>
        </div>
        <div className="col-md-4 ps-md-5">
          <p><img src='https://cdn.icon-icons.com/icons2/2037/PNG/512/ig_instagram_media_social_icon_124260.png' width="20px" height="20px" className='rounded me-1'/>saveurior.coffee</p>
        </div>
      </div>
    </section>
  )
}

export default LandingPage