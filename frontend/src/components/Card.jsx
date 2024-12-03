import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Slides } from "./Slides";
import axios from "axios";

export const Card = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const fnc = async () => {
      try {
        // Fetch data from the API
        const { data } = await axios.get("http://localhost:4000/book");

        // Filter the data for books with category "free"
        const freeData = data.filter((item) => item.category === "free");

        // Set the filtered data to state
        setBook(freeData);
      } catch (error) {
        console.log(error);
      }
    };

    // Call the function here (not inside itself)
    fnc();
  }, []); // Empty dependency array to run only on mount

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <h1 className="text-xl py-3">Free offered books</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus amet quas
        ducimus ips dolores.
      </p>
      <div className="flex flex-col justify-center">
        <Slider {...settings}>
          {book.map((item) => (
            <Slides item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
};
