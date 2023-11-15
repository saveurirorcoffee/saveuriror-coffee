import CardLandingPage from '../../components/landingPages/card';
const OurProductLandingPage = () => {
    return (
        <div id='product' className="row w-100 mt-5 mt-4 ps-4 ps-md-5 ps-4">
            <h1 className='text-center mb-5'>Our Featured Products</h1>
            <CardLandingPage
                image="https://th.bing.com/th/id/OIP.YapA0lZmKl3H0lKfvWTNVwHaG_?pid=ImgDet&rs=1"
                title="Arabica Greenbeans Coffee"
                content="Quality coffee beans that have not undergone the roasting process. Suitable for coffee shops that want to be partner"
                price="Coming soon"
                link="/404"
            />
            <CardLandingPage
                image="https://th.bing.com/th/id/R.da3e3744b64a85a769a5c01c7f18e1cc?rik=QXmQtOuTwAHu7A&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fb%2fb5%2fMedium_roasted_Arabica_coffee_beans.jpg&ehk=Zf75HiIhszfmZwZa9dlaof9TGDTJ6RkldoCA9h%2fjq4g%3d&risl=1&pid=ImgRaw&r=0"
                title="Arabica Coffee Roasted Beans"
                content="Coffee beans that have gone through the roasting process, ready to deliver a rich and deep flavour."
                price="Coming soon"
                link="/404"
            />
            <CardLandingPage
                image="images/5.jpg"
                title="Pangalengan Ground Arabica Coffee - Saveurior Coffee - Varian Original"
                content="Ready-to-brew coffee variants provide convenience i n enjoying the distinctive flavour of coffee."
                price="Rp58.000"
                link="https://www.marketekspor.com/product/kopi-bubuk-pangalengan-saveurior-coffee-varian-original/"
            />
        </div>
    )
}

export default OurProductLandingPage