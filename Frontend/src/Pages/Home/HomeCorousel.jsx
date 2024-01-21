import AliceCarousel from "react-alice-carousel";
import { HomeCard } from "./HomeCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useState } from "react";

export const HomeCorousel = ({data,sectionName}) => {
    
    const [activeIndex, setActiveIndex] = useState(0)
    const responsive = {
        0: { items: 1.1 },
        720: { items: 2.5 },
        1024: { items: 5 },
    };
    
    
    const items = data.map((item) => { return <HomeCard item={item} /> });

    const slidePrev = () => {
        setActiveIndex(activeIndex - 1);
        console.log("Pre Button Clicked")
    }

    const slideNext = () => {
        setActiveIndex(activeIndex + 1)
        console.log("Next Button Clicked");
    }

    const syncActiveIndex = ({ item }) => setActiveIndex(item);

  return (
      <div className=" px-4 lg:px-8">
          <div style={{ width:"100%",textAlign:"left"}} className="text-2xl font-extrabold text-gray-800">{sectionName}</div>
      <div className="relative p-5">
        <AliceCarousel
          key={activeIndex}
          items={items}
          responsive={responsive}
          disableButtonsControls
          disableDotsControls
          onSlideChange={syncActiveIndex}
          activeIndex={activeIndex}
        />
        {activeIndex !== items.length - 5 && (
          <Button
            onClick={slideNext}
            variant="contained"
            sx={{
              position: "absolute",
              top: "8rem",
              right: "-2rem",
              transform: "translateX(0%) rotate(90deg)",
              bgcolor: "white",
            }}
            label="next"
            className="z-50 bg-white"
            style={{ backgroundColor: "transparent" }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "white";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
            }}
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}

        {activeIndex !== 0 && (
          <Button
            onClick={slidePrev}
            variant="contained"
            sx={{
              position: "absolute",
              top: "8rem",
              left: "-2rem",
              transform: "translateX(0%) rotate(90deg)",
              bgcolor: "white",
            }}
            label="next"
            className="z-50 bg-white"
            style={{ backgroundColor: "transparent" }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "white";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
            }}
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(-90deg)", color: "black" }}
            />
          </Button>
        )}
      </div>
    </div>
  );
};
