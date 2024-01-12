import { useCallback, useEffect, useRef, useState } from "react";
import { type Slide } from "./model";
import 'animate.css';

export default function SliderBuild({ slides }: { slides: Slide[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [opacityClass, setOpacityClass] = useState(true);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const goToForward = useCallback(() => {
    setOpacityClass(false); //sets opacity class to 0
    setTimeout(() => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
      setTimeout(() => {
        setOpacityClass(true); //sets opacity class to 100
      }, 500);
      
    }, 2000);
  }, [currentIndex, slides]);

  // Used by dots
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  }

  const timerRef: { current: NodeJS.Timeout | null } = useRef(null);

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      goToForward();
    }, 7000);

    return () => clearTimeout(timerRef.current as NodeJS.Timeout);
  }, [goToForward]);

  return (
    <>
      {/* <div className="w-screen h-screen relative">
        <img className="absolute object-cover h-full w-full" src={slides[currentIndex].url} alt="" />
      </div> */}

      <div className="relative flex h-screen w-screen flex-col justify-center items-center overflow-hidden">
        <img
          className={`absolute w-full h-full object-cover transition duration-[2000ms] ease-in-out ${opacityClass ? 'opacity-100 scale-100' : 'opacity-0 scale-125'}`}
          src={slides[currentIndex].url}            
          alt="Paisaje"
        />        
        <div className="absolute w-full h-full bg-gradient-to-t from-color-800 to-transparent">

        </div>
        <div className={`absolute max-w-md md:max-w-2xl bottom-8 md:left-10 py-3 px-6 rounded-lg transition duration-[2000ms] ease-in-out ${opacityClass ? 'opacity-100 animate__animated animate__fadeInLeft' : 'opacity-0 animate__animated animate__fadeOutRight'}`}>
          <h2 className="text-5xl md:text-7xl font-thin text-white">{slides[currentIndex].title}</h2>
          <h2 className="text-5xl md:text-7xl font-black text-white">{slides[currentIndex].subtitle}</h2>
          <p className="text-2xl mt-4 text-color-200">{slides[currentIndex].description}</p>
        </div>
      </div>
    </>
  )
}