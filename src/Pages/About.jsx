import React from 'react';
import AboutSec from '../Componets/AboutSec';

const About = () => {

    return (
   <div className='mx-auto'>
        <AboutSec></AboutSec>

<section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  {/* Section Title */}
  <div className="max-w-xl mb-10 md:mx-auto text-center">
    <h2 className="text-4xl font-bold" style={{ color: '#AD56C4' }}>
      Latest News & Study Blog
    </h2>
    <p className="mt-4 text-lg" style={{ color: '#f000b8' }}>
      Stay updated with the latest tips, assignments, and group-study highlights from our online community. Explore articles, success stories, and guides to help you collaborate, learn, and grow with your friends.
    </p>
  </div>

  {/* Grid */}
  <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
    
    {/* Blog Card 1 */}
    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-lg">
      <img src="https://i.ibb.co.com/xKRsY930/bookshelf-413705-1280.jpg" className="object-cover w-full h-48" alt="" />
      <div className="p-5 border border-t-0">
        <p className="mb-2 text-xs font-semibold tracking-wide uppercase" style={{ color: '#AD56C4' }}>
          Assignments
        </p>
        <a href="#" className="inline-block mb-3 text-2xl font-bold leading-5 text-gray-900 transition-colors duration-200 hover:text-pink-600">
          Creating Group Projects That Inspire
        </a>
        <p className="mb-4 text-gray-700">
          Learn how to design collaborative assignments that encourage teamwork and problem-solving among your peers.
        </p>
        <div className="flex items-center">
          <p className="text-sm text-gray-600">October 13, 2025</p>
        </div>
      </div>
    </div>

    {/* Blog Card 2 */}
    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-lg">
      <img src="https://i.ibb.co.com/8L7sXmKj/people-2557399-1280.jpg" className="object-cover w-full h-48" alt="" />
      <div className="p-5 border border-t-0">
        <p className="mb-2 text-xs font-semibold tracking-wide uppercase" style={{ color: '#AD56C4' }}>
          Study Tips
        </p>
        <a href="#" className="inline-block mb-3 text-2xl font-bold leading-5 text-gray-900 transition-colors duration-200 hover:text-pink-600">
          5 Proven Study Methods for Group Learning
        </a>
        <p className="mb-4 text-gray-700">
          Discover effective ways to stay engaged and retain knowledge during collaborative study sessions.
        </p>
        <div className="flex items-center">
          <p className="text-sm text-gray-600">October 13, 2025</p>
        </div>
      </div>
    </div>

    {/* Blog Card 3 */}
    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-lg">
      <img src="https://i.ibb.co.com/Kcn71xzw/student-849825-1280.jpg" className="object-cover w-full h-48" alt="" />
      <div className="p-5 border border-t-0">
        <p className="mb-2 text-xs font-semibold tracking-wide uppercase" style={{ color: '#AD56C4' }}>
          Community
        </p>
        <a href="#" className="inline-block mb-3 text-2xl font-bold leading-5 text-gray-900 transition-colors duration-200 hover:text-pink-600">
          Building a Supportive Study Network
        </a>
        <p className="mb-4 text-gray-700">
          Tips on connecting with peers and creating an encouraging learning environment for everyone.
        </p>
        <div className="flex items-center">
          <p className="text-sm text-gray-600">October 13, 2025</p>
        </div>
      </div>
    </div>

  </div>
</section>




        <div className="mx-auto sm:max-w-xl lg:max-w-screen-xl  lg:px-8 lg:py-20">
  {/* Section Heading */}
  <div className=" mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-[#AD56C4] uppercase rounded-full bg-teal-accent-400">
      Our Instructors
    </p>
    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-[#f000b8] sm:text-4xl md:mx-auto">
      Meet Our Talented Team
    </h2>
    <p className="text-base text-[#AD56C4] md:text-lg">
      Professionals dedicated to sharing knowledge and inspiring growth.
    </p>
  </div>

  {/* Cards Grid */}
  <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
    {[
      {
        name: "Oliver Aguilerra",
        role: "Teacher",
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
        facebook: "#",
        linkedin: "#",
        github: "#"
      },
      {
        name: "Marta Clermont",
        role: "Researcher",
        img: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg",
        facebook: "#",
        linkedin: "#",
        github: "#"
      },
      {
        name: "Anthony Geek",
        role: "Developer",
        img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
        facebook: "#",
        linkedin: "#",
        github: "#"
      },
      {
        name: "Alice Melbourne",
        role: "Data Analyst",
        img: "https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg",
        facebook: "#",
        linkedin: "#",
        github: "#"
      },
      {
        name: "Martin Garix",
        role: "UI/UX Designer",
        img: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg",
        facebook: "#",
        linkedin: "#",
        github: "#"
      },
      {
        name: "Andrew Miles",
        role: "Project Manager",
        img: "https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg",
        facebook: "#",
        linkedin: "#",
        github: "#"
      },
      {
        name: "Sophie Turner",
        role: "Lecturer",
        img: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg",
        facebook: "#",
        linkedin: "#",
        github: "#"
      },
      {
        name: "James Parker",
        role: "Research Scientist",
        img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
        facebook: "#",
        linkedin: "#",
        github: "#"
      }
    ].map((person, idx) => (
      <div key={idx} className="relative overflow-hidden transition duration-300 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
        <img className="object-cover w-full h-56 md:h-64 xl:h-80" src={person.img} alt={person.name} />
        <div className="absolute inset-0 flex flex-col justify-center items-center px-5 py-4 text-center transition-opacity duration-300 bg-[#AD56C4] bg-opacity-75 opacity-0 hover:opacity-100">
          <p className="mb-1 text-lg font-bold text-gray-100">{person.name}</p>
          <p className="mb-4 text-xs text-gray-100">{person.role}</p>
          <div className="flex items-center justify-center space-x-3">
            {/* Facebook */}
            <a href={person.facebook} className="text-white transition-colors duration-300 hover:text-blue-400">
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788
                c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22
                c1.105,0,2-0.895,2-2V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href={person.linkedin} className="text-white transition-colors duration-300 hover:text-blue-400">
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-5">
                <path d="M22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 
                0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 
                7.54c-1.14 0-2.06-.92-2.06-2.05s.92-2.05 2.06-2.05c1.14 0 2.06.92 2.06 2.05s-.92 
                2.05-2.06 2.05zM20.45 20.45h-3.55v-5.57c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.15 
                1.45-2.15 2.95v5.67h-3.55V9h3.41v1.56h.05c.48-.91 1.66-1.86 3.42-1.86 
                3.66 0 4.34 2.41 4.34 5.54v6.21z"/>
              </svg>
            </a>
            {/* GitHub */}
            <a href={person.github} className="text-white transition-colors duration-300 hover:text-gray-400">
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-5">
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.94.58.1.79-.25.79-.56
                0-.28-.01-1.02-.02-2-3.2.7-3.87-1.54-3.87-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72
                1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.26 3.39.96.1-.76.41-1.26.75-1.55
                -2.55-.29-5.23-1.28-5.23-5.72 0-1.26.45-2.3 1.19-3.11-.12-.29-.52-1.46.11-3.04 0 0
                .97-.31 3.18 1.18a11.07 11.07 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39
                2.2-1.49 3.18-1.18 3.18-1.18.63 1.58.23 2.75.11 3.04.74.81 
                1.19 1.85 1.19 3.11 0 4.45-2.69 5.43-5.25 5.72.42.36.8 1.09.8 
                2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.66.8.55C20.71 21.39 24 17.09 24 12
                24 5.73 18.77.5 12 .5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
   </div>
   

  );
};
    

export default About;