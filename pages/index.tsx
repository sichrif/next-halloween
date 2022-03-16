import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ScrollReveal from "./containers/ScrollReveal";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
// importing icons from iconify
import { Icon } from '@iconify/react';
import gridAlt from '@iconify/icons-bx/grid-alt';
import xIcon from '@iconify/icons-bx/x';
import facebookFill from '@iconify/icons-akar-icons/facebook-fill';
import twitterFill from '@iconify/icons-akar-icons/twitter-fill';
import instagramFill from '@iconify/icons-akar-icons/instagram-fill';

// swiper core styles
import 'swiper/css'
import React from 'react';




const Home: NextPage = () => {

  /*=============== SHOW MENU ===============*/
  function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu?.classList.remove('show-menu')
  }
  if (typeof window !== "undefined") {
    const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close'),
      customswiper = document.getElementById('custom-swiper')

    /*===== MENU SHOW =====*/
    /* Validate if constant exists */
    if (navToggle) {
      navToggle.addEventListener('click', () => {
        navMenu?.classList.add('show-menu')
        console.log(customswiper);
      })
    }

    /*===== MENU HIDDEN =====*/
    /* Validate if constant exists */
    if (navClose) {
      navClose.addEventListener('click', () => {
        navMenu?.classList.remove('show-menu')
        // console.log("close")
      })
    }


  }


  return (
    <div className={styles.container}>
      <Head>
        <title>Next Halloween</title>
        <meta name="Halloween" content="Next Halloween" />
        <link rel="icon" href="/img/category3-img.png" />


      </Head>
      <>
        {/*==================== HEADER ====================*/}
        <header className="header" id="header">
          <nav className="nav container">
            <a href="#" className="nav__logo">
              <img src="/img/logo.png" alt="logo" className="nav__logo-img" />{" "}
              Halloween
            </a>
            <div className="nav__menu" id="nav-menu">
              <ul className="nav__list">
                <li className="nav__item">
                  <a href="#home" className="nav__link active-link">
                    Home
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#about" className="nav__link">
                    About
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#trick" className="nav__link">
                    Candy
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#new" className="nav__link">
                    New
                  </a>
                </li>
                <a href="#" className="button button--ghost">
                  Support
                </a>
              </ul>

              <div className="nav__close" id="nav-close">
                <Icon icon={xIcon} />
              </div>
              <img src="/img/nav-img.png" alt="nav-img" className="nav__img" />
            </div>

            <div className="nav__toggle" id="nav-toggle">

              <Icon icon={gridAlt} />
            </div>

          </nav>
        </header>
        <main className="main">

          {/*==================== HOME ====================*/}
          <ScrollReveal style={{ backgroundColor: "" }}>

            <section className="home container" id="home">
              <div className="swiper home-swiper">

                <Fade bottom cascade>

                  <div className="swiper-wrapper">
                    <Swiper
                      spaceBetween={500}
                      slidesPerView={1}
                      onSlideChange={() => console.log('slide change')}
                      onSwiper={(swiper) => console.log(swiper)}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      loop={true}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={true}
                      modules={[Autoplay, Pagination, Navigation]}
                    >
                      <SwiperSlide>
                        {/* HOME SLIDER 1 */}
                        <section className="swiper-slide">
                          <div className="home__content grid">
                            <div className="home__group">
                              <img
                                src="/img/home1-img.png"
                                alt="home1-img"
                                className="home__img"
                              />
                              <div className="home__indicator" />
                              <div className="home__details-img">
                                <h4 className="home__details-title">The Labu “Reiza”</h4>
                                <span className="home__details-subtitle">
                                  The Living Pumpkin
                                </span>
                              </div>
                            </div>
                            <div className="home__data">
                              <h3 className="home__subtitle">#1 Top Scariest Ghost</h3>
                              <h1 className="home__title">
                                UOOOO
                                <br />
                                TRICK OR
                                <br />
                                TREAT!!
                              </h1>
                              <p className="home__description">
                                Hi, I'm Reiza, people call me "El Labu". I am currently trying
                                to learn something new, building my own bike with parts made
                                only in Malaysia.
                              </p>
                              <div className="home__buttons">
                                <a href="#" className="button">
                                  Book Now
                                </a>{" "}
                                <a href="#" className="button--link button--flex">
                                  Track Record
                                </a>
                              </div>
                            </div>
                          </div>
                        </section>
                      </SwiperSlide>
                      <SwiperSlide>
                        {/* HOME SLIDER 2 */}
                        <section className="swiper-slide">
                          <div className="home__content grid">
                            <div className="home__group">
                              <img
                                src="/img/home2-img.png"
                                alt="home2-img"
                                className="home__img"
                              />
                              <div className="home__indicator" />
                              <div className="home__details-img">
                                <h4 className="home__details-title">Adino &amp; Grahami</h4>
                                <span className="home__details-subtitle">
                                  No words can describe them
                                </span>
                              </div>
                            </div>
                            <div className="home__data">
                              <h3 className="home__subtitle">#2 top Best duo</h3>
                              <h1 className="home__title">
                                BRING BACK
                                <br />
                                MY COTTON
                                <br />
                                CANDY
                              </h1>
                              <p className="home__description">
                                Adino steals cotton candy from his brother and eats them all
                                in one bite, a hungry beast. Grahami can no longer contain his
                                anger towards Adino.
                              </p>
                              <div className="home__buttons">
                                <a href="#" className="button">
                                  Book Now
                                </a>{" "}
                                <a href="#" className="button--link button--flex">
                                  Track Record
                                </a>
                              </div>
                            </div>
                          </div>
                        </section>
                      </SwiperSlide>
                      <SwiperSlide>
                        {/* HOME SLIDER 3 */}
                        <section className="swiper-slide">
                          <div className="home__content grid">
                            <div className="home__group">
                              <img
                                src="/img/home3-img.png"
                                alt="home3-img"
                                className="home__img"
                              />
                              <div className="home__indicator" />
                              <div className="home__details-img">
                                <h4 className="home__details-title">Captain Sem</h4>
                                <span className="home__details-subtitle">
                                  Veteran Spooky Ghost
                                </span>
                              </div>
                            </div>
                            <div className="home__data">
                              <h3 className="home__subtitle">#3 Top Scariest Ghost</h3>
                              <h1 className="home__title">
                                RESPAWN
                                <br />
                                THE SPOOKY
                                <br />
                                SKULL
                              </h1>
                              <p className="home__description">
                                In search for cute little puppy, Captain Sem has come back
                                from his tragic death. With his hogwarts certified power he
                                promise to be a hero for all of ghostkind.
                              </p>
                              <div className="home__buttons">
                                <a href="#" className="button">
                                  Book Now
                                </a>{" "}
                                <a href="#" className="button--link button--flex">
                                  Track Record
                                </a>
                              </div>
                            </div>
                          </div>
                        </section>
                      </SwiperSlide>



                    </Swiper>



                  </div>
                </Fade>
                <div className="swiper-pagination" />
              </div>
            </section>

          </ScrollReveal>
          {/*==================== CATEGORY ====================*/}
          <ScrollReveal style={{ backgroundColor: "" }}>
            <section className="section category">
              <h2 className="section__title">
                Favorite Scare
                <br />
                Category
              </h2>
              <Fade top cascade>
                <div className="category__container container grid">
                  <div className="category__data">
                    <img
                      src="/img/category1-img.png"
                      alt="category1-img"
                      className="category__img"
                    />
                    <h3 className="category__title">Ghosts</h3>
                    <p className="category__description">
                      Choose the ghosts, the scariest there are.
                    </p>
                  </div>
                  <div className="category__data">
                    <img
                      src="/img/category2-img.png"
                      alt="category2-img"
                      className="category__img"
                    />
                    <h3 className="category__title">Pumpkins</h3>
                    <p className="category__description">
                      You look at the scariest pumpkins there is.
                    </p>
                  </div>
                  <div className="category__data">
                    <img
                      src="/img/category3-img.png"
                      alt="category3-img"
                      className="category__img"
                    />
                    <h3 className="category__title">Witch Hat</h3>
                    <p className="category__description">
                      Pick the most stylish witch hats out there.
                    </p>
                  </div>
                </div>
              </Fade>
            </section>
          </ScrollReveal>
          {/*==================== ABOUT ====================*/}
          <ScrollReveal style={{ backgroundColor: "" }}>
            <section className="section about" id="about">
              <div className="about__container container grid">
                <Fade left>
                  <div className="about__data">
                    <h2 className="section__title about__title">
                      About Halloween
                      <br />
                      Night
                    </h2>
                    <p className="about__description">
                      Night of all the saints, or all the dead, is celebrated on October
                      31 and it is a very fun international celebration, this celebration
                      comes from ancient origins, and is already celebrated by everyone.
                    </p>
                    <a href="#" className="button">
                      Know more
                    </a>
                  </div>
                </Fade>
                <Fade right>
                  <img
                    src="/img/about-img.png"
                    alt="about-img"
                    className="about__img"
                  />
                </Fade>
              </div>
            </section>
          </ScrollReveal>
          {/*==================== TRICK OR TREAT ====================*/}
          <ScrollReveal style={{ backgroundColor: "" }}>
            <section className="section trick" id="trick">
              <h2 className="section__title">Trick Or Treat</h2>
              <Slide top cascade>
                <div className="trick__container container grid">

                  <div className="trick__content">
                    <img
                      src="/img/trick-treat1-img.png"
                      alt="trick-treat1-img"
                      className="trick__img"
                    />
                    <h3 className="trick__title">Toffee</h3>
                    <span className="trick__subtitle">Candy</span>{" "}
                    <span className="trick__price">$11.99</span>
                  </div>
                  <div className="trick__content">
                    <img
                      src="/img/trick-treat2-img.png"
                      alt="trick-treat2-img"
                      className="trick__img"
                    />
                    <h3 className="trick__title">Bone</h3>
                    <span className="trick__subtitle">Accessory</span>{" "}
                    <span className="trick__price">$8.99</span>
                  </div>
                  <div className="trick__content">
                    <img
                      src="/img/trick-treat3-img.png"
                      alt="trick-treat3-img"
                      className="trick__img"
                    />
                    <h3 className="trick__title">Scarecrow</h3>
                    <span className="trick__subtitle">Accessory</span>{" "}
                    <span className="trick__price">$15.99</span>
                  </div>

                  <div className="trick__content">
                    <img
                      src="/img/trick-treat4-img.png"
                      alt="trick-treat4-img"
                      className="trick__img"
                    />
                    <h3 className="trick__title">Candy Cane</h3>
                    <span className="trick__subtitle">Candy</span>{" "}
                    <span className="trick__price">$7.99</span>
                  </div>
                  <div className="trick__content">
                    <img
                      src="/img/trick-treat5-img.png"
                      alt="trick-treat5-img"
                      className="trick__img"
                    />
                    <h3 className="trick__title">Pumpkin</h3>
                    <span className="trick__subtitle">Candy</span>{" "}
                    <span className="trick__price">$19.99</span>
                  </div>
                  <div className="trick__content">
                    <img
                      src="/img/trick-treat6-img.png"
                      alt="trick-treat6-img"
                      className="trick__img"
                    />
                    <h3 className="trick__title">Ghost</h3>
                    <span className="trick__subtitle">Accessory</span>{" "}
                    <span className="trick__price">$17.99</span>
                  </div>

                </div>
              </Slide>
            </section>
          </ScrollReveal>
          {/*==================== DISCOUNT ====================*/}
          <ScrollReveal style={{ backgroundColor: "" }}>
            <section className="section discount">
              <div className="discount__container container grid">
                <Fade right cascade>
                  <div className="discount__data">
                    <h2 className="discount__title">
                      50% Discount
                      <br />
                      On New Products
                    </h2>
                    <a href="#" className="button">
                      Go to new
                    </a>
                  </div>
                </Fade>
                <Fade left cascade>
                  <img
                    src="/img/discount-img.png"
                    alt="discount-img"
                    className="discount__img"
                  />
                </Fade>
              </div>
            </section>
          </ScrollReveal>
          {/*==================== NEW ARRIVALS ====================*/}

          <ScrollReveal style={{ backgroundColor: "" }}>
            <section className="section new" id="new">
              <h2 className="section__title">New Arrivals</h2>
              <Fade top cascade>

                <div className="new__container container">
                  <div className="swiper new-swiper">
                    <div className="swiper-wrapper">
                      <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        autoplay={{
                          delay: 2500,
                          disableOnInteraction: false,
                        }}
                        loop={true}
                        breakpoints={{
                          "@0.00": {
                            slidesPerView: 1,
                            spaceBetween: 10,
                          },
                          "@0.75": {
                            slidesPerView: 2,
                            spaceBetween: 20,
                          },
                          "@1.00": {
                            slidesPerView: 3,
                            spaceBetween: 40,
                          },
                          "@1.50": {
                            slidesPerView: 4,
                            spaceBetween: 50,
                          },
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                      >
                        <SwiperSlide>
                          <div className="new__content swiper-slide ">
                            <div className="new__tag">New</div>
                            <img
                              src="/img/new1-img.png"
                              alt="new1-img"
                              className="new__img"
                            />
                            <h3 className="new__title">Haunted House</h3>
                            <span className="new__subtitle">Accessory</span>
                            <div className="new__prices">
                              <span className="new__price">$14.99</span>{" "}
                              <span className="new__discount">$29.99</span>
                            </div>
                          </div>
                        </SwiperSlide><SwiperSlide>
                          <div className="new__content  swiper-slide">
                            <div className="new__tag">New</div>
                            <img
                              src="/img/new2-img.png"
                              alt="new2-img"
                              className="new__img"
                            />
                            <h3 className="new__title">Halloween Candle</h3>
                            <span className="new__subtitle">Accessory</span>
                            <div className="new__prices">
                              <span className="new__price">$11.99</span>{" "}
                              <span className="new__discount">$21.99</span>
                            </div>
                          </div>
                        </SwiperSlide><SwiperSlide>
                          <div className="new__content  swiper-slide">
                            <div className="new__tag">New</div>
                            <img
                              src="/img/new3-img.png"
                              alt="new3-img"
                              className="new__img"
                            />
                            <h3 className="new__title">Witch Hat</h3>
                            <span className="new__subtitle">Accessory</span>
                            <div className="new__prices">
                              <span className="new__price">$4.99</span>{" "}
                              <span className="new__discount">$9.99</span>
                            </div>
                          </div>
                        </SwiperSlide><SwiperSlide>
                          <div className="new__content swiper-slide ">
                            <div className="new__tag">New</div>
                            <img
                              src="/img/new4-img.png"
                              alt="new4-img"
                              className="new__img"
                            />
                            <h3 className="new__title">Rip</h3>
                            <span className="new__subtitle">Accessory</span>
                            <div className="new__prices">
                              <span className="new__price">$24.99</span>{" "}
                              <span className="new__discount">$44.99</span>
                            </div>
                          </div>
                        </SwiperSlide><SwiperSlide>
                          <div className="new__content swiper-slide ">
                            <div className="new__tag">New</div>
                            <img
                              src="/img/new5-img.png"
                              alt="new5-img"
                              className="new__img"
                            />
                            <h3 className="new__title">Terrifying Crystal Ball</h3>
                            <span className="new__subtitle">Accessory</span>
                            <div className="new__prices">
                              <span className="new__price">$5.99</span>{" "}
                              <span className="new__discount">$12.99</span>
                            </div>
                          </div>
                        </SwiperSlide><SwiperSlide>
                          <div className="new__content swiper-slide">
                            <div className="new__tag">New</div>
                            <img
                              src="/img/new6-img.png"
                              alt="new6-img"
                              className="new__img"
                            />
                            <h3 className="new__title">Witch Broom</h3>
                            <span className="new__subtitle">Accessory</span>
                            <div className="new__prices">
                              <span className="new__price">$7.99</span>{" "}
                              <span className="new__discount">$14.99</span>
                            </div>
                          </div>
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>

                </div>
              </Fade>

            </section>
          </ScrollReveal>
          {/*==================== OUR NEWSLETTER ====================*/}
          <ScrollReveal style={{ backgroundColor: "" }}>
            <section className="section newsletter">
              <Fade top cascade>
                <div className="newsletter__container container">
                  <h2 className="section__title">Our Newsletter</h2>
                  <p className="newsletter__description">
                    Promotion new products and sales. Directly to your inbox
                  </p>
                  <form action="" className="newsletter__form">
                    <input
                      type="text"
                      placeholder="Enter your email"
                      className="newsletter__input"
                    />{" "}
                    <button className="button">Subscribe</button>
                  </form>
                </div>
              </Fade>
            </section>
          </ScrollReveal>
        </main>
        {/*==================== FOOTER ====================*/}
        <footer className="footer section">
          <Fade bottom cascade>
            <div className="footer__container container grid">
              <div className="footer__content">
                <a href="#" className="footer__logo">
                  <img
                    src="/img/logo.png"
                    alt="logo"
                    className="footer__logo-img"
                  />{" "}
                  Halloween
                </a>
                <p className="footer__description">
                  Enjoy the scariest night
                  <br />
                  of your life.
                </p>
                <div className="footer__social">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    className="footer__social-link"
                  ><Icon icon={facebookFill} />
                  </a>
                  {" "}
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    className="footer__social-link"
                  ><Icon icon={instagramFill} />
                  </a>{" "}
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    className="footer__social-link"
                  ><Icon icon={twitterFill} /></a>
                </div>
              </div>
              <div className="footer__content">
                <h3 className="footer__title">About</h3>
                <ul className="footer__links">
                  <li>
                    <a href="#" className="footer__link">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer__link">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer__link">
                      News
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer__content">
                <h3 className="footer__title">Our Services</h3>
                <ul className="footer__links">
                  <li>
                    <a href="#" className="footer__link">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer__link">
                      Discounts
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer__link">
                      Shipping mode
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer__content">
                <h3 className="footer__title">Our Company</h3>
                <ul className="footer__links">
                  <li>
                    <a href="#" className="footer__link">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer__link">
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer__link">
                      Our mision
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Fade>
          <span className="footer__copy">©Chrif. All rigths reserved</span>{" "}
          <img
            src="/img/footer1-img.png"
            alt="footer1-img"
            className="footer__img-one"
          />{" "}
          <img
            src="/img/footer2-img.png"
            alt="footer2-img"
            className="footer__img-two"
          />

        </footer>
        {/*=============== SCROLL UP ===============*/}
        <a href="#" className="scrollup" id="scroll-up" />{" "}
        {/*=============== SCROLL REVEAL ===============*/}
      </>

    </div>
  )
}

export default Home
