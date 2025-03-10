
import React, { useEffect, useState } from "react";

const SplashScreen = () => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    // Fade in animation
    setTimeout(() => {
      setOpacity(1);
    }, 300);

    // Start fade out animation after 4.5 seconds
    const fadeOutTimer = setTimeout(() => {
      setOpacity(0);
    }, 4500);

    return () => clearTimeout(fadeOutTimer);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-violet-500 to-purple-800 z-50">
      <div 
        className="text-center transition-opacity duration-1000"
        style={{ opacity }}
      >
        <h1 className="text-6xl font-bold text-white mb-4 animate-fade-up">
          AK Project
        </h1>
        <p className="text-2xl text-white/90 animate-fade-up" style={{ animationDelay: "300ms" }}>
          Представляет
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;
