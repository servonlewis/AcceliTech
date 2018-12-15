import React from "react";
import jquery from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../public/css/plugins/animate.min.css";
import "../../public/css/plugins/linea-basic.css";
import "../../public/css/plugins/fontawesome-all.min.css";
import "../../public/css/plugins/YouTubePopUp.css";
import "../../public/css/plugins/magnific-popup.css";
import "../../public/css/plugins/owl.carousel.min.css";
import "../../public/css/plugins/owl.theme.default.min.css";
import "../../public/css/plugins/helper.css";
import "../../public/css/style.css";
window.$ = window.jQuery = jquery;
require("../../../node_modules/jquery-migrate/dist/jquery-migrate");
require("../../../node_modules/popper.js/dist/popper");
require("../../../node_modules/bootstrap/dist/js/bootstrap");
require("../../../node_modules/scrollit/scrollIt");
require("../../../node_modules/jquery-waypoints/waypoints");
require("../../../node_modules/owl.carousel/dist/owl.carousel");
require("../../../node_modules/magnific-popup/dist/jquery.magnific-popup");
require("../../../node_modules/jquery.stellar/jquery.stellar");
require("../../../node_modules/isotope-layout/dist/isotope.pkgd");
require("../../../node_modules/validator/index");
require("../../public/js/scripts.js");

