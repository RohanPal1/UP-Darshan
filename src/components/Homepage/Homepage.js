import React, { useState } from "react";
import "../Homepage/Homepage.css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import logo2 from "../Homepage/Images/logo2.png";
import { FaSearch } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navigation_Menu from "../Navigation_menu/Navigation_Menu";
import Header from "../Header/Header";
import { useTranslation } from "react-i18next";

// Places in Uttar Pradesh
const places = [
  {
    id: 1,
    name: "Taj Mahal",
    image:
      "https://media.istockphoto.com/id/159371791/photo/taj-mahal-india.jpg?s=612x612&w=0&k=20&c=M5j5WON-sb5IbeFxE8wI3CRhF1lYO2QeFwGbIMYg6fc=",
    url: "",
  },
  {
    id: 2,
    name: "Varanasi",
    image:
      "https://images.unsplash.com/photo-1561359313-0639aad49ca6?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Lucknow",
    image:
      "https://media.istockphoto.com/id/515777470/photo/bara-imambara-lucknow.jpg?s=612x612&w=0&k=20&c=l-nZsLmzr_diEWjdriUepV58HHW44JfeJjydQy-rRFk=",
  },
  {
    id: 4,
    name: "Prayagraj",
    image:
      "https://media.istockphoto.com/id/2201945734/photo/tent-city-at-the-maha-kumbh-or-mahakumbh-mela-in-prayagraj-uttar-pradesh-india.jpg?s=612x612&w=0&k=20&c=R6D5nmHErL8kGCnUtNrC797t3dvyw7Tt3ZEhKLrTrkU=",
  },
  {
    id: 5,
    name: "Agra Fort",
    image:
      "https://media.istockphoto.com/id/1169495248/photo/agra-fort-medieval-indian-fort-at-agra-india-at-sunrise.jpg?s=612x612&w=0&k=20&c=EI9BXzCutx2gRuPCFUDSirZg9Hfc7G_kGfFbmVBmSEc=",
  },
  {
    id: 6,
    name: "Fatehpur Sikri",
    image:
      "https://media.istockphoto.com/id/827043866/photo/fatehpur-sikri-city.jpg?s=612x612&w=0&k=20&c=yHA0K62z-cCXMkxB2CEshzcisVzmMILqIv-AStGIFso=",
  },
  {
    id: 7,
    name: "Mathura",
    image:
      "https://media.istockphoto.com/id/1280487202/photo/krishna-balaram-iskcon-temple-vrindavan.jpg?s=612x612&w=0&k=20&c=OgOrz9q3zZQ6hqU3DoGwlGih-8cBrYH_GpUTyGx8h1A=",
  },
  {
    id: 8,
    name: "Vrindavan",
    image:
      "https://media.istockphoto.com/id/1396211723/photo/prem-mandir-vrindavan.jpg?s=612x612&w=0&k=20&c=Wgw3lgzt_W1efEP0DFMmQfKepXJdmhgD4Qbo_-Jqoso=",
  },
  {
    id: 9,
    name: "Sarnath",
    image:
      "https://media.istockphoto.com/id/475555404/photo/vishwa-shanti-stupa-sarnath-uttar-pradesh-india.jpg?s=612x612&w=0&k=20&c=hTse-eRwDczEerjetkZcWqVZSFFN7kSj95LSgSQwAls=",
  },
  {
    id: 10,
    name: "Kuchesar Mud Fort",
    image:
      "https://media.istockphoto.com/id/1303329504/photo/derawar-historical-fort-bhawalpur-punjab.jpg?s=612x612&w=0&k=20&c=ryHKf_QV8EpraAQyO7nPlyjzbhlWI4JlP8hTR4_pwpo=",
  },
  {
    id: 11,
    name: "Panch Mahal",
    image:
      "https://media.istockphoto.com/id/936520132/photo/maharaja-sayajirao-university-of-baroda-faculty-of-arts-india.jpg?s=612x612&w=0&k=20&c=5OYLpFEGi3CwKUsbL_kwaOeb8q7abAH7Vl6T5qJPWlA=",
  },
  {
    id: 12,
    name: "Bara Imambara",
    image:
      "https://media.istockphoto.com/id/502118398/photo/asfi-mosque-shrine.jpg?s=612x612&w=0&k=20&c=IV9b5mtjXFKeBKTWVPf3PDgi3RVFrH8jiAYAwnR0xUg=",
  },
];

// Places in Uttar Pradesh ends

