import { useEffect, useState } from "react";
import SLIDES from "../sources/slides.json";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () =>setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {SLIDES.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <img
            src={slide.img}
            alt={slide.title}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-2xl">
                <h2 className="text-blue-400 font-bold tracking-wider uppercase text-sm mb-2">
                  {slide.title}
                </h2>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                  {slide.subtitle}
                </h1>
                <p className="text-lg text-gray-200 mb-8 line-clamp-3">
                  {slide.desc}
                </p>
                <button className="bg-blue-600 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-blue-500 transition-colors inline-flex items-center gap-2 shadow-lg hover:shadow-blue-600/30">
                  Read more <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slider Controls */}
      <div className="absolute z-30 bottom-8 right-8 flex gap-3">
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md flex items-center justify-center text-white transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md flex items-center justify-center text-white transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </>
  );
}

export default Slider;
