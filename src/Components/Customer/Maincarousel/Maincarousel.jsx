import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { MainCarouselData } from "../../../fakedata";

export const MainCarousel = () => {
  const items = MainCarouselData.map((item) => (
    <img
      className="cursor-pointer"
      role="presention"
      src={item.image}
      alt="Corousel"
    />
  ));

  return (
    <div style={{zIndex:"0"}}>
      <AliceCarousel
        autoHeight
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
      />
    </div>
  );
};
