import React from "react";
import { useLoaderData, useParams } from "react-router";
import Buttons from "../components/ul/Buttons";
import { MdBookmarkAdd } from "react-icons/md";
import { MdShoppingCartCheckout } from "react-icons/md";

const PhoneDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const singlePhone = data.find((phone) => phone.id === parseInt(id));
  console.log(singlePhone);
  const {
    name,
    brand,
    model,
    image,
    // price,
    description,
    storage,
    camera_info,
  } = singlePhone;
  // console.log(data);
  return (
    <div className="w-full py-12">
      <img
        src={image}
        alt="Banner Image"
        className="w-full mx-auto mb-8 md:w-auto"
      />
      {/* title and buttons */}
      <div className="flex justify-between">
        <h1 className="text-6xl font-thin mb-8">{name}</h1>
        <div className="flex space-x-4">
          <Buttons label={<MdShoppingCartCheckout />}></Buttons>
          <Buttons label={<MdBookmarkAdd />}></Buttons>
        </div>
      </div>
      {/* details buttons */}
      <div className="space-y-2">
        <p className="text-4xl ">{brand}</p>
        <h3 className="text-2xl ">{model}</h3>
        {/* <h3>{price}</h3> */}
        <p>{description}</p>
        <p className=" text-2xl">{storage}</p>
        <h6 className="text-xl">{camera_info}</h6>
      </div>
    </div>
  );
};

export default PhoneDetails;
