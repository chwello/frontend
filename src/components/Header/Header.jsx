import React from "react";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-col sm:flex-row mt-8 mb-32 justify-center items-center">
      <div className="hidden sm:block">
        <img src={assets.food_1} alt="Food" className="" />
      </div>
      <div className="bg-pink-100 p-10">
        <h2 className="font-libreBaskerville pt-4 text-4xl pb-6">
          Explore different recipe here
        </h2>
        <p className="font-poppins">
          Dive into a variety of cuisines, meal types, and dietary preferences
          to discover new favorites. Our goal is to satisfy your taste buds and
          make every meal a memorable experience.
        </p>
        <button className="font-poppins border border-solid border-black rounded-lg p-3 text-sm mt-4">
        <Link to="/recipelist">view more</Link>
        </button>
      </div>
      
    </div>
  );
};

export default Header;
