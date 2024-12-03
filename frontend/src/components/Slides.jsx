import React from "react";

export const Slides = ({ item }) => {
  return (
    <div>
      <div className="dark:bg-slate-900 dark:text-white dark:border card bg-base-100 w-64 md:w-96 h-96 shadow-xl  m-3">
        <figure>
          <img src={item.image} alt="books" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <div>
            <p className="text-left">{item.title}</p>
          </div>
          <div className="card-actions justify-between pt-4">
            <div className="badge badge-outline hover:bg-pink-400">Try it</div>
            <div className="badge badge-outline hover:bg-pink-400">Buy Now</div>
          </div>
        </div>
      </div>
    </div>
  );
};
