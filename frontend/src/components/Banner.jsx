import React from "react";
import img from "../../public/banner.png";

const Banner = () => {
  return (
    <div className="pt-4 max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 space-y-6 order-2 lg:order-1">
        <h1 className="text-5xl pt-7 md:pt-32">
          Learn something new everyday with us. <br />
          <span className="text-pink-500">Start Now</span>
        </h1>
        <div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
            nostrum sint sequi, nobis officia aperiam harum. Quisquam animi
            ipsum rem.
          </p>
        </div>
        <div>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="Email" />
          </label>
        </div>
        <div>
          <button className="btn btn-secondary">Secondary</button>
        </div>
      </div>
      <div className="w-full lg:w-1/2 order-1 lg:order-2 pt-4">
        <img src={img} alt="books" />
      </div>
    </div>
  );
};

export default Banner;
