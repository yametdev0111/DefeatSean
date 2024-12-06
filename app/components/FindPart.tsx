"use client";

import {
  CALL_TO,
  ENGINE_SIZES,
  MAKE,
  PART,
  PHONE_NUMBER,
  TRANSMISSION,
  YEAR,
} from "../config";
import Link from "next/link";
import { FaPhone } from "react-icons/fa";

interface Props {
  selectedMake: string;
  selectedPart: string;
}

const FindPart: React.FC<Props> = ({ selectedMake, selectedPart }) => {

  return (
    <div className="flex flex-col px-2 py-6 lg:w-1/2 md:w-1/2 lg:order-2 md:order-2 order-1 items-end max-w-[450px]">
      <form className=" bg-white rounded-lg" id="#findPart">
        <h3 className="w-full text-[28px] text-white font-semibold rounded-t-lg bg-[#DB3732] mb-3 py-3 text-center">
          Find A Part Now
        </h3>
        <div className={"flex flex-row space-x-3 mb-2 px-3"}>
          <label htmlFor="year" />
          <select
            id="year"
            name="year"
            className="bg-[#F5F5F5] w-full h-12 text-[#4E4E4E] text-[15px] block rounded-md"
          >
            {YEAR.map((key, index) => (
              <option key={index}>{key}</option>
            ))}
          </select>

          <label htmlFor="make" />
          <select
            id="make"
            name="make"
            className="rounded-md bg-[#F5F5F5] w-full h-12 text-[#4E4E4E] text-[15px] block "
          >
            {Object.keys(MAKE).map((key, index) => (
              <option
                key={index}
                selected={selectedMake.toLowerCase() === key.toLowerCase()}
              >
                {key}
              </option>
            ))}
          </select>
        </div>

        <div className={"flex flex-row space-x-3 mb-2 px-3"}>
          <label htmlFor="model" />
          <select
            id="model"
            name="model"
            className="rounded-md bg-[#F5F5F5] w-full h-12 text-[#4E4E4E] text-[15px] block"
          >
            <option>Choose Model</option>
          </select>

          <label htmlFor="part" />
          <select
            id="part"
            name="part"
            className="rounded-md bg-[#F5F5F5] w-full h-12 text-[#4E4E4E] text-[15px] block"
          >
            {PART.map((key, index) => (
              <option key={index} selected={selectedPart === key}>
                {key}
              </option>
            ))}
          </select>
        </div>

        <div className={"flex flex-row space-x-3 mb-2 px-3"}>
          <label htmlFor="engine_size" />
          <select
            id="engine_size"
            name="engine_size"
            className="bg-[#F5F5F5] w-full h-12 text-[#4E4E4E] text-[15px] block rounded-md"
          >
            {ENGINE_SIZES.map((key, index) => (
              <option key={index}>{key}</option>
            ))}
          </select>

          <label htmlFor="transmission" />
          <select
            id="transmission"
            name="transmission"
            className="rounded-md bg-[#F5F5F5] w-full h-12 text-[#4E4E4E] text-[15px] block"
          >
            {TRANSMISSION.map((key, index) => (
              <option key={index}>{key}</option>
            ))}
          </select>
        </div>

        <div className={"flex flex-row space-x-3 mb-2 px-3"}>
          <label htmlFor="fullname" />
          <input
            type="text"
            id="fullname"
            name="fullname"
            className="mb-3 rounded-md w-full h-12 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
            placeholder="Your name"
          ></input>
          <label htmlFor="email" />
          <input
            type="email"
            id="email"
            name="email"
            className="mb-3 rounded-md w-full h-12 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
            placeholder="Email Address*"
          ></input>
        </div>

        <div className="flex flex-row space-x-3 mb-2 px-3">
          <span className={"w-1/2 ml-2 text-primary"}></span>
          <span className={"w-1/2 ml-2 text-primary"}></span>
        </div>

        <div className={"flex flex-row space-x-3 mb-2 px-3"}>
          <label htmlFor="phone_number" />
          <input
            type="number"
            id="phone_number"
            name="phone_number"
            className="rounded-md w-1/2 h-12 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
            placeholder="Phone No."
          ></input>
          <label htmlFor="zip_code" />
          <input
            type="number"
            id="zip_code"
            name="zip_code"
            className="rounded-md w-1/2 h-12 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
            placeholder="Zip Code"
          ></input>
        </div>

        <div className="flex w-full space-x-3 px-3 items-end justify-end mt-4 mb-2">
          <button className="bg-primary text-white text-xl w-full rounded-lg py-2">
            {"Find My Part"}
          </button>
        </div>
      </form>

      <Link
        href={CALL_TO}
        className="mt-5 flex flex-row bg-primary rounded-lg items-center w-full py-5 justify-center"
      >
        <FaPhone
          className="h-8 w-8 p-1 rounded-lg inline-block  bg-white text-primary"
          style={{ transform: "scaleX(-1)" }}
        />
        <h4 className="bg-primary text-white text-[28px] rounded-lg font-bold items-center ml-5">
          {PHONE_NUMBER}
        </h4>
      </Link>
    </div>
  );
};

export default FindPart;
