import React from "react";
import { Link } from "react-router-dom";
// import "../asset/css/bootstrap.min.css"
// // import "../asset/css/owl.carousel.min.css"
// import "../asset/css/slicknav.css"
// import "../asset/css/flaticon.css"
// import "../asset/css/gijgo.css"
// import "../asset/css/animate.min.css"
// import "../asset/css/animated-headline.css"
// import "../asset/css/magnific-popup.css"
// import "../asset/css/fontawesome-all.min.css"
// import "../asset/css/themify-icons.css"
// import "../asset/css/slick.css"
// import "../asset/css/nice-select.css"
// import "../asset/css/style.css"
import img1 from "../asset/img/gallery/gallery1.png";
import img2 from "../asset/img/gallery/gallery2.png";
import img3 from "../asset/img/gallery/gallery3.png";
import img4 from "../asset/img/gallery/gallery4.png";
import img5 from "../asset/img/gallery/gallery5.png";
import img6 from "../asset/img/gallery/team1.png"
import img7 from "../asset/img/logo/logo.png"
import img8 from "../asset/img/gallery/about.png"
import img9 from "../asset/img/gallery/about2.png"
import img10 from "../asset/img//gallery/qutaion.png"
import img11 from "../asset/img//gallery/team2.png"
import img12 from "../asset/img//gallery/team3.png"
import img13 from "../asset/img/gallery/section_bg01.png"
import img14 from "../asset/img/gallery/blog1.png"
import img15 from "../asset/img/gallery/blog2.png"
import img16 from "../asset/img/logo/logo2_footer.png"
import img17 from "../asset/img/gallery/section_bg03.png"
import img18 from "../asset/img/gallery/section_bg02.png"
import img19 from "../asset/img/gallery/contact_form.png"









