import React, {useContext} from "react";
import Context from "../../context/Context";
import Banner from "./Banner";
import BestSeller from "./BestSeller";
import BlogComponent from "./BlogComponents";
import Category from "./Category";
import ForUser from "./ForUser";
import Gift from "./Gift";
import ListBrand from "./ListBrand";
import OnSale from "./OnSale";
import Services from "./Services";
import Subcribe from "./Subcribe";
function Home() {
  return (
    <div>
      <Banner />
      <ListBrand />
      <Category />
      <OnSale/>
      <BestSeller />
      <Services />
      <Gift />
      <ForUser />
      <BlogComponent />
      <Subcribe />
    </div>
  );
}

export default Home;
