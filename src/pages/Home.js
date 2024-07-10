import ".././styles/Hero.css"
import Hero from ".././components/Hero.js"
import AboutPreview from ".././components/AboutPreview.js"
import NewsAnnouncementsPreview from "../components/NewsAnnouncementsPreview.js";
import FeaturedEvents from "../components/FeaturedEvents.js";
import BoardmembersPreview from "../components/BoardmembersPreview.js";
import GalleryPreview from "../components/GalleryPreview.js";
import CTA from "../components/CTA.js";
import Footer from "../components/Footer.js";

function Home() {
    return (
        <>
            <Hero />
            <AboutPreview />
            <NewsAnnouncementsPreview />
            <FeaturedEvents />
            <BoardmembersPreview />
            <GalleryPreview />
        </>
    );
}

export default Home;