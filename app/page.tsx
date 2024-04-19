import {
  Hero,
  LatestArticles,
  Navbar,
  PopularVideos,
  TopStories,
} from "./components";
import FeturedPost from "./components/featured-post/FeaturedPost";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="bg-black gap-12 md:gap-14 grid">
      <Hero />

      <FeturedPost />
      <PopularVideos />
      <LatestArticles />
      <TopStories />
    </main>
  );
}