export const FullSite = props => {
  return (
    <div>
      <div className="loading">
        <div className="text-center middle">
          <div className="lds-ellipsis">
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
      </div>
      {/*         
    	<!-- End Loading ====
    	======================================= -->

       
    	<!-- =====================================
    	==== Start Navbar --> */}

      <nav className="navbar navbar-expand-lg">
        <div className="container">
          {/*         <!-- Logo --> */}
          <a className="logo" href="#">
            <img src={require("../../public/img/accelLogo.png")} alt="logo" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar">
              <i className="fas fa-bars" />
            </span>
          </button>

          {/* 	        <!-- navbar links --> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#" data-scroll-nav="0">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" data-scroll-nav="1">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" data-scroll-nav="2">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" data-scroll-nav="3">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" data-scroll-nav="4">
                  Price
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" data-scroll-nav="5">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" data-scroll-nav="6">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* 
    	<!-- End Navbar ====
    	======================================= -->


    	<!-- =====================================
    	==== Start Header -->
 */}
      <header
        className="header valign bg-img"
        data-scroll-index="0"
        data-overlay-dark="7"
        data-background={require("../../public/img/accelLogo.png")}
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div className="text-center caption mt-30">
            <h4>We Are</h4>
            <h1>Big Digital Agency</h1>
            <div className="row">
              <div className="offset-md-1 col-md-10 offset-lg-2 col-lg-8">
                <p>
                  We are a passionate digital design agency that specializes in
                  beautiful and easy-to-use digital design & web development
                  services.
                </p>
              </div>
            </div>
            <a href="#0" className="butn butn-light mt-30">
              <span>Get Started</span>
            </a>
          </div>
        </div>

        <div className="curve curve-bottom curve-center" />
      </header>

      {/*   	<!-- End Header ====
    	======================================= -->



        <!-- =====================================
        ==== Start Hero -->
 */}
      <section className="hero" data-scroll-index="1">
        <div className="section-padding pos-re">
          <div className="container">
            <div className="row">
              <div className="offset-lg-2 col-lg-8 offset-md-1 col-md-10 text-center mb-80">
                <h4 className="extra-title">
                  About Our <span>Creative</span> Agency
                </h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book It has survived
                  not only five centuries.
                </p>
              </div>

              <div className="feat-item mb-md50 col-lg-4">
                <div className="text-center">
                  <span className="icon icon-basic-anchor" />
                  <h5>Web Design</h5>
                  <h6>Modern & Clean Design</h6>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and type
                    setting industry
                  </p>
                </div>
              </div>

              <div className="feat-item active mb-md50 col-lg-4">
                <div className="text-center">
                  <span className="icon icon-basic-pencil-ruler" />
                  <h5>Development</h5>
                  <h6>Web & Mobile Development</h6>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and type
                    setting industry
                  </p>
                </div>
              </div>

              <div className="feat-item col-lg-4">
                <div className="text-center">
                  <span className="icon icon-basic-cards-diamonds" />
                  <h5>Branding</h5>
                  <h6>Logo & Motion Design</h6>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and type
                    setting industry
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="curve curve-gray-b curve-bottom" />
        </div>

        <div className="tabs-section section-padding bg-gray">
          <div className="container">
            <div className="row">
              <ul
                className="col-md-12 nav nav-pills tabs"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item one active">
                  <a
                    className="nav-link active"
                    id="pills-home-tab"
                    data-toggle="pill"
                    href="#tab1"
                    role="tab"
                    aria-controls="tab1"
                    aria-selected="true"
                  >
                    About Us
                  </a>
                </li>
                <li className="nav-item two">
                  <a
                    className="nav-link"
                    id="pills-profile-tab"
                    data-toggle="pill"
                    href="#tab2"
                    role="tab"
                    aria-controls="tab2"
                    aria-selected="false"
                  >
                    Our Mission
                  </a>
                </li>
                <li className="nav-item three">
                  <a
                    className="nav-link"
                    id="pills-contact-tab"
                    data-toggle="pill"
                    href="#tab3"
                    role="tab"
                    aria-controls="tab3"
                    aria-selected="false"
                  >
                    Why Us?
                  </a>
                </li>
              </ul>

              <div className="tab-content col-lg-12" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="tab1"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <div className="row">
                    <div className="left col-lg-6">
                      <div className="about box-white">
                        <h5 className="title">About Us</h5>
                        <h6 className="sub-title">We Are A Creative Agency</h6>
                        <p>
                          We’re full service which means we’ve got you covered
                          on design and content right through to digital.
                        </p>

                        {/*    <!-- Skills -->*/}
                        <div className="skills mt-40">
                          <div className="skill-item mb-30">
                            <h6>Web Design</h6>
                            <div className="skill-progress">
                              <div className="progres" data-value="90%" />
                            </div>
                          </div>
                          <div className="skill-item mb-30">
                            <h6>Branding</h6>
                            <div className="skill-progress">
                              <div className="progres" data-value="75%" />
                            </div>
                          </div>
                          <div className="skill-item">
                            <h6>Development</h6>
                            <div className="skill-progress">
                              <div className="progres" data-value="80%" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 image">
                      <div className="img">
                        <img src={require("../../public/img/2.jpg")} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="tab2"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <div className="row">
                    <div className="left col-lg-6">
                      <div className="mission box-white">
                        <h5 className="title">Our Mission</h5>
                        <h6 className="sub-title">We Are A Creative Agency</h6>
                        <p className="mb-10">
                          <b>We’re full service which means</b> we’ve got you
                          covered on design and content right through to
                          digital. You’ll form a lasting relationship with us,{" "}
                          <b>collaboration is central to</b> everything we do.{" "}
                          <b>We’ll push you out of</b> your comfort zone from
                          time, but this is where you’ll shine. Bottom line is
                          we want you to succeed at Faculty.
                        </p>
                        <p>
                          You’ll form a lasting relationship with us,
                          collaboration is central to everything we do. We’ll
                          push you out of your comfort zone from time-to-time,
                          but this is where you’ll shine. Bottom line is we want
                          you to succeed at Faculty.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 image">
                      <div className="img">
                        <img src={require("../../public/img/3.jpg")} alt="" />
                        <a className="vid" href="https://vimeo.com/127203262">
                          <span className="vid-butn">
                            <i className="fas fa-play-circle" />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="tab3"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <div className="row">
                    <div className="left col-lg-6">
                      <div className="why-us box-white">
                        <h5 className="title">Why Choose Us?</h5>
                        <h6 className="sub-title">We Are A Creative Agency</h6>
                        <p>
                          We’re full service which means we’ve got you covered
                          on design and content right through to digital.You’ll
                          form a lasting relationship with us, collaboration is
                          central to everything we do.
                        </p>
                        <ul className="feat mt-30 row">
                          <li className="col-sm-4">
                            <span className="icon icon-basic-display" />
                            <h6>Perfect Design</h6>
                          </li>
                          <li className="col-sm-4">
                            <span className="icon icon-basic-picture-multiple" />
                            <h6>Retina Ready</h6>
                          </li>
                          <li className="col-sm-4">
                            <span className="icon icon-basic-headset" />
                            <h6>Friendly Support</h6>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6 image">
                      <div className="img owl-carousel owl-theme carousel-single">
                        <img src={require("../../public/img/3.jpg")} alt="" />
                        <img src={require("../../public/img/3.jpg")} alt="" />
                        <img src={require("../../public/img/3.jpg")} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*         <!-- End Hero ====
        ======================================= -->


        <!-- =====================================
        ==== Start Process -->
 */}
      <div
        className="process section-padding bg-img bg-fixed pos-re text-center test "
        data-overlay-dark="7"
        data-background={require("../../public/img/bg6.jpg")}
      >
        <div className="container">
          <div className="row">
            <div className="section-head offset-md-2 col-md-8 offset-lg-3 col-lg-6">
              <h4>
                <span>Our</span> Process
              </h4>
              <p>
                We are a passionate digital design agency that specializes in
                beautiful and easy-to-use digital design & web development
                services.
              </p>
            </div>
            <div className="full-width clearfix" />

            <div className="col-lg-3 col-md-6">
              <div className="item first mb-md50">
                <img
                  src={require("../../public/img/arrow.png")}
                  className="tobotm"
                  alt=""
                />
                <span className="icon icon-basic-lightbulb" />
                <div className="cont">
                  <h3>01</h3>
                  <h6>Ideas</h6>
                  <p>
                    Nulla metus metus ullamcorper vel tincidunt sed euismod nibh
                    Quisque volutpat
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="item odd mb-md50">
                <img src={require("../../public/img/arrow.png")} alt="" />
                <span className="icon icon-basic-book-pencil" />
                <div className="cont">
                  <h3>02</h3>
                  <h6>Planning</h6>
                  <p>
                    Nulla metus metus ullamcorper vel tincidunt sed euismod nibh
                    Quisque volutpat
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="item mb-sm50">
                <img
                  src={require("../../public/img/arrow.png")}
                  className="tobotm"
                  alt=""
                />
                <span className="icon icon-basic-pencil-ruler" />
                <div className="cont">
                  <h3>03</h3>
                  <h6>Development</h6>
                  <p>
                    Nulla metus metus ullamcorper vel tincidunt sed euismod nibh
                    Quisque volutpat
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="item odd">
                <span className="icon icon-basic-server-upload" />
                <div className="cont">
                  <h3>04</h3>
                  <h6>Testing</h6>
                  <p>
                    Nulla metus metus ullamcorper vel tincidunt sed euismod nibh
                    Quisque volutpat
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="curve curve-gray-t curve-top" />
        <div className="curve curve-bottom" />
      </div>

      {/*     <!-- End Process ====
    ======================================= -->


    <!-- =====================================
    ==== Start Works --> */}

      <section className="works section-padding" data-scroll-index="2">
        <div className="container">
          <div className="row">
            <div className="section-head offset-md-2 col-md-8 offset-lg-3 col-lg-6">
              <h4>
                <span>Creative</span> Portfolio
              </h4>
              <p>
                We are a passionate digital design agency that specializes in
                beautiful and easy-to-use digital design & web development
                services.
              </p>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            {/*     <!-- filter links --> */}
            <div className="filtering text-center mb-30 col-sm-12">
              <div className="filter">
                <span data-filter="*" className="active">
                  All
                </span>
                <span data-filter=".brand">Brand</span>
                <span data-filter=".web">Design</span>
                <span data-filter=".graphic">Graphic</span>
              </div>
            </div>

            <div className="clearfix" />

            {/*  <!-- gallery --> */}
            <div className="gallery full-width">
              {/*   <!-- gallery item --> */}
              <div className="col-lg-3 col-md-6 items graphic">
                <div className="item-img">
                  <img src={require("../../public/img/1.jpg")} alt="image" />
                  <div className="item-img-overlay">
                    <div className="overlay-info full-width">
                      <p>Logo | Branding</p>
                      <h6>Creative Web Design</h6>
                      <a
                        href="../../public/img/portfolio/1.jpg"
                        className="popimg"
                      >
                        <span className="icon">
                          <i className="fas fa-long-arrow-alt-right" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/*     <!-- gallery item --> */}
              <div className="col-lg-3 col-md-6 items web">
                <div className="item-img">
                  <img src={require("../../public/img/1.jpg")} alt="image" />
                  <div className="item-img-overlay">
                    <div className="overlay-info full-width">
                      <p>Logo | Branding</p>
                      <h6>Creative Web Design</h6>
                      <a
                        href="../../public/img/portfolio/2.jpg"
                        className="popimg"
                      >
                        <span className="icon">
                          <i className="fas fa-long-arrow-alt-right" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- gallery item --> */}
              <div className="col-lg-3 col-md-6 items brand">
                <div className="item-img">
                  <img src={require("../../public/img/1.jpg")} alt="image" />
                  <div className="item-img-overlay">
                    <div className="overlay-info full-width">
                      <p>Logo | Branding</p>
                      <h6>Creative Web Design</h6>
                      <a
                        href="../../public/img/portfolio/3.jpg"
                        className="popimg"
                      >
                        <span className="icon">
                          <i className="fas fa-long-arrow-alt-right" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/*  <!-- gallery item --> */}
              <div className="col-lg-3 col-md-6 items graphic">
                <div className="item-img">
                  <img src={require("../../public/img/1.jpg")} alt="image" />
                  <div className="item-img-overlay">
                    <div className="overlay-info full-width">
                      <p>Logo | Branding</p>
                      <h6>Creative Web Design</h6>
                      <a
                        href="../../public/img/portfolio/4.jpg"
                        className="popimg"
                      >
                        <span className="icon">
                          <i className="fas fa-long-arrow-alt-right" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- gallery item --> */}
              <div className="col-lg-3 col-md-6 items web">
                <div className="item-img">
                  <img src={require("../../public/img/1.jpg")} alt="image" />
                  <div className="item-img-overlay">
                    <div className="overlay-info full-width">
                      <p>Logo | Branding</p>
                      <h6>Creative Web Design</h6>
                      <a
                        href="../../public/img/portfolio/5.jpg"
                        className="popimg"
                      >
                        <span className="icon">
                          <i className="fas fa-long-arrow-alt-right" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/*   <!-- gallery item --> */}
              <div className="col-lg-3 col-md-6 items brand">
                <div className="item-img">
                  <img src={require("../../public/img/1.jpg")} alt="image" />
                  <div className="item-img-overlay">
                    <div className="overlay-info full-width">
                      <p>Logo | Branding</p>
                      <h6>Creative Web Design</h6>
                      <a
                        href="../../public/img/portfolio/6.jpg"
                        className="popimg"
                      >
                        <span className="icon">
                          <i className="fas fa-long-arrow-alt-right" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/*    <!-- gallery item --> */}
              <div className="col-lg-3 col-md-6 items brand">
                <div className="item-img">
                  <img src={require("../../public/img/1.jpg")} alt="image" />
                  <div className="item-img-overlay">
                    <div className="overlay-info full-width">
                      <p>Logo | Branding</p>
                      <h6>Creative Web Design</h6>
                      <a
                        href="../../public/img/portfolio/7.jpg"
                        className="popimg"
                      >
                        <span className="icon">
                          <i className="fas fa-long-arrow-alt-right" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/*    <!-- gallery item --> */}
              <div className="col-lg-3 col-md-6 items graphic">
                <div className="item-img">
                  <img src={require("../../public/img/1.jpg")} alt="image" />
                  <div className="item-img-overlay">
                    <div className="overlay-info full-width">
                      <p>Logo | Branding</p>
                      <h6>Creative Web Design</h6>
                      <a
                        href="../../public/img/portfolio/8.jpg"
                        className="popimg"
                      >
                        <span className="icon">
                          <i className="fas fa-long-arrow-alt-right" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*         <!-- End Works ====
        ======================================= -->


        <!-- =====================================
        ==== Start Why-us -->
 */}
      <div className="why-us section-padding bg-gray pos-re">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="img mb-md50">
                <img src={require("../../public/img/1.jpg")} alt="image" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="content pt-10">
                <div className="item mb-40">
                  <span className="icon icon-basic-display" />
                  <div className="cont">
                    <h5>Fully Responsive</h5>
                    <p>
                      Nulla metus ullamcorper vel tincidunt sed euismod nibh
                      Quisque volutpat velit className aptent taciti sociosqu.
                    </p>
                  </div>
                </div>
                <div className="item mb-40">
                  <span className="icon icon-basic-bolt" />
                  <div className="cont">
                    <h5>Clean & Modern Design</h5>
                    <p>
                      Nulla metus ullamcorper vel tincidunt sed euismod nibh
                      Quisque volutpat velit className aptent taciti sociosqu.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <span className="icon icon-basic-headset" />
                  <div className="cont">
                    <h5>Friendly Support</h5>
                    <p>
                      Nulla metus ullamcorper vel tincidunt sed euismod nibh
                      Quisque volutpat velit className aptent taciti sociosqu.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="curve curve-top" />
        <div className="curve curve-bottom" />
      </div>

      {/*      <!-- End Why-us ====
        ======================================= -->


        <!-- =====================================
        ==== Start Teams --> */}

      <section className="team section-padding" data-scroll-index="3">
        <div className="container">
          <div className="row">
            <div className="section-head offset-md-2 col-md-8 offset-lg-3 col-lg-6">
              <h4>
                <span>Talent</span> Team
              </h4>
              <p>
                We are a passionate digital design agency that specializes in
                beautiful and easy-to-use digital design & web development
                services.
              </p>
            </div>

            <div className="owl-carousel owl-theme">
              <div className="item">
                <div className="team-img">
                  <img
                    src={require("../../public/img/team/1.jpg")}
                    alt="image"
                  />
                  <div className="social">
                    <a href="#0" className="icon">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#0" className="icon">
                      <i className="fab fa-linkedin" />
                    </a>
                    <a href="#0" className="icon">
                      <i className="fab fa-behance" />
                    </a>
                  </div>
                </div>
                <div className="info">
                  <h6>Alex Smith</h6>
                  <span>Project Manager</span>
                </div>
              </div>

              <div className="item">
                <div className="team-img">
                  <img
                    src={require("../../public/img/team/2.jpg")}
                    alt="image"
                  />
                  <div className="social">
                    <a href="#0" className="icon">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#0" className="icon">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#0" className="icon">
                      <i className="fab fa-behance" />
                    </a>
                  </div>
                </div>
                <div className="info">
                  <h6>Alex Smith</h6>
                  <span>Project Manager</span>
                </div>
              </div>

              <div className="item">
                <div className="team-img">
                  <img
                    src={require("../../public/img/team/3.jpg")}
                    alt="image"
                  />
                  <div className="social">
                    <a href="#0" className="icon">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#0" className="icon">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#0" className="icon">
                      <i className="fab fa-behance" />
                    </a>
                  </div>
                </div>
                <div className="info">
                  <h6>Alex Smith</h6>
                  <span>Project Manager</span>
                </div>
              </div>

              <div className="item">
                <div className="team-img">
                  <img
                    src={require("../../public/img/team/4.jpg")}
                    alt="image"
                  />
                  <div className="social">
                    <a href="#0" className="icon">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#0" className="icon">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#0" className="icon">
                      <i className="fab fa-behance" />
                    </a>
                  </div>
                </div>
                <div className="info">
                  <h6>Alex Smith</h6>
                  <span>Project Manager</span>
                </div>
              </div>

              <div className="item">
                <div className="team-img">
                  <img
                    src={require("../../public/img/team/1.jpg")}
                    alt="image"
                  />
                  <div className="social">
                    <a href="#0" className="icon">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#0" className="icon">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#0" className="icon">
                      <i className="fab fa-behance" />
                    </a>
                  </div>
                </div>
                <div className="info">
                  <h6>Alex Smith</h6>
                  <span>Project Manager</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*         <!-- End Teams ====
        ======================================= -->



        <!-- =====================================
        ==== Start Testimonials -->
 */}
      <section
        className="testimonials section-padding bg-img bg-fixed pos-re"
        data-overlay-dark="7"
        data-background="../../public/img/bg4.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="section-head offset-md-2 col-md-8 offset-lg-3 col-lg-6">
              <h4>
                What's <span>Clients</span> Says?
              </h4>
              <p>
                We are a passionate digital design agency that specializes in
                beautiful and easy-to-use digital design & web development
                services.
              </p>
            </div>

            <div className="owl-carousel owl-theme text-center col-lg-10 offset-lg-1">
              <div className="item-box">
                <span className="quote">
                  <img src={require("../../public/img/quot.png")} alt="image" />
                </span>
                <p>
                  Lorem Ipsum is simply dummy text a galley of type and
                  scrambled it to make a type specimen book.
                </p>
                <div className="info">
                  <div className="author-img">
                    <img
                      src={require("../../public/img/clients/1.jpg")}
                      alt=""
                    />
                  </div>
                  <div className="cont">
                    <h6>Alex Smith</h6>
                    <span>Envato Customer</span>
                  </div>
                </div>
              </div>
              <div className="item-box">
                <span className="quote">
                  <img src={require("../../public/img/quot.png")} alt="" />
                </span>
                <p>
                  Lorem Ipsum is simply dummy text a galley of type and
                  scrambled it to make a type specimen book.
                </p>
                <div className="info">
                  <div className="author-img">
                    <img
                      src={require("../../public/img/clients/1.jpg")}
                      alt=""
                    />
                  </div>
                  <div className="cont">
                    <h6>Alex Smith</h6>
                    <span>Envato Customer</span>
                  </div>
                </div>
              </div>
              <div className="item-box">
                <span className="quote">
                  <img src={require("../../public/img/quot.png")} alt="" />
                </span>
                <p>
                  Lorem Ipsum is simply dummy text a galley of type and
                  scrambled it to make a type specimen book.
                </p>
                <div className="info">
                  <div className="author-img">
                    <img
                      src={require("../../public/img/clients/1.jpg")}
                      alt=""
                    />
                  </div>
                  <div className="cont">
                    <h6>Alex Smith</h6>
                    <span>Envato Customer</span>
                  </div>
                </div>
              </div>
              <div className="item-box">
                <span className="quote">
                  <img src={require("../../public/img/quot.png")} alt="" />
                </span>
                <p>
                  Lorem Ipsum is simply dummy text a galley of type and
                  scrambled it to make a type specimen book.
                </p>
                <div className="info">
                  <div className="author-img">
                    <img
                      src={require("../../public/img/clients/1.jpg")}
                      alt=""
                    />
                  </div>
                  <div className="cont">
                    <h6>Alex Smith</h6>
                    <span>Envato Customer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="curve curve-top" />
      </section>

      {/*        <!-- End Testimonials ====
        ======================================= -->


        <!-- =====================================
        ==== Start Price -->
 */}
      <section
        className="price section-padding bg-gray pos-re"
        data-scroll-index="4"
      >
        <div className="container">
          <div className="row">
            <div className="section-head offset-md-2 col-md-8 offset-lg-3 col-lg-6">
              <h4>
                Pricing <span>Table</span>
              </h4>
              <p>
                We are a passionate digital design agency that specializes in
                beautiful and easy-to-use digital design & web development
                services.
              </p>
            </div>

            <div className="pricing-tables text-center full-width">
              <div className="row">
                <div className="col-lg-3">
                  <div className="item mb-md50">
                    <div className="type">
                      <h4>Free</h4>
                    </div>

                    <div className="value">
                      <h3>
                        <span>$</span>00
                      </h3>
                      <span className="per">/ Month</span>
                    </div>

                    <div className="features">
                      <ul>
                        <li>10 GB Disk Space</li>
                        <li>15 Domain Names</li>
                        <li>4 Email Address</li>
                        <li>Enhanced Security</li>
                        <li>Unlimited Support</li>
                      </ul>
                    </div>

                    <div className="order">
                      <a href="#0" className="butn butn-bg">
                        <span>Purchase Now</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3">
                  <div className="item mb-md50">
                    <div className="type">
                      <h4>Basic</h4>
                    </div>

                    <div className="value">
                      <h3>
                        <span>$</span>10
                      </h3>
                      <span className="per">/ Month</span>
                    </div>

                    <div className="features">
                      <ul>
                        <li>10 GB Disk Space</li>
                        <li>15 Domain Names</li>
                        <li>4 Email Address</li>
                        <li>Enhanced Security</li>
                        <li>Unlimited Support</li>
                      </ul>
                    </div>

                    <div className="order">
                      <a href="#0" className="butn butn-bg">
                        <span>Purchase Now</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3">
                  <div className="item active mb-md50">
                    <div className="type">
                      <h4>Standard</h4>
                    </div>

                    <div className="value">
                      <h3>
                        <span>$</span>30
                      </h3>
                      <span className="per">/ Month</span>
                    </div>

                    <div className="features">
                      <ul>
                        <li>100 GB Disk Space</li>
                        <li>30 Domain Names</li>
                        <li>5 Email Address</li>
                        <li>Enhanced Security</li>
                        <li>Unlimited Support</li>
                      </ul>
                    </div>

                    <div className="order">
                      <a href="#0" className="butn butn-light">
                        <span>Purchase Now</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3">
                  <div className="item">
                    <div className="type">
                      <h4>Premium</h4>
                    </div>

                    <div className="value">
                      <h3>
                        <span>$</span>80
                      </h3>
                      <span className="per">/ Month</span>
                    </div>

                    <div className="features">
                      <ul>
                        <li>500 GB Disk Space</li>
                        <li>100 Domain Names</li>
                        <li>10 Email Address</li>
                        <li>Enhanced Security</li>
                        <li>Unlimited Support</li>
                      </ul>
                    </div>

                    <div className="order">
                      <a href="#0" className="butn butn-bg">
                        <span>Purchase Now</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="curve curve-bottom" />
      </section>

      {/*   <!-- End Price ====
        ======================================= -->


        <!-- =====================================
        ==== Start Blog --> */}

      <section className="blog section-padding" data-scroll-index="5">
        <div className="container">
          <div className="row">
            <div className="section-head offset-md-2 col-md-8 offset-lg-3 col-lg-6">
              <h4>
                <span>Latest</span> News
              </h4>
              <p>
                We are a passionate digital design agency that specializes in
                beautiful and easy-to-use digital design & web development
                services.
              </p>
            </div>
            <div className="col-lg-4">
              <div className="item mb-md50">
                <div className="post-img">
                  <div className="img">
                    <img src={require("../../public/img/blog/1.jpg")} alt="" />
                  </div>
                </div>
                <div className="cont">
                  <div className="info">
                    <a href="#0">By : Admin</a>
                    <a href="#0">06 Aug 2017</a>
                    <a href="#0" className="tag">
                      WordPress
                    </a>
                  </div>
                  <h6>
                    <a href="#0">48 Best WordPress Themes</a>
                  </h6>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and type
                    setting industry. Lorem Ipsum has been the dummy text ever
                  </p>
                  <a href="#0" className="more">
                    Read More <i className="fas fa-chevron-right" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="item mb-md50">
                <div className="post-img">
                  <div className="img">
                    <img src={require("../../public/img/blog/2.jpg")} alt="" />
                  </div>
                </div>
                <div className="cont">
                  <div className="info">
                    <a href="#0">By : Admin</a>
                    <a href="#0">06 Aug 2017</a>
                    <a href="#0" className="tag">
                      WordPress
                    </a>
                  </div>
                  <h6>
                    <a href="#0">48 Best WordPress Themes</a>
                  </h6>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and type
                    setting industry. Lorem Ipsum has been the dummy text ever
                  </p>
                  <a href="#0" className="more">
                    Read More <i className="fas fa-chevron-right" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="item">
                <div className="post-img">
                  <div className="img">
                    <img src={require("../../public/img/blog/3.jpg")} alt="" />
                  </div>
                </div>
                <div className="cont">
                  <div className="info">
                    <a href="#0">By : Admin</a>
                    <a href="#0">06 Aug 2017</a>
                    <a href="#0" className="tag">
                      WordPress
                    </a>
                  </div>
                  <h6>
                    <a href="#0">48 Best WordPress Themes</a>
                  </h6>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and type
                    setting industry. Lorem Ipsum has been the dummy text ever
                  </p>
                  <a href="#0" className="more">
                    Read More <i className="fas fa-chevron-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*      <!-- End Blog ====
        ======================================= -->


        <!-- =====================================
        ==== Start Call-Action -->
 */}
      <section
        className="call-action section-padding bg-img bg-fixed"
        data-overlay-dark="5"
        data-background="../../public/img/bg2.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center">
                <h2>Want to work with us?</h2>
                <h5>Tell us about your project</h5>
                <a href="#0" className="butn butn-bg">
                  <span>Get Started</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*   <!-- End Call-Action ====
        ======================================= -->


        <!-- =====================================
        ==== Start Contact -->
 */}
      <section className="contact section-padding" data-scroll-index="6">
        <div className="container">
          <div className="row">
            <div className="section-head offset-md-2 col-md-8 offset-lg-3 col-lg-6">
              <h4>
                Get <span>In</span> Touch
              </h4>
              <p>
                We are a passionate digital design agency that specializes in
                beautiful and easy-to-use digital design & web development
                services.
              </p>
            </div>

            <div className="col-lg-5">
              <div className="contact-info mb-md50">
                <h5>Contact Us :</h5>
                <p>
                  Nulla metus metus ullamcorper vel tincidunt sed euismod nibh
                  Quisque volutpat
                </p>
                <div className="item">
                  <span className="icon icon-basic-tablet" />
                  <div className="cont">
                    <h6>Phone : </h6>
                    <p>+20 010 251 789 18 , 251 789 18</p>
                  </div>
                </div>
                <div className="item">
                  <span className="icon icon-basic-mail-open-text" />
                  <div className="cont">
                    <h6>Email : </h6>
                    <p>Coco_support@website.com</p>
                  </div>
                </div>
                <div className="item">
                  <span className="icon icon-basic-geolocalize-05" />
                  <div className="cont">
                    <h6>Address : </h6>
                    <p>4655 Carter Street ,Olney, Illinois</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <form
                className="form"
                id="contact-form"
                method="post"
                action="contact.php"
              >
                <div className="messages" />

                <div className="controls">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          id="form_name"
                          type="text"
                          name="name"
                          placeholder="Name"
                          required="required"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          id="form_email"
                          type="email"
                          name="email"
                          placeholder="Email"
                          required="required"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          id="form_subject"
                          type="text"
                          name="subject"
                          placeholder="Subject"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          id="form_message"
                          name="message"
                          placeholder="Message"
                          rows="4"
                          required="required"
                        />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <button type="submit" className="butn butn-bg">
                        <span>Send Message</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/*      <!-- End Contact ====
        ======================================= -->


        <!-- =====================================
        ==== Start Footer -->
 */}
      <footer className="text-center pos-re">
        <div className="container">
          {/*          <!-- Logo --> */}
          <a className="logo" href="#">
            <img src={require("../../public/img/accelLogo.png")} alt="logo" />
          </a>

          <div className="social">
            <a href="#0">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#0">
              <i className="fab fa-twitter" />
            </a>
            <a href="#0">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href="#0">
              <i className="fab fa-behance" />
            </a>
            <a href="#0">
              <i className="fab fa-pinterest-p" />
            </a>
          </div>

          <p>&copy; 2018 UI-ThemeZ. All Rights Reserved.</p>
        </div>

        <div className="curve curve-top curve-center" />
      </footer>
    </div>
  );
};
