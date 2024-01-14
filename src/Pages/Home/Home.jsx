import { MainCarousel } from "../../Components/Customer/Maincarousel/Maincarousel"
import { data } from "../../fakedata";
import { HomeCorousel } from "./HomeCorousel"

export const Home = () => {
    
    return (
      <div>
        <MainCarousel />
        <div className="space-y-10 py-20 flex flex-col justify-center">
          <HomeCorousel data={data} sectionName={"Rajputi Poshak"} />
          <HomeCorousel data={data} sectionName={"Cotton Jod"} />
          <HomeCorousel data={data} sectionName={"Orgenja Silk"} />
          <HomeCorousel data={data} sectionName={"Pure Odhna"} />
          <HomeCorousel data={data} sectionName={"Silk Fabric"} />
          <HomeCorousel data={data} sectionName={"Silk Saree"} />
        </div>
      </div>
    );

}