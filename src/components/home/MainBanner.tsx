import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const banners = [
  {
    id: 1,
    imageUrl: 'https://ext.same-assets.com/1481466196/2867313582.png',
    altText: '비바샘 메인 배너 1',
    link: '#'
  },
  {
    id: 2,
    imageUrl: 'https://ext.same-assets.com/2056241662/608899458.png',
    altText: '비바샘 메인 배너 2',
    link: '#'
  },
  {
    id: 3,
    imageUrl: 'https://ext.same-assets.com/3370635451/2179272793.jpeg',
    altText: '비바샘 메인 배너 3',
    link: '#'
  }
];

const MainBanner = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  // Auto-rotate banners
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Handle manual navigation
  const goToBanner = (index: number) => {
    setCurrentBanner(index);
  };

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="relative w-full h-[380px] overflow-hidden">
      {/* Banners */}
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentBanner * 100}%)` }}
      >
        {banners.map((banner, index) => (
          <div key={banner.id} className="w-full h-full flex-shrink-0">
            <a href={banner.link} className="block w-full h-full">
              <div className="relative w-full h-full">
                <Image
                  src={banner.imageUrl}
                  alt={banner.altText}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToBanner(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentBanner === index ? 'bg-white' : 'bg-gray-400 bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Prev/Next Buttons */}
      <button
        onClick={prevBanner}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black bg-opacity-30 flex items-center justify-center text-white hover:bg-opacity-50 transition-opacity"
        aria-label="Previous banner"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <button
        onClick={nextBanner}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black bg-opacity-30 flex items-center justify-center text-white hover:bg-opacity-50 transition-opacity"
        aria-label="Next banner"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
};

export default MainBanner;
