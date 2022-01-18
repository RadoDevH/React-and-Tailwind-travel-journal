import React from "react";

const Card = ({
  image,
  title,
  location,
  googleMapsUrl,
  startDate,
  endDate,
  description,
}) => {
  return (
    <div className="flex  mb-5 min-h-[200px] ">
      <div className=" w-1/3  mr-2">
        <img
          className="rounded-lg object-cover h-full  w-full"
          src={image}
          alt=""
        />
      </div>
      <div className="flex flex-col justify-between flex-1 ">
        <div>
          <div className="flex ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-[#f55a5a]"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clip-rule="evenodd"
              />
            </svg>

            <span className="uppercase mr-2">{location}</span>
            <a
              href={googleMapsUrl}
              className="font-light underline decoration-0"
            >
              View on Google Maps
            </a>
          </div>
          <h2 className="mb-3 font-bold text-2xl">{title}</h2>
        </div>
        <div>
          <p className="font-semibold mt-10">
            <span>{startDate}</span> - <span>{endDate}</span>
          </p>
          <p className="text-sm font-light">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
