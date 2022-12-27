import React from "react";
import Hero from "../components/organisms/Hero";
import Navbar from "../components/organisms/Navbar";

function page() {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="w-screen h-screen" id="About"></section>
      <section className="w-screen h-screen" id="Contact"></section>
      <section className="w-screen h-screen"></section>
    </>
  );
}

export default page;
