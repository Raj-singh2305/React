import React from "react";

function Card({ username = "Raj", post = "not assigned at", myArr }) {
  return (
    <>
      <div className="flex flex-col items-center p-7 rounded-2xl">
        <div>
          <img
            className="size-24 shadow-xl rounded-md"
            alt=""
            src="https://images.pexels.com/photos/31487010/pexels-photo-31487010/free-photo-of-blooming-magnolia-trees-against-a-clear-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </div>

        <div className="flex">
          <p>
            {username},{post} ,{myArr} - Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Dignissimos, aperiam?
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;
