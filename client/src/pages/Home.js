import { Link } from "react-router-dom";
import "../css/home.css";
import carousel1 from "../images/Design sans titre (17).png";
import carousel2 from "../images/Design sans titre (16).png";
import carousel3 from "../images/Design sans titre (20).png";
function Home() {
  return (
    <div>
      <section className="main">
        <div className="container ">
          <div className="row justify-content-center align-items-center py-5  ">
            <div className="col-lg-6  py-5">
              <p className="mt-5 mt-md-0 ms-0 ms-md-5   child1">I.O Gâteaux </p>
              <h1 className="slogan">
                Unleash Your Sweet Imagination Where Art Meets Cake!
              </h1>
              <div className="line my-4"></div>
              <p className="child2">
                Here, we celebrate the art of cake design, where flavors,
                creativity, and beauty come together in perfect harmony,Our
                talented team creates mouthwatering cakes that are truly works
                of art
              </p>

              <Link to="/shop ">
                <button className="mbtn2">shop now </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================best product============================================================================= */}
      <section className="OurProduct pb-5">
        <div className="container">
          <div className="row py-5 text-black">
            <div className="col-lg-6 m-auto">
              <h1 className="m-0">Our Products </h1>
              <div className="line my-4"></div>
              <h5 className="m-0">
                Embark on a flavorful journey with our exquisite cake designs,
                macarons, and cookies, where every bite is a delightful work of
                art.
              </h5>
            </div>
            <div className="row text-center py-5">
              <div
                id="carouselExampleControls"
                class="carousel slide"
                data-mdb-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src={carousel1}
                      class="d-block w-100"
                      alt="Wild Landscape"
                    />
                  </div>
                  <div class="carousel-item">
                    <img src={carousel2} class="d-block w-100" alt="Camera" />
                  </div>
                  <div class="carousel-item">
                    <img
                      src={carousel3}
                      class="d-block w-100"
                      alt="Exotic Fruits"
                    />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-mdb-target="#carouselExampleControls"
                  data-mdb-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-mdb-target="#carouselExampleControls"
                  data-mdb-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" text-center">
          <Link className="mbtn3  mt-2" to="/shop ">
            discover our Products
          </Link>
        </div>
      </section>
      {/* ===================================================About============================================================================= */}
      <section className="about" id="about">
        <div className="container py-5">
          <div className="row py-5 ">
            <div className="col-lg-5  py-5 offset-lg-5 col-md-6 col-sm-12 col-12 ">
              <p className="child1 m-0">I.O Gâteaux</p>
              <h1>About I.O Gâteaux </h1>
              <div className="line my-4"></div>
              <p className="child2">
                Welcome to I.O Gâteaux, where passion for cakes and artistic
                design come together! We are a dedicated team of skilled cake
                designers who believe that every celebration deserves a
                beautifully crafted cake that not only tastes amazing but also
                leaves a lasting impression
              </p>
              <Link to="/about">
                <button className="mbtn1 mt-4"> Read More</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