export const Index = () => {

  var style={
    backgroundImage: 'url('+img13+')'
  }

  var style2={
    backgroundImage:'url('+img17+')'
  }

  var style3={
    backgroundImage:'url('+img18+')'
  }
     


  return (
      <>
      {/* <div id="preloader-active">
        <div class="preloader d-flex align-items-center justify-content-center">
            <div class="preloader-inner position-relative">
                <div class="preloader-circle"></div>
                <div class="preloader-img pere-text">
                    
                    <img src={img14}  alt="img14" />
                </div>
            </div>
        </div>
    </div> */}
    
     

{/* 
      <header>
      <nav class="navbar navbar-inverse">
        <div className="header-area header-transparent">
          <div className="main-header header-sticky">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-xl-2 col-lg-2 col-md-1">
                  <div className="logo">
                    <a href="index.html">
                      
                      <img src={img7}  alt="img7" />
                    </a>
                  </div>
                </div>
                <div className="col-xl-10 col-lg-10 col-md-10">
                  <div className="menu-main d-flex align-items-center justify-content-end">
                    <div className="main-menu f-right d-none d-lg-block">
                      <nav >
                        <ul id="navigation">
                          <li>
                            <a href="index.html">Home</a>
                          </li>
                          <li>
                            <a href="about.html">About</a>
                          </li>
                          <li>
                            <a href="services.html">Services</a>
                          </li>
                          <li>
                            <a href="schedule.html">schedule</a>
                          </li>
                          <li>
                            <a href="gallery.html">gallery</a>
                          </li>
                          <li>
                            <a href="blog.html">Blog</a>
                            <ul className="submenu">
                              <li>
                                <a href="blog.html">Blog</a>
                              </li>
                              <li>
                                <a href="blog_details.html">Blog Details</a>
                              </li>
                              <li>
                                <a href="elements.html">Element</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="contact.html">Contact</a>
                          </li>
                        </ul>
                      </nav>
                      
                    </div>
                    
                    <div className="header-right-btn f-right d-none d-lg-block ml-30">
                      <a href="from.html" className="btn header-btn">
                        became a member
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="mobile_menu d-block d-lg-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </nav>
      </header> */}




      <main>
        <div className="slider-area position-relative">
          <div className="slider-active">
            <div className="single-slider slider-height d-flex align-items-center">
              <div className="container">
                <div className="row">
                  <div className="col-xl-7 col-lg-9 col-md-8 col-sm-9">
                    <div className="hero__caption">
                      <span data-animation="fadeInLeft" data-delay="0.1s">
                        with patrick potter
                      </span>
                      <h1 data-animation="fadeInLeft" data-delay="0.4s">
                        Build Perfect body Shape for good and Healthy life.
                      </h1>
                      <a
                        href="from.html"
                        className="btn hero-btn"
                        data-animation="fadeInLeft"
                        data-delay="0.8s"
                      >
                        became a member
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="single-slider slider-height d-flex align-items-center">
              <div className="container">
                <div className="row">
                  <div className="col-xl-7 col-lg-9 col-md-8 col-sm-9">
                    <div className="hero__caption">
                      <span data-animation="fadeInLeft" data-delay="0.1s">
                        with patrick potter
                      </span>
                      <h1 data-animation="fadeInLeft" data-delay="0.4s">
                        Build Perfect body Shape for good and Healthy life.
                      </h1>
                      <a
                        href="from.html"
                        className="btn hero-btn"
                        data-animation="fadeInLeft"
                        data-delay="0.8s"
                      >
                        became a member
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="video-icon">
            <a
              className="popup-video btn-icon"
              href="https://www.youtube.com/watch?v=up68UAfH0d0"
            >
              <i className="fas fa-play"></i>
            </a>
          </div>
        </div>

        <section className="about-area section-padding30">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="about-img "> 
                  <img src={img8}  alt="img8" />
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="about-caption">
                  <div className="section-tittle section-tittle3 mb-35">
                    <span>ABOUT oUR GYM</span>
                    <h2>
                      Safe Body building proper Solutions That Saves our
                      Valuable Time!
                    </h2>
                  </div>
                  <p className="pera-top">
                    Brook presents your services with flexible, convenient and
                    cdpose layouts. You can select your favorite layouts &
                    elements for cular ts with unlimited ustomization
                    possibilities. Pixel-perfect replication of the designers is
                    intended.
                  </p>
                  <p className="mb-65 pera-bottom">
                    Brook presents your services with flexible, convefnient and
                    chient anipurpose layouts. You can select your favorite
                    layouts.
                  </p>
                  <a href="from.html" className="btn">
                    became a member
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="services-area pt-100 pb-150 section-bg"
          
          style={style}
        >
          <section className="wantToWork-area w-padding">
            <div className="container">
              <div className="row align-items-end justify-content-between">
                <div className="col-lg-6 col-md-10 col-sm-10">
                  <div className="section-tittle section-tittle2">
                    <span>oUR sERVICES FOR YOU</span>
                    <h2>PUSH YOUR LIMITS FORWARD We Offer to you</h2>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-3">
                  <a href="services.html" className="btn wantToWork-btn f-right">
                    More Services
                  </a>
                </div>
              </div>
            </div>
          </section>

          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="single-cat text-center mb-50">
                  <div className="cat-icon">
                    <i className="flaticon-fitness"></i>
                  </div>
                  <div className="cat-cap">
                    <h5>
                      <a href="services.html">QUALITY EQUIPMENT</a>
                    </h5>
                    <p>
                      The sea freight service has grown consider ably in recent
                      years. We spend timetting to kn.
                    </p>
                  </div>
                  <div className="img-cap">
                    <a href="services.html" className="">
                      Discover More About Us <i className="ti-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="single-cat text-center mb-50">
                  <div className="cat-icon">
                    <i className="flaticon-healthcare-and-medical"></i>
                  </div>
                  <div className="cat-cap">
                    <h5>
                      <a href="services.html">health caring</a>
                    </h5>
                    <p>
                      The sea freight service has grown consider ably in recent
                      years. We spend timetting to kn.
                    </p>
                  </div>
                  <div className="img-cap">
                    <a href="services.html" className="">
                      Discover More About Us <i className="ti-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="single-cat text-center mb-50">
                  <div className="cat-icon">
                    <i className="flaticon-clock"></i>
                  </div>
                  <div className="cat-cap">
                    <h5>
                      <a href="services.html">gym strategies</a>
                    </h5>
                    <p>
                      The sea freight service has grown consider ably in recent
                      years. We spend timetting to kn.
                    </p>
                  </div>
                  <div className="img-cap">
                    <a href="services.html" className="">
                      Discover More About Us <i className="ti-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-area2 testimonial-area section-padding30 fix">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-11 col-sm-11">
                <div className="about-img2">
                
                  <img src={img9}  alt="img9" />

                  <div className="shape-qutaion d-none d-sm-block">
                    
                    <img src={img10}  alt="img10" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-9 col-sm-9">
                <div className="about-caption">
                  <div className="section-tittle mb-55">
                    <span>Client Feedback</span>
                    <h2>What Our Client thik about our gym</h2>
                  </div>

                  <div className="h1-testimonial-active">
                    <div className="single-testimonial">
                      <div className="testimonial-caption">
                        <p>
                          Brook presents your services with flexible, convenient
                          and cdpose layouts. You can select your favorite
                          layouts & elements for cular ts with unlimited
                          ustomization possibilities. Pixel-perfect
                          replica;ition of thei designers ijtls intended csents
                          your se.
                        </p>
                        <div className="rattiong-caption">
                          <span>
                            Jhon Smith<span>Gym Trainer</span>{" "}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="single-testimonial">
                      <div className="testimonial-caption">
                        <p>
                          Brook presents your services with flexible, convenient
                          and cdpose layouts. You can select your favorite
                          layouts & elements for cular ts with unlimited
                          ustomization possibilities. Pixel-perfect
                          replica;ition of thei designers ijtls intended csents
                          your se.
                        </p>
                        <div className="rattiong-caption">
                          <span>
                            Jhon Smith<span>Gym Trainer</span>{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="gallery-area">
          <div className="container-fluid p-0 fix">
            <div className="row">
              <div className="col-lg-6">
                <div className="box snake mb-30">
                  <div
                    className="gallery-img big-img">
                           <img src={img1}  alt="img1" />


                 </div>
                  <div className="overlay">
                    <div className="overlay-content">
                      <a href="gallery.html">
                        <i className="ti-arrow-top-right"></i>
                      </a>
                      <h3>Best fitness gallery</h3>
                      <p>Fitness, Body</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="box snake mb-30">
                      <div
                        className="gallery-img small-img"
                        >
                                                      
                            <img src={img2}  alt="img2" />

                        </div>
                      <div className="overlay">
                        <div className="overlay-content">
                          <a href="gallery.html">
                            <i className="ti-arrow-top-right"></i>
                          </a>
                          <h3>Best fitness gallery</h3>
                          <p>Fitness, Body</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="box snake mb-30">
                      <div
                        className="gallery-img small-img"
                      >
                     <img src={img3}  alt="img3" />

                      </div>
                      <div className="overlay">
                        <div className="overlay-content">
                          <a href="gallery.html">
                            <i className="ti-arrow-top-right"></i>
                          </a>
                          <h3>Best fitness gallery</h3>
                          <p>Fitness, Body</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="box snake mb-30">
                      <div
                        className="gallery-img small-img"
                      >
                     <img src={img4}  alt="img4" />

                      </div>
                      <div className="overlay">
                        <div className="overlay-content">
                          <a href="gallery.html">
                            <i className="ti-arrow-top-right"></i>
                          </a>
                          <h3>Best fitness gallery</h3>
                          <p>Fitness, Body</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="box snake mb-30">
                      <div
                        className="gallery-img small-img"
                        >
                        <img src={img5}  alt="img5" />
                        </div>
                      <div className="overlay">
                        <div className="overlay-content">
                          <a href="gallery.html">
                            <i className="ti-arrow-top-right"></i>
                          </a>
                          <h3>Best fitness gallery</h3>
                          <p>Fitness, Body</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="wantToWork-area w-padding">
          <div className="container">
            <div className="row align-items-end justify-content-between">
              <div className="col-lg-6 col-md-9 col-sm-9">
                <div className="section-tittle">
                  <span>oUR TEAM MAMBERS</span>
                  <h2>Our Most Exprienced Trainers</h2>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-3">
                <a href="services.html" className="btn wantToWork-btn f-right">
                  More Services
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="team-area pb-150">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-team mb-30">
                  <div className="team-img">
                    
                    <img src={img6}  alt="img6" />
                    <div className="team-caption">
                      <span>Creative derector</span>
                      <h3>
                        <a href="#">Jhon Sunsaev</a>
                      </h3>

                      <div className="team-social">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fas fa-globe"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-instagram"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-team mb-30">
                  <div className="team-img">
                  
                    <img src={img11}  alt="img11" />
                    <div className="team-caption">
                      <span>Creative derector</span>
                      <h3>
                        <a href="#">Jhon Sunsaev</a>
                      </h3>

                      <div className="team-social">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fas fa-globe"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-instagram"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-team mb-30">
                  <div className="team-img">
                    
                    <img src={img12}  alt="img12" />
                    <div className="team-caption">
                      <span>Creative derector</span>
                      <h3>
                        <a href="#">Jhon Sunsaev</a>
                      </h3>

                      <div className="team-social">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fas fa-globe"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-instagram"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section
          className="wantToWork-area w-padding section-bg"
          
          style={style3}
        >
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-xl-6 col-lg-7 col-md-8 col-sm-10">
                <div className="wantToWork-caption">
                  <h2>April membership offer available Now</h2>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-3">
                <a href="services.html" className="btn wantToWork-btn f-right">
                  More Services
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="date-tabs section-padding30">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-8">
                <div className="section-tittle text-center mb-100">
                  <span>OUR tIME SCHEDULE</span>
                  <h2>SELECT THE pERFECT TIME YOU NEED NOW</h2>
                </div>
              </div>
            </div>

            <div className="row justify-content-center mb-10">
              <div className="col-lg-11">
                <div className="properties__button">
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <a
                        className="nav-item nav-link"
                        id="nav-home-tab"
                        data-toggle="tab"
                        href="#nav-home"
                        role="tab"
                        aria-controls="nav-home"
                        aria-selected="true"
                      >
                        Saturday
                      </a>
                      <a
                        className="nav-item nav-link"
                        id="nav-profile-tab"
                        data-toggle="tab"
                        href="#nav-profile"
                        role="tab"
                        aria-controls="nav-profile"
                        aria-selected="false"
                      >
                        Sunday
                      </a>
                      <a
                        className="nav-item nav-link active"
                        id="nav-contact-tab"
                        data-toggle="tab"
                        href="#nav-contact"
                        role="tab"
                        aria-controls="nav-contact"
                        aria-selected="false"
                      >
                        Monday
                      </a>
                      <a
                        className="nav-item nav-link"
                        id="nav-last-tab"
                        data-toggle="tab"
                        href="#nav-last"
                        role="tab"
                        aria-controls="nav-contact"
                        aria-selected="false"
                      >
                        Tuesday
                      </a>
                      <a
                        className="nav-item nav-link"
                        id="nav-Sports"
                        data-toggle="tab"
                        href="#nav-nav-Sport"
                        role="tab"
                        aria-controls="nav-contact"
                        aria-selected="false"
                      >
                        Language
                      </a>
                      <a
                        className="nav-item nav-link"
                        id="nav-six"
                        data-toggle="tab"
                        href="#nav-nav-six"
                        role="tab"
                        aria-controls="nav-contact"
                        aria-selected="false"
                      >
                        Thursday
                      </a>
                      <a
                        className="nav-item nav-link"
                        id="nav-seven"
                        data-toggle="tab"
                        href="#nav-nav-seven"
                        role="tab"
                        aria-controls="nav-seven"
                        aria-selected="false"
                      >
                        Friday
                      </a>
                    </div>
                  </nav>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-11">
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                  >
                    <div className="row">
                      <div className="col-12">
                        <div className="tab-wrapper">
                          <div className="single-box">
                            <div className="single-caption text-center">
                              <div className="caption">
                                <span>6am - 8am</span>
                                <h3>Kick Boxing</h3>
                                <p>
                                  <span>by</span> Jhos Kusam
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="single-box">
                            <div className="single-caption text-center">
                              <div className="caption">
                                <span>6am - 8am</span>
                                <h3>Kick Boxing</h3>
                                <p>
                                  <span>by</span> Jhos Kusam
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="single-box">
                            <div className="single-caption active text-center">
                              <div className="caption">
                                <span>6am - 8am</span>
                                <h3>Kick Boxing</h3>
                                <p>
                                  <span>by</span> Jhos Kusam
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="single-box">
                            <div className="single-caption text-center">
                              <div className="caption">
                                <span>6am - 8am</span>
                                <h3>Kick Boxing</h3>
                                <p>
                                  <span>by</span> Jhos Kusam
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="single-box">
                            <div className="single-caption text-center">
                              <div className="caption">
                                <span>6am - 8am</span>
                                <h3>Kick Boxing</h3>
                                <p>
                                  <span>by</span> Jhos Kusam
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                  >
                    <div className="row">
                      <div className="col-12">
                        <div className="tab-wrapper">
                          <div className="single-box">
                            <div className="single-caption active text-center">
                              <div className="caption">
                                <span>6am - 8am</span>
                                <h3>Kick Boxing</h3>
                                <p>
                                  <span>by</span> Jhos Kusam
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="single-box">
                            <div className="single-caption text-center">
                              <div className="caption">
                                <span>6am - 8am</span>
                                <h3>Kick Boxing</h3>
                                <p>
                                  <span>by</span> Jhos Kusam
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="single-box">
                            <div className="single-caption text-center">
                              <div className="caption">
                                <span>6am - 8am</span>
                                <h3>Kick Boxing</h3>
                                <p>
                                  <span>by</span> Jhos Kusam
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="single-box">
                            <div className="single-caption text-center">
                              <div className="caption">
                                <span>6am - 8am</span>
                                <h3>Kick Boxing</h3>
                                <p>
                                  <span>by</span> Jhos Kusam
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="single-box">
                            <div className="single-caption text-center">
                              <div className="caption">
                                <span>6am - 8am</span>
                                <h3>Kick Boxing</h3>
                                <p>
                                  <span>by</span> Jhos Kusam
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade show active"
                    id="nav-contact"
                    role="tabpanel"
                    aria-labelledby="nav-contact-tab"
                  >
                    <div className="row">
                      <div className="col-12">
                        <div className="tab-wrapper">
                          <div className="single-box">
                            <div className="single-caption text-center">
                              <div className="caption">
                                <span>6am - 8am</span>
                                <h3>Kick Boxing</h3>
                                <p>
                                  <span>by</span> Jhos Kusam
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="single-box">
                            <div className="single-caption active text-center">
                              <div className="caption">
                                <span>6am - 8am</span>
                                <h3>Kick Boxing</h3>
                                <p>
                                  <span>by</span> Jhos Kusam
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="single-box">
                            <div className="single-caption text-center">
                              <div className="caption">
                                <span>6am - 8am</span>
                                <h3>Kick Boxing</h3>
                                <p>
                                  <span>by</span> Jhos Kusam
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="single-box">
                            <div className="single-caption text-center">
                              <div className="caption">
                                <span>6am - 8am</span>
                                <h3>Kick Boxing</h3>
                                <p>
                                  <span>by</span> Jhos Kusam
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="single-box">
                            <div className="single-caption text-center">
                              <div className="caption">
                                <span>6am - 8am</span>
                                <h3>Kick Boxing</h3>
                                <p>
                                  <span>by</span> Jhos Kusam
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="nav-last"
                    role="tabpanel"
                    aria-labelledby="nav-last-tab"
                  >
                    <div className="row">
                      <div className="col-12">
                        <div className="tab-wrapper">
                          <div className="single-box">
                            <div className="single-caption text-center">
                              <div className="caption">
                                <span>6am - 8am</span>
                                <h3>Kick Boxing</h3>
                                <p>
                                  <span>by</span> Jhos Kusam
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="single-box">
                            <div className="single-caption text-center">
                              <div className="caption">
                                <span>6am - 8am</span>
                                <h3>Kick Boxing</h3>
                                <p>
                                  <span>by</span> Jhos Kusam
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="single-box">
                            <div className="single-caption active text-center">
                              <div className="caption">
                                <span>6am - 8am</span>
                                <h3>Kick Boxing</h3>
                                <p>
                                  <span>by</span> Jhos Kusam
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="single-box">
                            <div className="single-caption text-center">
                              <div className="caption">
                                <span>6am - 8am</span>
                                <h3>Kick Boxing</h3>
                                <p>
                                  <span>by</span> Jhos Kusam
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="single-box">
                            <div className="single-caption text-center">
                              <div className="caption">
                                <span>6am - 8am</span>
                                <h3>Kick Boxing</h3>
                                <p>
                                  <span>by</span> Jhos Kusam
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="nav-nav-Sport"
                    role="tabpanel"
                    aria-labelledby="nav-Sports"
                  >
                    <div className="row">
                      <div className="col-12">
                        <div className="tab-wrapper">
                          <div className="single-box">
                            <div className="single-caption active text-center">
                              <div className="caption">
                                <span>6am - 8am</span>
                                <h3>Kick Boxing</h3>
                                <p>
                                  <span>by</span> Jhos Kusam
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="single-box">
                            <div className="single-caption text-center">
                              <div className="caption">
                                <span>6am - 8am</span>
                                <h3>Kick Boxing</h3>
                                <p>
                                  <span>by</span> Jhos Kusam
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="single-box">
                            <div className="single-caption text-center">
                              <div className="caption">
                                <span>6am - 8am</span>
                                <h3>Kick Boxing</h3>
                                <p>
                                  <span>by</span> Jhos Kusam
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="single-box">
                            <div className="single-caption text-center">
                              <div className="caption">
                                <span>6am - 8am</span>
                                <h3>Kick Boxing</h3>
                                <p>
                                  <span>by</span> Jhos Kusam
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="single-box">
                            <div className="single-caption text-center">
                              <div className="caption">
                                <span>6am - 8am</span>
                                <h3>Kick Boxing</h3>
                                <p>
                                  <span>by</span> Jhos Kusam
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="nav-nav-six"
                    role="tabpanel"
                    aria-labelledby="nav-six"
                  >
                    <div className="row">
                      <div className="col-12">
                        <div className="tab-wrapper">
                          <div className="single-box">
                            <div className="single-caption text-center">
                              <div className="caption">
                                <span>6am - 8am</span>
                                <h3>Kick Boxing</h3>
                                <p>
                                  <span>by</span> Jhos Kusam
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="single-box">
                            <div className="single-caption text-center">
                              <div className="caption">
                                <span>6am - 8am</span>
                                <h3>Kick Boxing</h3>
                                <p>
                                  <span>by</span> Jhos Kusam
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="single-box">
                            <div className="single-caption text-center">
                              <div className="caption">
                                <span>6am - 8am</span>
                                <h3>Kick Boxing</h3>
                                <p>
                                  <span>by</span> Jhos Kusam
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="single-box">
                            <div className="single-caption active text-center">
                              <div className="caption">
                                <span>6am - 8am</span>
                                <h3>Kick Boxing</h3>
                                <p>
                                  <span>by</span> Jhos Kusam
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="single-box">
                            <div className="single-caption text-center">
                              <div className="caption">
                                <span>6am - 8am</span>
                                <h3>Kick Boxing</h3>
                                <p>
                                  <span>by</span> Jhos Kusam
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="nav-nav-seven"
                    role="tabpanel"
                    aria-labelledby="nav-seven"
                  >
                    <div className="row">
                      <div className="col-12">
                        <div className="tab-wrapper">
                          <div className="single-box">
                            <div className="single-caption text-center">
                              <div className="caption">
                                <span>6am - 8am</span>
                                <h3>Kick Boxing</h3>
                                <p>
                                  <span>by</span> Jhos Kusam
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="single-box">
                            <div className="single-caption text-center">
                              <div className="caption">
                                <span>6am - 8am</span>
                                <h3>Kick Boxing</h3>
                                <p>
                                  <span>by</span> Jhos Kusam
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="single-box">
                            <div className="single-caption text-center">
                              <div className="caption">
                                <span>6am - 8am</span>
                                <h3>Kick Boxing</h3>
                                <p>
                                  <span>by</span> Jhos Kusam
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="single-box">
                            <div className="single-caption text-center">
                              <div className="caption">
                                <span>6am - 8am</span>
                                <h3>Kick Boxing</h3>
                                <p>
                                  <span>by</span> Jhos Kusam
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="single-box">
                            <div className="single-caption active text-center">
                              <div className="caption">
                                <span>6am - 8am</span>
                                <h3>Kick Boxing</h3>
                                <p>
                                  <span>by</span> Jhos Kusam
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-form-main">
          <div className="container">
            <div className="row justify-content-end">
              <div className="col-xl-7 col-lg-7">
                <div className="form-wrapper">
                  <div className="form-tittle">
                    <div className="row ">
                      <div className="col-lg-11 col-md-10 col-sm-10">
                        <div className="section-tittle">
                          <span>Contact Form</span>
                          <h2>Feel Free to contact with us!</h2>
                        </div>
                      </div>
                    </div>
                  </div>

                  <form id="contact-form" action="#" method="POST">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="form-box user-icon mb-30">
                          <input type="text" name="name" placeholder="Name" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-box email-icon mb-30">
                          <input type="text" name="email" placeholder="Phone" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 mb-30">
                        <div className="select-itms">
                          <select name="select" id="select2">
                            <option value="">Boxing</option>
                            <option value="">saiful islam</option>
                            <option value="">Arafath Miya</option>
                            <option value="">Shakil Miya</option>
                            <option value="">Tamim Sharker</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-box subject-icon mb-30">
                          <input
                            type="Email"
                            name="subject"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-box message-icon mb-65">
                          <textarea
                            name="message"
                            id="message"
                            placeholder="Message"
                          ></textarea>
                        </div>
                        <div className="submit-info">
                          <button className="btn" type="submit">
                            Send Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="from-left d-none d-lg-block">
            
            <img src={img19}  alt="img19" />
          </div>
        </section>

        <section className="home-blog-area section-padding30">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 col-md-9 col-sm-10">
                <div className="section-tittle text-center mb-100">
                  <span>rECENT NEWS FORM BLOG</span>
                  <h2>gYM TIPS news fOR YOU THAT selected by us</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="home-blog-single mb-30">
                  <div className="blog-img-cap">
                    <div className="blog-img">
                      
                      <img src={img14}  alt="img14" />
                      <div className="blog-date text-center">
                        <span>24</span>
                        <p>Now</p>
                      </div>
                    </div>
                    <div className="blog-cap">
                      <span>Creative derector</span>
                      <h3>
                        <a href="blog_details.html">
                          Footprints in Time is perfect House in Kurashiki
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="home-blog-single mb-30">
                  <div className="blog-img-cap">
                    <div className="blog-img">
                    
                      <img src={img15}  alt="img15" />

                      <div className="blog-date text-center">
                        <span>24</span>
                        <p>Now</p>
                      </div>
                    </div>
                    <div className="blog-cap">
                      <span>Creative derector</span>
                      <h3>
                        <a href="blog_details.html">
                          Footprints in Time is perfect House in Kurashiki
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div
          className="footer-area section-bg"
          style={style2}
        >
          <div className="container">
            <div className="footer-top footer-padding">
              <div className="row d-flex justify-content-between">
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-tittle">
                      <h4>COMPANY</h4>
                      <ul>
                        <li>
                          <a href="#">About Us</a>
                        </li>
                        <li>
                          <a href="#">Company</a>
                        </li>
                        <li>
                          <a href="#"> Press & Blog</a>
                        </li>
                        <li>
                          <a href="#"> Privacy Policy</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-tittle">
                      <h4>Open hour</h4>
                      <ul>
                        <li>
                          <a href="#">Monday 11am-7pm</a>
                        </li>
                        <li>
                          <a href="#"> Tuesday-Friday 11am-8pm</a>
                        </li>
                        <li>
                          <a href="#"> Saturday 10am-6pm</a>
                        </li>
                        <li>
                          <a href="#"> Sunday 11am-6pm</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-tittle">
                      <h4>RESOURCES</h4>
                      <ul>
                        <li>
                          <a href="#">Home Insurance</a>
                        </li>
                        <li>
                          <a href="#">Travel Insurance</a>
                        </li>
                        <li>
                          <a href="#"> Car Insurance</a>
                        </li>
                        <li>
                          <a href="#"> Business Insurance</a>
                        </li>
                        <li>
                          <a href="#"> Heal Insurance</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-logo">
                      <a href="index.html">
                        
                        <img src={img16}  alt="img16" />
                      </a>
                    </div>
                    <div className="footer-tittle">
                      <div className="footer-pera">
                        <p className="info1">
                          GThe trade war currently ensuing between te US anfd
                          several natxions around thdhe globe, most fiercely
                          with.
                        </p>
                      </div>
                    </div>

                    <div className="footer-social ">
                      <a href="https://www.facebook.com/sai4ull">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fas fa-globe"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              <div className="row d-flex align-items-center">
                <div className="col-lg-12">
                  <div className="footer-copy-right text-center">
                    <p>
                      Copyright &copy;
                      <script>document.write(new Date().getFullYear());</script>{" "}
                      All rights reserved | This template is made with{" "}
                      <i className="fa fa-heart" aria-hidden="true"></i> by{" "}
                      <a href="https://colorlib.com" target="_blank">
                        Colorlib
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div id="back-top">
        <a title="Go to Top" href="#">
          {" "}
          <i className="fas fa-level-up-alt"></i>
        </a>
      </div>

      <script src="./asset/js/vendor/modernizr-3.5.0.min.js"></script>

      <script src="./asset/js/vendor/jquery-1.12.4.min.js"></script>
      <script src="./asset/js/popper.min.js"></script>
      <script src="./asset/js/bootstrap.min.js"></script>

      <script src="./asset/js/jquery.slicknav.min.js"></script>

      <script src="./asset/js/owl.carousel.min.js"></script>
      <script src="./asset/js/slick.min.js"></script>

      <script src="./asset/js/wow.min.js"></script>
      <script src="./asset/js/animated.headline.js"></script>
      <script src="./asset/js/jquery.magnific-popup.js"></script>

      <script src="./asset/js/gijgo.min.js"></script>

      <script src="./asset/js/jquery.nice-select.min.js"></script>
      <script src="./asset/js/jquery.sticky.js"></script> 

       <script src="./asset/js/jquery.counterup.min.js"></script>
      <script src="./asset/js/waypoints.min.js"></script>
      <script src="./asset/js/jquery.countdown.min.js"></script>
      <script src="./asset/js/hover-direction-snake.min.js"></script>

      <script src="./asset/js/contact.js"></script>
      <script src="./asset/js/jquery.form.js"></script>
      <script src="./asset/js/jquery.validate.min.js"></script>
      <script src="./asset/js/mail-script.js"></script>
      <script src="./asset/js/jquery.ajaxchimp.min.js"></script>

      <script src="./asset/js/plugins.js"></script>
      <script src="./asset/js/main.js"></script>
    
    </>
  );
};
