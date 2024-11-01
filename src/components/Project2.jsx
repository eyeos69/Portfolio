import React from 'react'
import form1 from '../assets/1form1.png'
import form2 from '../assets/1form2.png'
import form3 from '../assets/1form3.png'
import form4 from '../assets/1form4.png'
import form5 from '../assets/1form5.png'

const Project2 = () => {
  return (
    <><div className='pt-10 pb-10 sm:pt-10 sm:pb-10 lg:pb-1 '>
      <div class="py-10 mb-1 overflow-hidden md:pt-0 sm:pt-10 2xl:pt-10 relative bg-black/90 max-w-[1300px] mx-auto rounded-xl">
        <div className='text-white max-w-[1200px] mx-auto my-12' id="project1">
          <div className='md:grid md:grid-cols-2 sm:py-16'>

            <div className="mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0">
              <div className="my-auto mx-6">
              <h1 className="text-4xl font-bold mb-4 primary-color">Project 2</h1>
                <h2 className="text-3xl font-bold mb-4 primary-color">Takoyadon Inventory Management System</h2>
                <p className="text-base lg:text-lg">
                  Generally, The system aims to design and develop an Inventory Management System of Takoyadon RFC Molino II
                  Specifically, it aims to:
                  Develop a digitalized system where employees can monitor the product received, stocks in an easier way.
                  Develop a system that can accommodate the growth of the Takoyadon business, considering potential expansions and increased inventory demands.
                  Develop the system to be accessible and user-friendly for Takoyadon staff involved in inventory management, minimizing training requirements and enhancing usability.

                  Overall, the purpose of the system is to make Takoyadon’s inventory system digital, efficient and easy-to-use.

                  System was made in Microsoft Visual Studio, C#.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>


    </div><div className='pt-10 pb-10 sm:pt-10 sm:pb-10 lg:pb-1 '>
        <div class="py-10 mb-1 overflow-hidden md:pt-0 sm:pt-10 2xl:pt-10 relative bg-black/90 max-w-[1300px] mx-auto rounded-xl">
          <div className='text-white max-w-[1200px] mx-auto my-12' id="project1">
            <div className='md:grid md:grid-cols-2 sm:py-16'>

              <div className="mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0">
                <div className="my-auto mx-6">
                <h2 className="text-3xl font-bold mb-4 primary-color">Form/Window 1</h2>
                  <p className="text-base lg:text-lg">
                  This is form no. 1 and this is where the user will log in or click to go to register.

                  Added feature: If the username is “admin” the user will be directed to the admin’s homepage where they can add, update and delete records. Though the username must be “admin” the password can be whatever the user wants.
                  </p>
                </div>
              </div>

              <img className="mx-auto rounded-3xl py-8 md:py-0" src={form1} width={500} height={500}></img>

            </div>
          </div>
        </div>
      </div>

      <div className='pt-10 pb-10 sm:pt-10 sm:pb-10 lg:pb-1 '>
        <div class="py-10 mb-1 overflow-hidden md:pt-0 sm:pt-10 2xl:pt-10 relative bg-black/90 max-w-[1300px] mx-auto rounded-xl">
          <div className='text-white max-w-[1200px] mx-auto my-12' id="project1">
            <div className='md:grid md:grid-cols-2 sm:py-16'>

              <div className="mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0">
                <div className="my-auto mx-6">
                <h2 className="text-3xl font-bold mb-4 primary-color">Form/Window 2</h2>
                  <p className="text-base lg:text-lg">
                  This is form no. 2 and this is where the user will register new info/credentials to be inputted in the users database.
                  </p>
                </div>
              </div>

              <img className="mx-auto rounded-3xl py-8 md:py-0" src={form2} width={500} height={500}></img>

            </div>
          </div>
        </div>
      </div>

      <div className='pt-10 pb-10 sm:pt-10 sm:pb-10 lg:pb-1 '>
        <div class="py-10 mb-1 overflow-hidden md:pt-0 sm:pt-10 2xl:pt-10 relative bg-black/90 max-w-[1300px] mx-auto rounded-xl">
          <div className='text-white max-w-[1200px] mx-auto my-12' id="project1">
            <div className='md:grid md:grid-cols-2 sm:py-16'>

              <div className="mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0">
                <div className="my-auto mx-6">
                <h2 className="text-3xl font-bold mb-4 primary-color">Form/Window 3</h2>
                  <p className="text-base lg:text-lg">
                  This is form no. 3 and this is where the user will be able to view, add, update and delete student records and also subject information.

                  This is the admin’s homepage.
                  </p>
                </div>
              </div>

              <img className="mx-auto rounded-3xl py-8 md:py-0" src={form3} width={600} height={600}></img>

            </div>
          </div>
        </div>
      </div>

      <div className='pt-10 pb-10 sm:pt-10 sm:pb-10 lg:pb-1 '>
        <div class="py-10 mb-1 overflow-hidden md:pt-0 sm:pt-10 2xl:pt-10 relative bg-black/90 max-w-[1300px] mx-auto rounded-xl">
          <div className='text-white max-w-[1200px] mx-auto my-12' id="project1">
            <div className='md:grid md:grid-cols-2 sm:py-16'>

              <div className="mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0">
                <div className="my-auto mx-6">
                <h2 className="text-3xl font-bold mb-4 primary-color">Form/Window 4</h2>
                  <p className="text-base lg:text-lg">
                  This is form no. 4 and it is the student’s form. In this form, users can only view records. Unlike in the admin’s form/homepage where they can manipulate the records.

                  This is the added form to this system specifically only for non-admin users.
                  </p>
                </div>
              </div>

              <img className="mx-auto rounded-3xl py-8 md:py-0" src={form4} width={500} height={500}></img>

            </div>
          </div>
        </div>
      </div>

      <div className='pt-10 pb-10 sm:pt-10 sm:pb-10 lg:pb-1 '>
        <div class="py-10 mb-1 overflow-hidden md:pt-0 sm:pt-10 2xl:pt-10 relative bg-black/90 max-w-[1300px] mx-auto rounded-xl">
          <div className='text-white max-w-[1200px] mx-auto my-12' id="project1">
            <div className='md:grid md:grid-cols-2 sm:py-16'>

              <div className="mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0">
                <div className="my-auto mx-6">
                <h2 className="text-3xl font-bold mb-4 primary-color">Form/Window 5</h2>
                  <p className="text-base lg:text-lg">
                  This is form no. 5 and this is the last form where the user will confirm to exit the application or continue using it.

                  If the user clicks no it will just go back to using the application. If the user clicked, then the application will close and return to the log in form.
                  </p>
                </div>
              </div>

              <img className="mx-auto rounded-3xl py-8 md:py-0" src={form5} width={500} height={500}></img>

            </div>
          </div>
        </div>
      </div>

      <div className='pt-10 pb-10 sm:pt-10 sm:pb-10 lg:pb-1 '>
        <div class="py-10 mb-1 overflow-hidden md:pt-0 sm:pt-10 2xl:pt-10 relative bg-black/90 max-w-[1300px] mx-auto rounded-xl">
          <div className='text-white max-w-[1200px] mx-auto my-12' id="project1">
            <div className='md:grid md:grid-cols-2 sm:py-16'>

              <div className="mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0">
                <div className="my-auto mx-6">
                <h2 className="text-3xl font-bold mb-4 primary-color">System Demo</h2>
                  <p className="text-base lg:text-lg">
                  Attached below is a video recording, demonstrating on how to use the inventory management system.
                  </p>
                </div>
              </div>

              <iframe width="560" height="315" src="https://www.youtube.com/embed/ThK3dLr4aoI?si=vIPzzJJQJWfFGTq8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            </div>
          </div>
        </div>
      </div>
      
      </>
  )
}

export default Project2
