import React, { useState } from "react";

const resourcesData = [
  { id: 1, title: "React Basics Tutorial", category: "Frontend", type: "Video", link: "https://www.youtube.com/watch?v=Ke90Tje7VS0", description: "Learn the fundamentals of React, including components, state, and props." },
  { id: 2, title: "Node.js Crash Course", category: "Backend", type: "Video", link: "https://www.youtube.com/watch?v=fBNz5xF-Kx4", description: "A beginner-friendly guide to building backend APIs with Node.js and Express." },
  { id: 3, title: "CSS Grid Layout Guide", category: "Design", type: "PDF", link: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout", description: "Comprehensive guide to mastering CSS Grid for responsive layouts." },
  { id: 4, title: "JavaScript ES6+ Cheatsheet", category: "Frontend", type: "PDF", link: "https://devhints.io/es6", description: "A quick reference for ES6+ syntax and features." },
  { id: 5, title: "Database Design Principles", category: "Backend", type: "Article", link: "https://www.geeksforgeeks.org/database-design-process/", description: "Best practices for designing scalable and efficient databases." },
  { id: 6, title: "HTML Basics", category: "Basic", type: "Article", link: "https://developer.mozilla.org/en-US/docs/Web/HTML", description: "The foundation of web development: HTML basics." },
  { id: 7, title: "CSS Flexbox Guide", category: "Design", type: "Article", link: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/", description: "Master the Flexbox layout module with practical examples." },
  { id: 8, title: "Authentication with Firebase", category: "Authentication", type: "Video", link: "https://www.youtube.com/watch?v=PKwu15ldZ7k", description: "Learn to implement Firebase Authentication in React." },
  { id: 9, title: "JWT Authentication Explained", category: "JWT", type: "Article", link: "https://jwt.io/introduction", description: "Understand JSON Web Tokens and how to use them for secure APIs." },
  { id: 10, title: "React Router Crash Course", category: "Frontend", type: "Video", link: "https://www.youtube.com/watch?v=Law7wfdg_ls", description: "Navigate your React apps with ease using React Router." },
  { id: 11, title: "Express.js Fundamentals", category: "Backend", type: "Video", link: "https://www.youtube.com/watch?v=L72fhGm1tfE", description: "Learn how to build server-side apps with Express.js." },
  { id: 12, title: "JWT Authentication in Node.js", category: "JWT", type: "Video", link: "https://www.youtube.com/watch?v=mbsmsi7l3r4", description: "Implement JWT authentication in Node.js applications." },
  { id: 13, title: "Basic Git Commands", category: "Basic", type: "Article", link: "https://git-scm.com/docs", description: "Essential Git commands for version control." },
  { id: 14, title: "Tailwind CSS Tutorial", category: "Design", type: "Video", link: "https://www.youtube.com/watch?v=dFgzHOX84xQ", description: "Style your web apps quickly using Tailwind CSS." },
  { id: 15, title: "REST API Basics", category: "Backend", type: "Article", link: "https://restfulapi.net/", description: "An introduction to REST API concepts and best practices." },
  { id: 16, title: "Forms in React", category: "Frontend", type: "Article", link: "https://react.dev/learn/forms", description: "Handle forms and input in React efficiently." },
];

const categories = ["All", "Frontend", "Backend", "Design", "Basic", "Authentication", "JWT"];

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredResources =
    selectedCategory === "All"
      ? resourcesData
      : resourcesData.filter((res) => res.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-[#AD56C4]">📚 Study Resources</h1>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              selectedCategory === cat
                ? "bg-[#AD56C4] text-white"
                : "bg-gray-200 hover:bg-[#AD56C4] hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Resource Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filteredResources.map((resource) => (
          <div
            key={resource.id}
            className="bg-white rounded-xl shadow-lg p-5 border transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            <h2 className="text-lg font-bold text-blue-600">{resource.title}</h2>
            <p className="text-sm text-gray-500 mb-2">
              {resource.category} • {resource.type}
            </p>
            <p className="text-[#f000b8] text-sm mb-4">{resource.description}</p>

            <a
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 text-sm font-semibold text-white bg-[#AD56C4] rounded-lg hover:bg-[#AD56C4] transition"
            >
              View Resource
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
