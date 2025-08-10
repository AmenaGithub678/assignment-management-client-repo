import React from "react";

const leaderboardData = [
  {
    id: "LDR001",
    name: "Dr. Arif Hasan",
    role: "Project Lead",
    email: "arif.hasan@example.com",
    phone: "+8801711000001",
    total_mark: 98,
    image: "https://i.pravatar.cc/150?img=1",
    bio: "Overall project coordination, architecture design, and stakeholder communication.",
    joined_date: "2023-02-15",
    achievements: ["Led 10+ successful projects", "Mentored 25 juniors"],
  },
  {
    id: "LDR002",
    name: "Maya Rahman",
    role: "Frontend Lead",
    email: "maya.rahman@example.com",
    phone: "+8801711000002",
    total_mark: 92,
    image: "https://i.pravatar.cc/150?img=2",
    bio: "UI/UX, component library design, accessibility champion.",
    joined_date: "2023-05-10",
    achievements: ["Redesigned main product UI", "Improved Lighthouse score by 30%"],
  },
  {
    id: "LDR003",
    name: "Rafiq Islam",
    role: "Backend Lead",
    email: "rafiq.islam@example.com",
    phone: "+8801711000003",
    total_mark: 94,
    image: "https://i.pravatar.cc/150?img=3",
    bio: "API design, database schema, performance optimisation.",
    joined_date: "2022-11-01",
    achievements: ["Cut API latency by 60%", "Designed scalable DB schema"],
  },
  {
    id: "LDR004",
    name: "Sadia Akter",
    role: "QA Lead",
    email: "sadia.akter@example.com",
    phone: "+8801711000004",
    total_mark: 89,
    image: "https://i.pravatar.cc/150?img=4",
    bio: "Test automation, CI integration, release quality gate.",
    joined_date: "2024-01-20",
    achievements: ["Built test suite with 85% coverage", "Reduced release bugs by 40%"],
  },
  {
    id: "LDR005",
    name: "Imran Chowdhury",
    role: "DevOps Lead",
    email: "imran.chowdhury@example.com",
    phone: "+8801711000005",
    total_mark: 91,
    image: "https://i.pravatar.cc/150?img=5",
    bio: "CI/CD pipelines, infra as code, monitoring & alerting.",
    joined_date: "2021-08-12",
    achievements: ["Automated deployments", "Implemented central logging"],
  },
];

export default function LeaderboardPage() {
  // Sort by highest mark
  const sortedData = [...leaderboardData].sort((a, b) => b.total_mark - a.total_mark);

  // Assign rank badges
  const rankBadge = (index) => {
    if (index === 0) return "🥇";
    if (index === 1) return "🥈";
    if (index === 2) return "🥉";
    return `#${index + 1}`;
  };

  const topThree = sortedData.slice(0, 3);
  const rest = sortedData.slice(3);

  return (
    <div className=" mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">🏆 Leaderboard</h1>

      {/* Top 3 as cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
        {topThree.map((leader, index) => (
          <div
            key={leader.id}
            className={`bg-white rounded-xl shadow-lg p-5 border hover:shadow-xl transition-all ${
              index < 3 ? "border-yellow-400" : "border-gray-200"
            }`}
          >
            <div className="flex items-center space-x-4">
              <img
                src={leader.image}
                alt={leader.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-gray-300"
              />
              <div>
                <h2 className="text-lg font-bold flex items-center gap-2">
                  {rankBadge(index)} {leader.name}
                </h2>
                <p className="text-sm text-gray-500">{leader.role}</p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-gray-600 text-sm">{leader.bio}</p>
            </div>

            <div className="mt-3">
              <span className="font-semibold text-[#AD56C4]">Marks:</span>{" "}
              {leader.total_mark}
            </div>

            <div className="mt-3">
              <h3 className="text-sm font-semibold text-[#AD56C4] mb-1">
                Achievements:
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-600">
                {leader.achievements.map((ach, i) => (
                  <li key={i}>{ach}</li>
                ))}
              </ul>
            </div>

            <div className="mt-4 text-xs text-gray-500">
              Joined: {leader.joined_date}
            </div>
          </div>
        ))}
      </div>

      {/* Rest as table */}
      {rest.length > 0 && (
        <div className="bg-white rounded-xl shadow-lg p-5 border border-gray-200">
          <h2 className="text-lg font-bold mb-4 text-[#AD56C4]">📋 Other Rankings</h2>
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 border">Rank</th>
                <th className="p-3 border">Assignment No.</th>
                <th className="p-3 border">Avg Mark</th>
                <th className="p-3 border">Total Students</th>
              </tr>
            </thead>
            <tbody>
              {rest.map((leader, index) => (
                <tr key={leader.id} className="hover:bg-gray-50">
                  <td className="p-3 border">#{index + 4}</td>
                  <td className="p-3 border">{index + 1}</td>
                  <td className="p-3 border">{leader.total_mark}</td>
                  <td className="p-3 border">{rest.length}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
