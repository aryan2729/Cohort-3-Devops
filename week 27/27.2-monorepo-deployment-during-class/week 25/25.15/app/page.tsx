"use client";

import { useEffect, useState } from "react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  liveUrl?: string;
}

interface SkillCategory {
  title: string;
  skills: string[];
}

interface Achievement {
  title: string;
  description: string;
}

const projects: Project[] = [
  {
    title: "Ayutra - AI-Powered Ayurvedic Diet System",
    description: "Developed an AI-driven healthcare system for personalized diet planning, prakriti analysis, compliance tracking, and patient management.",
    technologies: ["React", "Node.js", "MongoDB", "FastAPI", "Python", "XGBoost"],
    features: [
      "Built machine learning services using FastAPI and XGBoost for prakriti prediction and diet generation on an 8,000+ Ayurvedic food dataset",
      "Implemented role-based access control (Admin, Practitioner, Patient) with JWT authentication and secure REST APIs",
      "Designed responsive dashboards with analytics, charts, and a food explorer using React, Redux Toolkit, and Tailwind CSS"
    ],
    liveUrl: "https://ayutra.vercel.app/"
  },
  {
    title: "Nimbus Keyboard - 3D Interactive Website",
    description: "Created an immersive 3D keyboard product showcase using Three.js and React Three Fiber with interactive keycap themes and switch demos.",
    technologies: ["Next.js", "TypeScript", "Three.js", "React Three Fiber", "GSAP", "Prismic", "Stripe"],
    features: [
      "Integrated GSAP animations, HDR lighting, asset optimization, and mobile-friendly 3D interactions",
      "Implemented e-commerce functionality with Stripe checkout and dynamic content management using Prismic CMS"
    ],
    liveUrl: "https://nimbus-keyboards1.vercel.app/"
  },
  {
    title: "Second Brain - Productivity and Knowledge Hub",
    description: "Built a full-stack productivity platform to save, search, organize, and share notes, YouTube links, articles, GitHub repositories, and documents.",
    technologies: ["MERN Stack", "TypeScript", "Vite", "Tailwind CSS", "JWT"],
    features: [
      "Developed secure backend APIs with JWT authentication, MongoDB, and modular TypeScript architecture",
      "Designed a clean, responsive UI with filters, categories, and public sharing via unique shareable links"
    ],
    liveUrl: "https://second-brain-omega-five.vercel.app/"
  }
];

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "C/C++", "SQL (PostgreSQL, MySQL)", "HTML", "CSS"]
  },
  {
    title: "Frameworks",
    skills: ["React", "Next.js", "Node.js", "Express.js", "Redux Toolkit", "React Three Fiber", "React Three Drei", "GSAP", "Tailwind CSS"]
  },
  {
    title: "Developer Tools",
    skills: ["Git", "GitHub", "TurboRepo", "Monorepo", "VS Code", "Cursor", "Vercel"]
  },
  {
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL"]
  },
  {
    title: "Other Skills",
    skills: ["REST APIs", "JWT Authentication", "WebSockets", "Stripe API", "3D Web Development"]
  }
];

const achievements: Achievement[] = [
  {
    title: "SIH'25 Grand Finalist",
    description: "Smart India Hackathon 2025 (Government of India)"
  },
  {
    title: "Full-Stack Developer",
    description: "MERN Stack, TypeScript, SQL, REST APIs, JWT Authentication"
  },
  {
    title: "AI-Driven Applications",
    description: "Scalable backend architecture and clean, responsive UI using Tailwind CSS"
  }
];

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white">
            My Journey So Far
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Building amazing things, one project at a time
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            This is where I celebrate my achievements, showcase my projects, and remind myself of how far I've come. 
            Every line of code, every feature built, every challenge overcome - it all matters.
          </p>
          <a
            href="https://aryancode27.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-bold text-xl rounded-xl hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/80 animate-pulse"
          >
            🚀 View My Portfolio
          </a>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-cyan-500 transition-all">
            <div className="text-4xl font-bold text-cyan-400 mb-2">{projects.length}</div>
            <div className="text-gray-400">Projects Built</div>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-cyan-500 transition-all">
            <div className="text-4xl font-bold text-cyan-400 mb-2">{skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)}</div>
            <div className="text-gray-400">Skills Mastered</div>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-cyan-500 transition-all">
            <div className="text-4xl font-bold text-cyan-400 mb-2">{achievements.length}</div>
            <div className="text-gray-400">Achievements Unlocked</div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          Projects I've Built
        </h2>
        <div className="space-y-12 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-gray-900 rounded-xl p-8 border border-gray-800 hover:border-cyan-500 transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <h3 className="text-3xl font-bold mb-4 text-white">
                {project.title}
              </h3>
              <p className="text-lg text-gray-400 mb-6">
                {project.description}
              </p>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wide">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 bg-gray-800 text-cyan-400 border border-gray-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wide">
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4 mt-6">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-cyan-500 text-black rounded-lg font-medium hover:bg-cyan-400 transition-all"
                  >
                    Live Website
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="container mx-auto px-4 py-20 bg-gray-950">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-cyan-500 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 text-white">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 bg-gray-800 text-orange-400 border border-gray-700 rounded-lg text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-gray-900 border-2 border-cyan-500 rounded-xl p-8 hover:bg-gray-800 transition-all duration-300"
            >
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold mb-3 text-white">{achievement.title}</h3>
              <p className="text-gray-400">{achievement.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Callout Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 border-2 border-cyan-500 rounded-2xl p-12 text-center backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
            <div className="relative z-10">
              <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Check Out My Portfolio
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                See more of my work, experience, and projects in one place
              </p>
              <a
                href="https://aryancode27.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-bold text-2xl rounded-xl hover:scale-110 transition-all duration-300 shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/80 transform hover:rotate-1"
              >
                ✨ Visit Portfolio →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Motivational Footer */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto bg-gray-900 border border-gray-800 rounded-xl p-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Keep Going! 🚀
          </h2>
          <p className="text-xl text-gray-300 mb-4">
            Every project is a stepping stone. Every skill learned is progress.
          </p>
          <p className="text-lg text-gray-400">
            The journey continues, and the best is yet to come.
          </p>
        </div>
      </section>
    </div>
  );
}
