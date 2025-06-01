import dynamic from "next/dynamic";

const PageBox = dynamic(() => import("@/components/core/PageBox"));
const HomeSection1 = dynamic(() => import("@/components/home/Section1"));
const HomeSection12 = dynamic(() => import("@/components/home/Section12"));
const HomeSection2 = dynamic(() => import("@/components/home/Section2"));
const HomeSection3 = dynamic(() => import("@/components/home/Section3"));
const HomeSection4 = dynamic(() => import("@/components/home/Section4"));
const HomeSection5 = dynamic(() => import("@/components/home/Section5"));
const HomeSection6 = dynamic(() => import("@/components/home/Section6"));

import CustomCursor from '@/components/CustomCursor'
import ArcReactorButton from "@/components/ArcReactorButton";

const Home = () => {
  return (
    <div className="relative">
      <CustomCursor/>
      {/* Video Background - Fixed for all sections */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>
        {/* Overlay to make text more readable */}
        <div className="absolute inset-0 bg-black/30 dark:bg-black/50"></div>
      </div>

      {/* Content */}
      <PageBox>
        <HomeSection1 id="hero" />
        <HomeSection12 />
        <HomeSection2 id="services" />
        <HomeSection3 id="experiences" />
        <HomeSection4 id="skills" />
        <HomeSection5 id="projects" />
        <HomeSection6 id="contact" />
      </PageBox>

      <ArcReactorButton/>
    </div>
  );
};

export default Home;