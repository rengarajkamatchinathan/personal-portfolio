'use client'

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const PageBox = dynamic(() => import("@/components/core/PageBox"));
const HomeSection1 = dynamic(() => import("@/components/home/Section1"));
const HomeSection12 = dynamic(() => import("@/components/home/Section12"));
const HomeSection2 = dynamic(() => import("@/components/home/Section2"));
const HomeSection3 = dynamic(() => import("@/components/home/Section3"));
const HomeSection4 = dynamic(() => import("@/components/home/Section4"));
const HomeSection5 = dynamic(() => import("@/components/home/Section5"));
const HomeSection6 = dynamic(() => import("@/components/home/Section6"));

import CustomCursor from "@/components/CustomCursor";
import ArcReactorButton from "@/components/ArcReactorButton";

const Home = () => {
  const [showSplash, setShowSplash] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    // Initialize audio context
    audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    // Create audio element
    audioRef.current = new Audio("/welcome.mp3");
    audioRef.current.loop = false;
    audioRef.current.preload = "auto";
    
    // For iOS compatibility
    const handleTouch = () => {
      if (audioContextRef.current?.state === 'suspended') {
        audioContextRef.current.resume();
      }
      document.removeEventListener('touchstart', handleTouch);
    };
    document.addEventListener('touchstart', handleTouch);

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
        audioContextRef.current = null;
      }
    };
  }, []);

  const handleSplashEnd = () => {
    setShowSplash(false);
    
    // Small delay to ensure audio context is ready
    setTimeout(() => {
      if (audioRef.current && audioContextRef.current) {
        const source = audioContextRef.current.createMediaElementSource(audioRef.current);
        source.connect(audioContextRef.current.destination);
        
        audioRef.current.play().catch(err => {
          console.warn("Audio playback failed:", err);
          // Fallback to regular audio if Web Audio API fails
          audioRef.current?.play().catch(e => console.warn("Fallback failed:", e));
        });
      }
    }, 300);
  };

  return (
    <div className="relative">
      {showSplash ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <video
            autoPlay
            muted
            className="w-full h-full object-cover"
            onEnded={handleSplashEnd}
          >
            <source src="/Loading1.mp4" type="video/mp4" />
          </video>
        </div>
      ) : (
        <>
          <CustomCursor />

          {/* Background Video */}
          <div className="fixed inset-0 -z-10 overflow-hidden">
            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
              <source src="/bg.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/30 dark:bg-black/50"></div>
          </div>

          <PageBox>
            <HomeSection1 id="hero" />
            <HomeSection12 />
            <HomeSection2 id="services" />
            <HomeSection3 id="experiences" />
            <HomeSection4 id="skills" />
            <HomeSection5 id="projects" />
            <HomeSection6 id="contact" />
          </PageBox>

          <ArcReactorButton />
        </>
      )}
    </div>
  );
};

export default Home;