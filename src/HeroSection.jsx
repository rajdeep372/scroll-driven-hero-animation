import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const containerRef = useRef(null);
  const pinSectionRef = useRef(null);
  const titleRef = useRef(null);
  const statsWrapperRef = useRef(null);
  const statsRefs = useRef([]);
  const carRef = useRef(null);

  useEffect(() => {
    // -------------------------------------------------------------
    // Context wraps all GSAP logic for automatic React cleanup
    // -------------------------------------------------------------
    const ctx = gsap.context(() => {
      
      // 1. Initial Load Animation (Flawless, buttery-smooth reveal)
      const tl = gsap.timeline();

      // Title & Stats fade up with a subtle stagger
      tl.from([titleRef.current, ...statsRefs.current], {
        y: 30,
        opacity: 0,
        duration: 1.4,
        stagger: 0.1,
        ease: 'power3.out',
      })
      // Car fades in and slightly scales up to its starting position
      .from(carRef.current, {
        opacity: 0,
        scale: 0.8,
        x: -50,
        duration: 1.6,
        ease: 'power3.out',
      }, '-=1.2'); // Overlap with typography entrance


      // 2. ScrollTrigger Animation (Premium momentum-based smoothing)
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.5, // Ultra-smooth interpolation
          pin: pinSectionRef.current,
          anticipatePin: 1,
        }
      });

      // Animate the car driving completely across the screen
      scrollTl.to(carRef.current, {
        // We use innerWidth + an offset to ensure it fully exits the right side
        x: () => window.innerWidth + 400, 
        ease: 'none',
      }, 0)
      // Simultaneously parallax the typography upwards and fade it out
      .to([titleRef.current, statsWrapperRef.current], {
        y: -100,
        opacity: 0,
        ease: 'power1.inOut',
      }, 0);

    }, containerRef); // Scope to component

    return () => ctx.revert();
  }, []);

  const stats = [
    { label: "Acceleration", value: "2.3s", sub: "0-100 km/h" },
    { label: "Horsepower", value: "1020", sub: "Peak HP" },
    { label: "Efficiency", value: "99.8%", sub: "Aerodynamic" }
  ];

  return (
    // 300vh wrapper for ample scrolling space
    <div ref={containerRef} className="relative w-full h-[300vh] bg-[#e2e4e1]">
      
      {/* 100vh pinned premium section */}
      <div 
        ref={pinSectionRef} 
        className="relative w-full h-screen bg-[#e2e4e1] overflow-hidden flex flex-col items-center pt-8"
      >
        
        {/* Ultra-Premium Typography (Strictly no wrapping) */}
        <div className="flex flex-col items-center z-10 w-full px-4 mt-10">
          <h1 
            ref={titleRef} 
            className="text-2xl sm:text-4xl md:text-6xl font-black tracking-[0.3em] md:tracking-[0.8em] text-zinc-500 whitespace-nowrap uppercase will-change-transform"
          >
            WELCOME ITZ FIZZ
          </h1>
          
          {/* Sleek Statistic Cards */}
          <div ref={statsWrapperRef} className="flex gap-8 mt-6">
            {stats.map((stat, i) => (
              <div 
                key={i}
                ref={el => statsRefs.current[i] = el}
                className="flex flex-col items-center justify-center py-2 px-6 border-b-2 border-zinc-300 text-zinc-800 will-change-transform"
              >
                <span className="text-[9px] md:text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1">
                  {stat.label}
                </span>
                <span className="text-2xl md:text-5xl font-black text-zinc-800 leading-none">
                  {stat.value}
                </span>
                <span className="text-[10px] text-zinc-500 mt-2 tracking-wider">
                  {stat.sub}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* The Road */}
        <div className="h-48 md:h-72 bg-zinc-900 w-full relative flex items-center justify-center top-10 shadow-2xl">
          {/* Realistic dashed center line */}
          <div className="w-full h-1 border-t-[3px] border-dashed border-zinc-500 absolute"></div>
          
          {/* The Car */}
          <img 
            ref={carRef}
            src="/car.png" 
            alt="Hero Car" 
            // Positioned off-screen left, rotated 90deg, vertically centered using negative margins to account for rotated bounding box
            className="absolute -left-32 md:-left-64 top-1/2 -mt-24 md:-mt-40 w-48 md:w-80 rotate-90 drop-shadow-2xl object-contain will-change-transform z-20"
          />
        </div>

      </div>
    </div>
  );
};

export default HeroSection;
