import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";




export const MainCarousel = () => {

    const [MainCarouselData, setMainCarouselData] = useState([
      {
        image:
          "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/04b82d552f348e4d.jpg?q=20",
      },
      {
        image:
          "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/816e6aafaa481663.jpg?q=20",
      },
      {
        image:
          "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/aa1b2bdcf519b468.jpg?q=20",
      },
      {
        image:
          "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/ee4cfe398734c78d.jpg?q=20",
      },
    ]);
    const items = MainCarouselData.map((item) => <img className='cursor-pointer' role="presention" src={item.image} alt="Corousel" />)
   
    return <>  <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
    />
    </>
};
