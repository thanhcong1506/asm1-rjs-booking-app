import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { faCircleArrowLeft, faCircleArrowRight, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./HotelDetail.css";

const HotelDetail = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    { src: "./images/hotel_detail_1.jpg" },
    { src: "./images/hotel_detail_2.jpg" },
    { src: "./images/hotel_detail_3.jpg" },
    { src: "./images/hotel_detail_4.jpg" },
    { src: "./images/hotel_detail_5.jpg" },
    { src: "./images/hotel_detail_6.jpg" },
  ];
  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div className="hotelContainer">
         {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
      <div className="hotelWrapper">
        <button className="bookNow">Reserve or Book Now!</button>
        <h1 className="hotelTitle">Tower Street Apartments</h1>
        <div className="hotelAddress">
          <FontAwesomeIcon icon={faLocationDot} />
          <span>Elton St 125 New york</span>
        </div>
        <span className="hotelDistance">
          Excellent location – 500m from center
        </span>
        <span className="hotelPriceHighlight">
          Book a stay over $114 at this property and get a free airport taxi
        </span>
        <div className="hotelImages">
          {photos.map((photo, i) => (
            <div className="hotelImgWrapper" key={i}>
              <img
                onClick={() => handleOpen(i)}
                src={photo.src}
                alt=""
                className="hotelImg"
              />
            </div>
          ))}
        </div>
        <div className="hotelDetails">
          <div className="hotelDetailsTexts">
            <h1 className="hotelTitle">Stay in the heart of City</h1>
            <p className="hotelDesc">
              Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
              Street Apartments has accommodations with air conditioning and
              free WiFi. The units come with hardwood floors and feature a fully
              equipped kitchenette with a microwave, a flat-screen TV, and a
              private bathroom with shower and a hairdryer. A fridge is also
              offered, as well as an electric tea pot and a coffee machine.
              Popular points of interest near the apartment include Cloth Hall,
              Main Market Square and Town Hall Tower. The nearest airport is
              John Paul II International Kraków–Balice, 16.1 km from Tower
              Street Apartments, and the property offers a paid airport shuttle
              service.
            </p>
          </div>
          <div className="hotelDetailsPrice">
            <h1>Perfect for a 9-night stay!</h1>
            <span>
              Located in the real heart of Krakow, this property has an
              excellent location score of 9.8!
            </span>
            <h2>
              <b>$945</b> (9 nights)
            </h2>
            <button>Reserve or Book Now!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetail;
