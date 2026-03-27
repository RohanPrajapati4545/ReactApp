import NewArrival from '../components/NewArrival'
import Product from '../components/Product'
import Shopping from '../components/Shopping'
import homeIMG from '../images/slider-bg.jpg'
const Home = () => {
  return (
    <>


      <section
        className="hero-section d-flex align-items-center"
        style={{
          backgroundImage: `url(${homeIMG})`,
          backgroundSize: "cover",
          minHeight: "90vh",
          width: '100%',
          overflow: "hidden"
        }}
      >
        <div className="m-4">
          <div className="rows">

            <div className="col-12 col-lg-6">
              <h1 className="text-danger fw-bold display-2 hero-heading">Extra 10% Off</h1>

              <h2 className="fw-bold display-3 text-dark hero-subheading">
                On Winter Wear
              </h2>

              <p className="mt-4 lh-lg hero-text">
                It is time to redefine your style statement with our treasure-trove of trendy items. Our online store brings you the latest in designer products straight out of fashion houses. You can shop online at Famms from the comfort of your home and get your favourites delivered right to your doorstep.</p>

              <button className="btn btn-danger px-4 py-2 mt-3 allbuttons">
                Shop Now
              </button>


            </div>

          </div>
        </div>
      </section>

      <Shopping />
      <NewArrival />
      <Product />

      <section className='mt-5'>
        <div className="bg-secondary-subtle py-5">
          <div className="container text-center py-5">
            <h2 className="fw-semibold mb-4 text-dark">
              Subscribe To Get Discount Offers
            </h2>

            <div className="d-flex justify-content-center mb-4">
              <input
                type="email"
                className="form-control rounded-pill px-4 py-3 w-75"
                placeholder="Enter Your Email"
              />
            </div>

            <button className="btn btn-danger rounded-pill px-5 py-2 allbuttons">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>

    </>
  )
}

export default Home
