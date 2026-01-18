import { useState, useEffect } from "react";

const images = [
  "https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?q=80&w=800&auto=format&fit=crop",
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
// Replace this with the actual address of the workshop
  const workshopAddress = "Munkerudkleiva 9, 1164 Oslo";
  const encodedAddress = encodeURIComponent(workshopAddress);
  // Note: For a quick start without an API key, you can use the iframe share link from Google Maps:
  const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2929.5118416562327!2d10.81540237765975!3d59.85841066855792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464168b4dcc99eef%3A0xa754416cae8eb10e!2sMunkerudkleiva%209%2C%201164%20Oslo!5e1!3m2!1sen!2sno!4v1768059171614!5m2!1sen!2sno"
  return (
      <main className="container mx-auto px-4 py-12 space-y-30">
        <div className="flex flex-col md:flex-row gap-12 items-center lg:justify-center">
          {/* Left Column: Slideshow */}
          <div className="w-full md:w-1/2">
            <ImageSlideshow />
          </div>

          {/* Right Column: Text Content */}
          <div className="w-full md:w-1/2 lg:max-w-md">
            <h1 className="text-3xl font-serif font-bold mb-4 text-stone-800">
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
        {/* Bottom Section: Contact & Map */}
        <div className="flex flex-col md:flex-row-reverse gap-12 items-center lg:justify-center">
          {/* Right Column: Map (Visual focus) */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg border border-stone-200">
              <iframe
                  title="Workshop Location"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(0.1) contrast(1.05)' }}
                  src={embedUrl}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Left Column: Text Content */}
          <div className="w-full md:w-1/2 lg:max-w-md">
            <h2 className="text-3xl font-serif font-bold mb-4 text-stone-800">
              Besøk verkstedet
            </h2>
            <p className="text-lg font-medium mb-6 text-stone-600">
              Du finner meg i lyse lokaler sentralt plassert.
            </p>
            <div className="space-y-4 text-stone-700 leading-relaxed mb-8">
              <p>
                  Verkstedet er åpent fra mandag til fredag kl. 08:30 til 16:30, eller etter avtale. Ta gjerne <a href={"/kontakt"}><u>kontakt</u></a> for å avtale et tidspunkt for befaring av dine møbler.
              </p>
              <div className="pt-2">
                <p className="font-bold text-stone-800">Adresse:</p>
                <p>{workshopAddress}</p>
              </div>
            </div>

            <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-stone-800 text-stone-50 px-6 py-3 rounded-md font-medium hover:bg-stone-700 transition-colors shadow-sm"
            >
              Få veibeskrivelse
            </a>
          </div>
        </div>
      </main>
  );
}