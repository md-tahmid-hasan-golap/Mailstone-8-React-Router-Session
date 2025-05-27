import React, { useState } from "react";
import HeroContainer from "../components/HeroContainer";
import PhonesContainer from "../components/PhonesContainer";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();
  // console.log(data);
  const [phones, setPhones] = useState(data);
  const handleSearch = (e, text) => {
    e.preventDefault();
    if (text === "") return setPhones(data);
    const searchPhone = data.filter(
      (phone) =>
        phone.name.toLowerCase().split(" ").includes(text.toLowerCase()) ||
        phone.brand.toLowerCase().split(" ").includes(text.toLowerCase())
    );
    setPhones(searchPhone);
  };
  return (
    <div>
      <HeroContainer handleSearch={handleSearch}></HeroContainer>
      <PhonesContainer phones={phones}></PhonesContainer>
    </div>
  );
};

export default Home;
