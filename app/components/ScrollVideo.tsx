'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;

    if (!video || !container) return;

    let ctx = gsap.context(() => {
      const initAnimation = () => {
        // Use a proxy object to hold the progress value
        // This decouples the scroll position from the video.currentTime setting
        let videoProgress = { value: 0 };
        
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "bottom bottom", 
            scrub: 1, // Add a little smoothness (1s) to the scroll value itself
            markers: false, 
          }
        });

        // Tween the proxy value instead of the video directly
        tl.to(videoProgress, {
          value: video.duration || 1,
          ease: "none",
          onUpdate: () => {
            // "Smart Scrubbing": Only update currentTime if the video isn't currently seeking.
            // This prevents choking the decoder with too many requests.
            // We also allow a small threshold of difference to ensure we eventually catch up.
            if (video) {
                 // Fast seeking can cause the video to get stuck efficiently, 
                 // catching up only when the user stops scrolling is a valid strategy for non-intra frames.
                 if (!video.seeking) {
                    video.currentTime = videoProgress.value;
                 } else {
                    // Optional: If we are drifting too far, we might want to force it, 
                    // but usually waiting is smoother for heavy videos.
                 }
            }
          }
        });
      };

      if (video.readyState >= 1) {
        initAnimation();
      } else {
        video.addEventListener("loadedmetadata", initAnimation);
      }

      // iOS touch-to-activate logic
      const handleTouch = () => {
        video.play();
        video.pause();
        document.removeEventListener("touchstart", handleTouch);
      };
      document.addEventListener("touchstart", handleTouch, { once: true });

    }, container);

    return () => ctx.revert();
  }, []);

  return (
    // Outer container (TRACK) - 500vh to ensure long scroll distance
    <div ref={containerRef} className="relative w-full" style={{ height: '500vh' }}>
      {/* Inner container (VIEWPORT) - sticky to stay in view while scrolling the track */}
      <div 
        className="sticky top-0 w-full h-screen bg-black overflow-hidden"
      >
        <video
          id="video-scroll"
          ref={videoRef}
          src="/cbeans.mp4"
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <h2 className="text-white text-4xl md:text-6xl font-bold mix-blend-difference">
           Cocobeans
          </h2>
        </div>
      </div>
    </div>
  );
}
