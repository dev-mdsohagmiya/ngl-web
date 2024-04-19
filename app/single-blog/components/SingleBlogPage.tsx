import MainCard from "@/app/components/hero/MainCard";
import PartCardImg001 from "../../assets/Patd-Card/001.jpg";
import FeturedPost from "@/app/components/featured-post/FeaturedPost";
import { LatestArticles } from "@/app/components";

function SingleBlogPage() {
  return (
    <div>
      <div className=" pt-14">
        <div className="px-[5.1%] ">
          <MainCard
            details={true}
            src={PartCardImg001}
            name="Technology"
            dsc="Donec nec justo eget felis facilisis fermentum. Aliquam
                  porttitor mauris sit amet orci."
            date="18/03/2024"
          />
        </div>
        <div className="pt-12 md:pt-14">
          <FeturedPost />
        </div>
        <div className="pt-12 md:pt-14">
          <LatestArticles />
        </div>
      </div>
    </div>
  );
}

export default SingleBlogPage;
