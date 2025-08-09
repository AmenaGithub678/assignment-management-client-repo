import React from 'react';
import { FaUsers, FaTasks, FaStar, FaGlobe } from "react-icons/fa";
const AboutFeaturesSection = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Learn, Collaborate & Grow Together with Friends
          </h2>
          <p className="text-gray-600 mb-6">
            On our platform, every registered user is a friend of the others.
            Create assignments together, complete them, and grade each other’s work.
            Make learning fun and interactive with group study sessions.
          </p>

          {/* Image */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b"
              alt="Group study"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>

        {/* Right Features */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
          {/* Feature 1 */}
          <div className="flex items-start gap-4 p-4 border rounded-lg shadow-sm hover:shadow-md transition">
            <div className="p-3 bg-green-100 rounded-lg text-green-600 text-xl">
              <FaUsers />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Learn with Friends</h3>
              <p className="text-gray-600 text-sm">
                Study in a group, share knowledge, and grow together.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-4 p-4 border rounded-lg shadow-sm hover:shadow-md transition">
            <div className="p-3 bg-blue-100 rounded-lg text-blue-600 text-xl">
              <FaTasks />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Unlimited Assignments</h3>
              <p className="text-gray-600 text-sm">
                Create as many assignments as you like, anytime.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start gap-4 p-4 border rounded-lg shadow-sm hover:shadow-md transition">
            <div className="p-3 bg-yellow-100 rounded-lg text-yellow-600 text-xl">
              <FaStar />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Peer Grading</h3>
              <p className="text-gray-600 text-sm">
                Let your friends grade your work and give feedback.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex items-start gap-4 p-4 border rounded-lg shadow-sm hover:shadow-md transition">
            <div className="p-3 bg-red-100 rounded-lg text-red-600 text-xl">
              <FaGlobe />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Global Access</h3>
              <p className="text-gray-600 text-sm">
                Join from anywhere in the world and start learning.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
    );
};

export default AboutFeaturesSection;