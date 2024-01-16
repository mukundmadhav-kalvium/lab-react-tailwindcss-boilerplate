import React from "react";

const Card = () => {
  return (
    <div className="flex bg-white h-20 rounded-xl shadow-xl border items-center self-center space-x-5 px-5 my-5">
      <div>
        <img
          className="object-contain"
          src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png"
          alt=""
        />
      </div>
      <div className="w-11/12">
        <h2 className="font-medium">Kalvium Store</h2>
        <h4>You have a new course!</h4>
      </div>
    </div>
  );
};

export default Card;