// Images for Slider
const images = [
  "https://media.istockphoto.com/id/159371791/photo/taj-mahal-india.jpg?s=612x612&w=0&k=20&c=M5j5WON-sb5IbeFxE8wI3CRhF1lYO2QeFwGbIMYg6fc=",
  "https://images.unsplash.com/photo-1561359313-0639aad49ca6?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://media.istockphoto.com/id/515777470/photo/bara-imambara-lucknow.jpg?s=612x612&w=0&k=20&c=l-nZsLmzr_diEWjdriUepV58HHW44JfeJjydQy-rRFk=",
  "https://media.istockphoto.com/id/515777470/photo/bara-imambara-lucknow.jpg?s=612x612&w=0&k=20&c=l-nZsLmzr_diEWjdriUepV58HHW44JfeJjydQy-rRFk=",
  "https://media.istockphoto.com/id/1169495248/photo/agra-fort-medieval-indian-fort-at-agra-india-at-sunrise.jpg?s=612x612&w=0&k=20&c=EI9BXzCutx2gRuPCFUDSirZg9Hfc7G_kGfFbmVBmSEc=",
  "https://media.istockphoto.com/id/827043866/photo/fatehpur-sikri-city.jpg?s=612x612&w=0&k=20&c=yHA0K62z-cCXMkxB2CEshzcisVzmMILqIv-AStGIFso=",
  "https://media.istockphoto.com/id/1280487202/photo/krishna-balaram-iskcon-temple-vrindavan.jpg?s=612x612&w=0&k=20&c=OgOrz9q3zZQ6hqU3DoGwlGih-8cBrYH_GpUTyGx8h1A=",
  "https://media.istockphoto.com/id/1396211723/photo/prem-mandir-vrindavan.jpg?s=612x612&w=0&k=20&c=Wgw3lgzt_W1efEP0DFMmQfKepXJdmhgD4Qbo_-Jqoso=",
  "https://media.istockphoto.com/id/475555404/photo/vishwa-shanti-stupa-sarnath-uttar-pradesh-india.jpg?s=612x612&w=0&k=20&c=hTse-eRwDczEerjetkZcWqVZSFFN7kSj95LSgSQwAls=",
  "https://media.istockphoto.com/id/1303329504/photo/derawar-historical-fort-bhawalpur-punjab.jpg?s=612x612&w=0&k=20&c=ryHKf_QV8EpraAQyO7nPlyjzbhlWI4JlP8hTR4_pwpo=",
  "https://media.istockphoto.com/id/936520132/photo/maharaja-sayajirao-university-of-baroda-faculty-of-arts-india.jpg?s=612x612&w=0&k=20&c=5OYLpFEGi3CwKUsbL_kwaOeb8q7abAH7Vl6T5qJPWlA=",
  "https://media.istockphoto.com/id/502118398/photo/asfi-mosque-shrine.jpg?s=612x612&w=0&k=20&c=IV9b5mtjXFKeBKTWVPf3PDgi3RVFrH8jiAYAwnR0xUg=",
];
// Images for Slider

function Homepage() {
  //  Language switch
  const { t } = useTranslation();
  //  Language switch
  const [selectedId, setSelectedId] = useState(1);
  const handleClick = (place) => {
    setSelectedId(place.id);
    console.log("Selected:", place.name);
  };
  return (
    <div className="container homepage-container">
      <div className="main-content">
        <div className="header-container">
          <Header />
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input type="text" placeholder={t("Search destinations...")} />
          </div>

          <div className="taglines">
            <h2 className="text-start poppins">
              {t("Tap to Explore – Scan, Listen, Travel!")}
            </h2>
            <p className="text-start poppins">
              {t("Plan Your Journey with")} <span>{t("Audio Guides")}</span>
            </p>
          </div>
        </div>

        {/* Places Slider */}
        <div className="middle-section">
          <div className="avatar-slider-wrapper">
            <div className="avatar-slider">
              <Swiper
                spaceBetween={15}
                slidesPerView="auto"
                loop={true}
                // autoplay={{
                //   delay: 0,
                //   disableOnInteraction: false,
                // }}
                // speed={8000}
                // modules={[Autoplay]}
              >
                {places.map((place, index) => (
                  <SwiperSlide key={index} className="avatar-slide">
                    <div
                      className={`avatar-item ${
                        selectedId === place.id ? "active" : ""
                      }`}
                      onClick={() => handleClick(place)}
                    >
                      <img
                        src={place.image}
                        alt={place.name}
                        className="avatar-image"
                      />
                      <span className="avatar-name poppins">
                        {t(place.name)}
                      </span>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          {/* Places Slider */}

          <div className="Swiper-slider-container">
            <Swiper
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={"auto"}
              speed={1000}
              // initialSlide={1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                waitForTransition: true,
              }}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 300,
                modifier: 2.5,
                slideShadows: false,
              }}
              pagination={{ clickable: true }}
              modules={[EffectCoverflow, Pagination, Autoplay]}
              className="mySwiper"
            >
              {places.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="card">
                    <img src={item.image} alt={`Slide ${index}`} />
                    <div className="card-overlay poppins">
                      {t(item.name)}
                      <div className="arrow">
                        <a href="/product-page">
                          <FaArrowRight />
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="bottom-nav-wrapper">
        <Navigation_Menu />
      </div>
    </div>
  );
}

export default Homepage;
