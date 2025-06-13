import React from 'react';

// Import from ../assets/ps/
import docmartens from '../assets/ps/docmartens.png';
import eyeosLogo from '../assets/ps/eyeos logo.png';
import loonie from '../assets/ps/loonie.png';
import makeSomeNoiseBg from '../assets/ps/Make Some Noise Bg.png';
import graffiti2Lines from '../assets/ps/make some noise graffiti 2 lines.png';
import graffiti1 from '../assets/ps/make some noise graffiti.png';
import makeSomeNoise from '../assets/ps/make some noise.png';
import msnGraffiti from '../assets/ps/msn graffiti.png';
import msn from '../assets/ps/msn.png';

const designs = [
  docmartens,
  eyeosLogo,
  loonie,
  makeSomeNoiseBg,
  graffiti2Lines,
  graffiti1,
  makeSomeNoise,
  msnGraffiti,
  msn
];

const Project4 = () => {
  return (
    <div className='pt-10 pb-10 sm:pt-10 sm:pb-10 lg:pb-1'>
      <div className="py-10 mb-1 overflow-hidden relative bg-black/90 max-w-[1300px] mx-auto rounded-xl">
        <div className='text-white max-w-[1200px] mx-auto my-12'>

          {/* Header Section */}
          <div className='text-left mx-6 mb-8'>
            <h2 className="text-3xl font-bold mb-4 primary-color">Graphic Designs</h2>
            <p className="text-base lg:text-lg">
              These are just SOME of the graphic design works that I have done (Some of my favorites).
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
            {designs.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Design ${index + 1}`}
                className="rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
              />
            ))}
          </div>

          {/* Footer Section */}
          <div className="text-center mt-12 px-6">
            <p className="text-lg mb-4">
              Wanna check out my recent work? It is a digital zine for our <strong>GNED09: Rizal Life and Works</strong> subject.
            </p>
            <a href={`${process.env.PUBLIC_URL}/ZINE_ALVAREZ-JOHN-ADRIAN_3-4.pdf`} download className="inline-block bg-primary-color text-black font-bold py-3 px-6 rounded-xl hover:bg-gray-200 transition duration-300">
              Download Zine
            </a>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Project4;
