import React from 'react'
const Project5 = () => {
  return (
    <> {/* ✅ Project Description Section */}
    <div className='pt-10 pb-10 sm:pt-10 sm:pb-10 lg:pb-1'>
      <div className="py-10 mb-1 overflow-hidden md:pt-0 sm:pt-10 2xl:pt-10 relative bg-black/90 max-w-[1300px] mx-auto rounded-xl">
        <div className='text-white max-w-[1200px] mx-auto my-12' id="project3">
          <div className='md:grid md:grid-cols-1 sm:py-16'>
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0">
              <div className="my-auto mx-6">
                <h1 className="text-4xl font-bold mb-4 primary-color">Device Disassembly</h1>
                <p className="text-base lg:text-lg mb-4">
                  This project is a final project requirement for the subject COSC80: Operating Systems wherein we were tasked to disassemble and name/label every part of a mobile unit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* ✅ Embedded YouTube Demo Section */}
    <div className='pt-10 pb-10 sm:pt-10 sm:pb-10 lg:pb-1'>
        <div className="py-10 mb-1 overflow-hidden md:pt-0 sm:pt-10 2xl:pt-10 relative bg-black/90 max-w-[1300px] mx-auto rounded-xl">
          <div className='text-white max-w-[1200px] mx-auto my-12' id="project3-demo">
            <div className='md:grid md:grid-cols-1 sm:py-16'>
              <div className="mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0">
                <div className="my-auto mx-6">
                  <h2 className="text-3xl font-bold mb-4 primary-color">Disassembly Demo</h2>
                  <p className="text-base lg:text-lg mb-4">
                    Below is a video demo showcasing how we disassembled the mobile phone.
                  </p>
                  <div
                    className="mx-auto rounded-3xl relative overflow-hidden"
                    style={{ maxWidth: '100%', width: '800px', paddingTop: '42.85%' }} // 21:9 aspect ratio
                    >
                    <iframe
                        className="absolute top-0 left-0 w-full h-full rounded-3xl"
                        src="https://www.youtube.com/embed/li_aVM63u8Y?si=TFQgJlPbsWcGxxJQ"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project5
