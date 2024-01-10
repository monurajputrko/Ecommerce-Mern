import AliceCarousel from "react-alice-carousel";
import { HomeCard } from "./HomeCard";

export const HomeCorousel = () => {
    
    const responsive = {
      0: { items: 1 },
      720: { items: 3 },
      1024: { items: 4 },
    };
    const items = [1, 1, 1, 1, 1, 1].map((item) => <HomeCard />);
    return (
      <div>
        <AliceCarousel
          items={items}
          responsive={responsive}
          disableButtonsControls
          autoPlay
          autoPlayInterval={1000}
          infinite
        />
      </div>
    );

}