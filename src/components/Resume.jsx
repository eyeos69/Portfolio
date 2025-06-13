import React from 'react'

const Resume = () => {
  return (
    <div className='pt-10 pb-10 sm:pt-10 sm:pb-10 lg:pb-1'>
      <div className="py-10 mb-1 overflow-hidden md:pt-0 sm:pt-10 2xl:pt-10 relative bg-black/90 max-w-[1300px] mx-auto rounded-xl">
        <div className='text-white max-w-[1200px] mx-auto my-12' id="about">
          <div className='md:grid md:grid-cols-2 sm:py-16'>

            {/* Text Section */}
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0">
              <div className="my-auto mx-6">
                <h2 className="text-4xl font-bold mb-4 primary-color">Resume</h2>
                
                <pre className="whitespace-pre-wrap text-sm lg:text-base mb-6">
{`📄 JOHN ADRIAN V. ALVAREZ
848 Tramo Street, Daniel Fajardo, Las Piñas City
📱 0927 824 0038 | 📧 jjaannnnoooooo@gmail.com

🎯 Career Objective
To work in a challenging position in an organization where my skills can be utilized for the benefit of the company and further upgrade my knowledge with a team of professionals.

🎓 Educational Background
Tertiary
Cavite State University – Bacoor Campus
Bachelor of Science in Computer Science
2022 – Present

Senior High School
St. Rose of Lima School – Las Piñas
2020 – 2022

Junior High School
Las Piñas National High School (Main)
2016 – 2020

Primary
Manuyo Elementary School
2010 – 2016

💼 Job Experience
Service Crew – McDonald's
Manila Times Village, Las Piñas City
August 2023 – May 2024
- Provided excellent customer service in a high-volume environment
- Handled food preparation, cashier duties, and drive-thru operations
- Maintained cleanliness and compliance with food safety standards

👤 Personal Information
Age: 20 years old
Date of Birth: September 6, 2004
Place of Birth: Las Piñas City
Gender: Male
Civil Status: Single
Height: 5’6”
Weight: 103 lbs
Nationality: Filipino
Languages Spoken: Filipino, English`}
                </pre>

                <a href={`${process.env.PUBLIC_URL}/resume.pdf`} download className="inline-block px-6 py-3 text-black font-extrabold bg-primary-color hover:bg-primary-color rounded-lg transition duration-200">
                  Download CV
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
