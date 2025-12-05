import React, { useState } from "react";
import { FaArrowLeft, FaHeadphones } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import "../ProductPage/Product_Page.css";
import Navigation_Menu from "../Navigation_menu/Navigation_Menu";
import TajMahal from "../Images/TajMahal.avif";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import { useTranslation } from "react-i18next";

// 1st Tab Data to be shown
const chapters = [
  {
    id: 1,
    title: "Welcome To Taj Mahal",
    duration: "2:10 mins",
    image:
      "https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGFqJTIwbWFoYWx8ZW58MHx8MHx8fDA%3D",
    url: "/play-audio-page",
  },
  {
    id: 2,
    title: "Mausoleum",
    duration: "1:38 mins",
    image:
      "https://plus.unsplash.com/premium_photo-1661963721949-20007b5414c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8TWF1c29sZXVtfGVufDB8fDB8fHww",
  },
  {
    id: 3,
    title: "Great Gate",
    duration: "1:25 mins",
    image:
      "https://images.unsplash.com/photo-1591946522651-90fbace43004?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8R3JlYXQlMjBHYXRlfGVufDB8fDB8fHww",
  },
  {
    id: 4,
    title: "Great Gate",
    duration: "1:25 mins",
    image:
      "https://images.unsplash.com/photo-1591946522651-90fbace43004?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8R3JlYXQlMjBHYXRlfGVufDB8fDB8fHww",
  },
  {
    id: 5,
    title: "Great Gate",
    duration: "1:25 mins",
    image:
      "https://images.unsplash.com/photo-1591946522651-90fbace43004?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8R3JlYXQlMjBHYXRlfGVufDB8fDB8fHww",
  },
];

// 1st Tab Data to be shown

// 2nd Tab Data to be shown
const description_data = [
  {
    id: 1,
    title: "Fatehpur Sikri",
    duration: "1:50 mins",
    image:
      "https://plus.unsplash.com/premium_photo-1697730300605-8f099d0f36e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RmF0ZWhwdXIlMjBTaWtyaXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    title: "Agra Fort",
    duration: "1:58 mins",
    image:
      "https://images.unsplash.com/photo-1658316532318-8d9a5595293f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QWdyYSUyMEZvcnR8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    title: "Chota Imambada",
    duration: "2:25 mins",
    image:
      "https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQylTRru9QiN2RFKuUYrwCpDdfsAs-tXkBFcfGZ-tY4V52WDVq_38Z3aez62wcm7-aR",
  },
];

// 2nd Tab Data to be shown

function Product_Page() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Synopsis");

  // Language change
  const { t } = useTranslation();
  return (
    <div className="app-container">
      <Header />
      <div className="container map-main-content-product-page mt-3 heritage-card">
        {/* Header Image */}
        <div className="header-image-tajmahal mb-3">
          <img className="h-100 w-100" src={TajMahal} alt="" />
          <button onClick={() => navigate(-1)} className="nav-button left-btn">
            <FaArrowLeft style={{ color: "white" }} />
          </button>
          <button className="nav-button right-btn">
            <a href="">
              <CiLocationOn style={{ color: "white" }} />
            </a>
          </button>
          <div className="title-overlay text-start poppins">
            {t("Taj Mahal")}
          </div>
        </div>

        <div className="bottom-section-product-page">
          {/* Music and Description Tabing Section */}
          <div className="chapter-tabs-container">
            {/* Tabs */}
            <div className="tab-buttons">
              {["Synopsis", "Description"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`tab-button ${activeTab === tab ? "active" : ""}`}
                >
                  {t(tab)}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {activeTab === "Synopsis" ? (
              <div className="chapter-list chapter-scroll-container">
                {chapters.map((chapter, index) => (
                  <Link
                    to={chapter.url || "#"}
                    key={chapter.id}
                    className="chapter-card-link"
                  >
                    <div key={chapter.id} className="chapter-card">
                      <img
                        src={chapter.image}
                        alt={chapter.title}
                        className="chapter-image"
                      />
                      <div className="chapter-details">
                        <p className="chapter-subtitle text-start">
                          Chapter {index + 1}
                        </p>
                        <p className="chapter-title text-start">
                          {t(chapter.title)}
                        </p>
                        <div className="chapter-meta">
                          <FaHeadphones />
                          <span>{chapter.duration}</span>
                        </div>
                      </div>
                      <MdOutlineFileDownload className="download-icon" />
                      <BsThreeDotsVertical className="download-icon" />
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="chapter-list description-tab chapter-scroll-container">
                {description_data.map((description, index) => (
                  <div key={description.id} className="chapter-card">
                    <img
                      src={description.image}
                      alt={t(description.title)}
                      className="chapter-image"
                    />
                    <div className="chapter-details">
                      <p className="chapter-subtitle text-start">
                        {t(`Chapter ${index + 1}`)}
                      </p>
                      <p className="chapter-title text-start">
                        {t(description.title)}
                      </p>
                      <div className="chapter-meta">
                        <FaHeadphones />
                        <span>{description.duration}</span>
                      </div>
                    </div>
                    <MdOutlineFileDownload className="download-icon" />
                    <BsThreeDotsVertical className="download-icon" />
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* Music and Description Tabing Section */}
          {/* Navigation Menu Bottom  */}
        </div>
      </div>
      <Navigation_Menu />
    </div>
  );
}

export default Product_Page;
