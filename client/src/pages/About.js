import React from "react";
import "../css/about.css";
import { Link } from "react-router-dom";
function About() {
  return (
    <div className="bodyabout">
      <section className="sectionAbout">
        <div class="image"></div>

        <div class="content">
          <h2>About Us</h2>
          <span></span>

          <p>
            At IO gâteaux , we specialize in personalized cake design for all
            special occasions. From stunning engagement and wedding cakes to
            delicious birthday treats, our talented team creates edible works of
            art that tell your story. We also offer a range of exquisite pies,
            cupcakes, muffins, and macarons. Every bite is crafted with love and
            meticulous attention to detail. Trust us to add a sweet touch to
            your memorable moments!"
          </p>

          <ul class="links">
            <li>
            <Link to="/shop ">
            service
          </Link>
            </li>

            <div class="vertical-line"></div>

            <li>
              <a href="#footer">contact</a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default About;
