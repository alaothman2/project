import React from "react";

function Footer() {
  return (
    <div>
      <footer
        class="text-center text-lg-start bg-light text-muted "
        id="footer"
      >
        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div class="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a
              href="https://www.facebook.com/profile.php?id=100075941617190"
              class="me-4 text-reset"
            >
              <i class="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/io_gateaux/"
              class="me-4 text-reset"
            >
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </section>

        <section class="">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                  <i class="fas fa-gem me-3"></i>I.O Gataeux
                </h6>
                <p>
                 welcome to your home 
                </p>
              </div>

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Products</h6>
                <p>Cake design</p>
                <p>Macaron</p>
                <p>Morceau de gateau</p>
                <p>Muffin</p>
                <p>Tarte</p>
              </div>

           

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i class="fas fa-home me-3"></i>Ariana
                </p>
                <p>
                  <i class="fas fa-envelope me-3"></i>
                  I.O.Gataeux@gmail.com
                </p>
                <p>
                  <i class="fas fa-phone me-3"></i> + 216 25 778 118    
                </p>
                <p>
                  <i class="fas fa-print me-3"></i> + 216 50 891 407
                </p>
              </div>
            </div>
          </div>
        </section>

        <div class="text-center p-4">
          © 2023 Copyright:
          <a class="text-reset fw-bold" href="https://mdbootstrap.com/">
            I.O Gataeux.com
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
