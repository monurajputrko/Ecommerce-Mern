import { MainCarousel } from "../../Components/Customer/Maincarousel/Maincarousel"
import { data } from "../../fakedata";
import { HomeCorousel } from "./HomeCorousel"

export const HomePage = () => {
    
    return (
      <div>
        <MainCarousel />
        <div className="space-y-10 py-20 flex flex-col justify-center">
          <HomeCorousel data={data} />
          <HomeCorousel data={data} />
          <HomeCorousel data={data} />
          <HomeCorousel data={data} />
          <HomeCorousel data={data} />
          <HomeCorousel data={data} />
        </div>
      </div>
    );

}