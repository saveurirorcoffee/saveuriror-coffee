import CardLandingPage from '../../components/landingPages/card';
const OurProductLandingPage = () => {
    return (
        <div id='product' className="row w-100 mt-5 mt-4 ps-4 ps-md-5 ps-4">
            <h1 className='text-center mb-5'>Our Featured Products</h1>
            <CardLandingPage
                image="https://th.bing.com/th/id/OIP.YapA0lZmKl3H0lKfvWTNVwHaG_?pid=ImgDet&rs=1"
                title="Arabica Greenbeans Coffee"
                content="Premium unroasted coffee beans for perfect brews. Ideal for coffee shop partnerships. Unleash their quality potential!"
                price="Coming soon"
                link="/404"
            />
            <CardLandingPage
                image="https://th.bing.com/th/id/R.da3e3744b64a85a769a5c01c7f18e1cc?rik=QXmQtOuTwAHu7A&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fb%2fb5%2fMedium_roasted_Arabica_coffee_beans.jpg&ehk=Zf75HiIhszfmZwZa9dlaof9TGDTJ6RkldoCA9h%2fjq4g%3d&risl=1&pid=ImgRaw&r=0"
                title="<b>Arabica Coffee Roasted Beans</b>"
                content="Unleash the bold flavors of meticulously roasted coffee beans, crafted for a rich and deep taste. Elevate your coffee experience sip by sip!"
                price="Coming soon"
                link="/404"
            />
            <CardLandingPage
                image="images/product.jpeg"
                title={<b>Arabica Pangalengan Drip Coffee</b>}
                content="Enjoy the convenience of Arabica Drip Coffee with its handy drip bag packaging. Just pour hot water over the drip bag for a rich and hassle-free coffee experience!"
                price={<p><span style={{ textDecoration: "line-through" }}>Rp 58.000</span>&nbsp;<span>Rp 40.250</span></p>}
                link="https://www.marketekspor.com/product/kopi-bubuk-pangalengan-saveurior-coffee-varian-original/"
                extraButton={{ link: "https://shp.ee/drmmuic", label: "Order on Shopee" }}
            />
        </div>
    )
}

export default OurProductLandingPage
