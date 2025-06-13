import React from 'react';

const Project3 = () => {
  return (
    <>
      {/* ✅ Project Description Section */}
      <div className='pt-10 pb-10 sm:pt-10 sm:pb-10 lg:pb-1'>
        <div className="py-10 mb-1 overflow-hidden md:pt-0 sm:pt-10 2xl:pt-10 relative bg-black/90 max-w-[1300px] mx-auto rounded-xl">
          <div className='text-white max-w-[1200px] mx-auto my-12' id="project3">
            <div className='md:grid md:grid-cols-1 sm:py-16'>
              <div className="mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0">
                <div className="my-auto mx-6">
                  <h1 className="text-4xl font-bold mb-4 primary-color">Godot Game</h1>
                  <p className="text-base lg:text-lg mb-4">
                    This game is a midterm project for the subject COSC 106: Introduction to Game Development wherein we were tasked to make our own simple game using the Godot game engine.
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
                  <h2 className="text-3xl font-bold mb-4 primary-color">Game Demo</h2>
                  <p className="text-base lg:text-lg mb-4">
                    Below is a video demo showcasing how the game is played.
                  </p>
                  <div
                    className="mx-auto rounded-3xl relative overflow-hidden"
                    style={{ maxWidth: '100%', width: '800px', paddingTop: '42.85%' }} // 21:9 aspect ratio
                    >
                    <iframe
                        className="absolute top-0 left-0 w-full h-full rounded-3xl"
                        src="https://www.youtube.com/embed/c9AwayBI6ZY?si=22zNkt5Sv6BPEXuB"
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

export default Project3;
