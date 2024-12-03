import React, { useEffect, useState } from "react";
import { Slides } from "./Slides";
import axios from "axios";

const Course = () => {
  // Initial state as an array since you are mapping over it
  const [book, setBook] = useState([]);

  useEffect(() => {
    const fnc = async () => {
      try {
        // Add http:// or https:// to the URL
        const response = await axios.get("http://localhost:4000/book");
        // Set the actual data from the response
        setBook(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fnc();
  }, []);

  

  return (
    <div className="max-w-screen-xl container mx-auto md:px-10 px-4 py-24">
      <div className="flex flex-col justify-center text-center items-center">
        <div>
          <h1 className="text-4xl ">
            We are delighted to have{" "}
            <span className="text-pink-400">you here!</span>
          </h1>
          <p className="py-3 w-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cum
            saepe praesentium consequatur, commodi accusantium voluptas quod
            porro nesciunt labore Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Reiciendis, similique.
          </p>
        </div>
        <div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {book.map((item) => (
              <Slides item={item} key={item._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
