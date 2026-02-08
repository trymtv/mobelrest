import { useState, useEffect } from "react";

const images = [
  "/images/slideshow/round-table-1.jpg",
  "/images/slideshow/round-table-2.jpg",
  "/images/slideshow/table-1.jpg",
  "/images/slideshow/table-2.jpg",
  "/images/slideshow/chairs-1.jpg",
  "/images/slideshow/chairs-2.jpg",
  "/images/slideshow/busts.jpg",
];

function ImageSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Changes image every 4 seconds
    return () => clearInterval(timer);
  }, []);

  return (
      <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg shadow-lg">
        {images.map((img, index) => (
            <img
                key={img}
                src={img}
                alt={`Restaureringsarbeid ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
            />
        ))}
      </div>
  );
}

export function Welcome() {
  return (
      <main className="container mx-auto px-4 pb-20 pt-12">
        <div className="flex flex-col md:flex-row gap-12 items-center lg:justify-center">
          {/* Left Column: Slideshow */}
          <div className="w-full md:w-1/2">
            <ImageSlideshow />
          </div>

          <div className="w-full md:w-1/2 lg:max-w-md">
            <h1 className="text-3xl font-serif font-bold mb-6 text-stone-800 uppercase tracking-wide">
              Restaurering av møbler
            </h1>
            <p className="text-lg font-medium mb-6 text-stone-600">
              Min oppgave er å bevare møbler og kulturgjenstander for kommende generasjoner.
            </p>
            <div className="space-y-4 text-stone-700 leading-relaxed">
              <p>
                Restaurering bør gjøres med respekt for møblene og gjenstandenes historiske og etiske verdi.
                De bør bevares i en så original tilstand som mulig.
              </p>
              <p>
                I samarbeid med kundene utformes en restaureringsplan over hvordan arbeidet skal utføres.
                Eksempler på utførte restaureringsarbeider finnes i bildegalleriet.
              </p>
            </div>
          </div>
        </div>
      </main>
  );
}