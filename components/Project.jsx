"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ExternalLink, Github, Sparkles, Code2, Globe } from "lucide-react";

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Generate a unique color theme for each project
  const colorThemes = [
    { from: "from-cyan-500", to: "to-blue-500", accent: "cyan" },
    { from: "from-purple-500", to: "to-pink-500", accent: "purple" },
    { from: "from-orange-500", to: "to-red-500", accent: "orange" },
    { from: "from-green-500", to: "to-emerald-500", accent: "green" },
  ];

  const theme = colorThemes[index % colorThemes.length];

  return (
    <div
      className="group relative"
      style={{
        animation: `slideInScale 0.7s ease-out ${index * 0.15}s both`,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card container */}
      <div className="relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900/80 to-slate-800/40 backdrop-blur-md border border-slate-700/50 transition-all duration-700 hover:border-slate-600/80 hover:shadow-2xl hover:shadow-black/50">
        {/* Spotlight effect following cursor */}
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${
              mousePosition.y
            }px, rgba(${
              theme.accent === "cyan"
                ? "6, 182, 212"
                : theme.accent === "purple"
                  ? "168, 85, 247"
                  : theme.accent === "orange"
                    ? "249, 115, 22"
                    : "34, 197, 94"
            }, 0.15), transparent 40%)`,
          }}
        />

        {/* Animated gradient border effect */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${theme.from} ${theme.to} opacity-0 transition-opacity duration-500 group-hover:opacity-20 blur-xl`}
        />

        {/* Content */}
        <div className="relative p-8 h-full flex flex-col">
          {/* Project number badge */}
          <div className="absolute top-6 right-6 flex items-center justify-center w-12 h-12 rounded-full bg-slate-800/80 border border-slate-700/50 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
            <span
              className={`text-sm font-bold bg-gradient-to-br ${theme.from} ${theme.to} bg-clip-text text-transparent`}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Icon */}
          <div className="mb-6 relative w-16 h-16">
            <div
              className={`absolute inset-0 bg-gradient-to-br ${theme.from} ${theme.to} rounded-2xl blur-xl opacity-50 transition-all duration-500 group-hover:opacity-80 group-hover:scale-125`}
            />
            <div className="relative w-full h-full flex items-center justify-center bg-slate-800/50 rounded-2xl border border-slate-700/50 backdrop-blur-sm transition-all duration-500 group-hover:border-slate-600/80 group-hover:scale-110 group-hover:rotate-6">
              <Code2
                className={`w-8 h-8 transition-all duration-500 group-hover:scale-110`}
                style={{
                  color: isHovered
                    ? `rgb(${
                        theme.accent === "cyan"
                          ? "6, 182, 212"
                          : theme.accent === "purple"
                            ? "168, 85, 247"
                            : theme.accent === "orange"
                              ? "249, 115, 22"
                              : "34, 197, 94"
                      })`
                    : "rgb(148, 163, 184)",
                }}
              />
            </div>
          </div>

          {/* Project name */}
          <h3 className="text-2xl font-bold text-white mb-3 transition-all duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300">
            {project.name}
          </h3>

          {/* Description placeholder with animated bars */}
          <div className="space-y-2 mb-6 flex-grow">
            <div className="h-2 bg-slate-700/30 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${theme.from} ${theme.to} rounded-full transition-all duration-700 origin-left`}
                style={{
                  transform: isHovered ? "scaleX(1)" : "scaleX(0.7)",
                  width: "85%",
                }}
              />
            </div>
            <div className="h-2 bg-slate-700/30 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${theme.from} ${theme.to} rounded-full transition-all duration-700 delay-75 origin-left`}
                style={{
                  transform: isHovered ? "scaleX(1)" : "scaleX(0.5)",
                  width: "65%",
                }}
              />
            </div>
            <div className="h-2 bg-slate-700/30 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${theme.from} ${theme.to} rounded-full transition-all duration-700 delay-150 origin-left`}
                style={{
                  transform: isHovered ? "scaleX(1)" : "scaleX(0.4)",
                  width: "45%",
                }}
              />
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3 mt-auto">
            <Link target="_blank" href={project.demoLink}>
              <button
                disabled={!project.demoLink}
                className={` cursor-pointer flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all duration-500 ${
                  project.demoLink
                    ? `bg-gradient-to-r ${theme.from} ${theme.to} hover:shadow-lg hover:shadow-${theme.accent}-500/50 hover:scale-105 text-white`
                    : "bg-slate-800/50 text-slate-500 cursor-not-allowed"
                }`}
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm">Live Demo</span>
              </button>
            </Link>

            <Link target="_blank" href={project.codeLink}>
              <button
                disabled={!project.codeLink}
                className={`flex cursor-pointer items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all duration-500 border ${
                  project.codeLink
                    ? `border-slate-600 hover:border-${theme.accent}-500 hover:bg-slate-800/80 text-slate-300 hover:text-white hover:scale-105`
                    : "border-slate-700/30 text-slate-600 cursor-not-allowed"
                }`}
              >
                <Github className="w-4 h-4" />
                <span className="text-sm">Code</span>
              </button>
            </Link>
          </div>

          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 w-20 h-20 opacity-30">
            <div
              className={`absolute top-4 left-4 w-8 h-0.5 bg-gradient-to-r ${theme.from} ${theme.to} transition-all duration-500 origin-left`}
              style={{ transform: isHovered ? "scaleX(1.5)" : "scaleX(1)" }}
            />
            <div
              className={`absolute top-4 left-4 w-0.5 h-8 bg-gradient-to-b ${theme.from} ${theme.to} transition-all duration-500 origin-top`}
              style={{ transform: isHovered ? "scaleY(1.5)" : "scaleY(1)" }}
            />
          </div>

          <div className="absolute bottom-0 right-0 w-20 h-20 opacity-30">
            <div
              className={`absolute bottom-4 right-4 w-8 h-0.5 bg-gradient-to-l ${theme.from} ${theme.to} transition-all duration-500 origin-right`}
              style={{ transform: isHovered ? "scaleX(1.5)" : "scaleX(1)" }}
            />
            <div
              className={`absolute bottom-4 right-4 w-0.5 h-8 bg-gradient-to-t ${theme.from} ${theme.to} transition-all duration-500 origin-bottom`}
              style={{ transform: isHovered ? "scaleY(1.5)" : "scaleY(1)" }}
            />
          </div>
        </div>

        {/* Animated particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div
            className={`absolute top-1/4 left-1/4 w-1 h-1 rounded-full bg-${theme.accent}-400 animate-ping`}
            style={{ animationDuration: "2s" }}
          />
          <div
            className={`absolute top-3/4 right-1/3 w-1 h-1 rounded-full bg-${theme.accent}-400 animate-ping`}
            style={{ animationDuration: "2.5s", animationDelay: "0.3s" }}
          />
          <div
            className={`absolute bottom-1/4 left-2/3 w-1 h-1 rounded-full bg-${theme.accent}-400 animate-ping`}
            style={{ animationDuration: "3s", animationDelay: "0.6s" }}
          />
        </div>
      </div>
    </div>
  );
};

export default function Project() {
  const projects = [
    {
      name: "AI Image Generator",
      demoLink: "https://ai-image-creator-peach.vercel.app",
      codeLink: "http://github.com/leodk293/ai-image-creator",
    },
    {
      name: "Anime Website",
      demoLink: "https://anime-vista.netlify.app",
      codeLink: "https://github.com/leodk293/anime-vista",
    },
    {
      name: "Blog Website",
      demoLink: "https://neonthoughts.netlify.app",
      codeLink: "https://github.com/leodk293/blog",
    },
    {
      name: "Crypto App",
      demoLink: "https://github.com/leodk293/coinVista",
      codeLink: "https://coins-vista.netlify.app",
    },
  ];

  return (
    <>
      <style jsx global>{`
        @keyframes slideInScale {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes shimmerTitle {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        @keyframes glow {
          0%,
          100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>

      <section className="w-full min-h-screen flex items-center justify-center py-24 px-4 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Gradient orbs */}
          <div
            className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: "5s" }}
          />
          <div
            className="absolute top-1/3 -right-40 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: "7s", animationDelay: "1s" }}
          />
          <div
            className="absolute -bottom-40 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: "6s", animationDelay: "2s" }}
          />

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto">
          {/* Header section */}
          <div
            className="flex flex-col items-center gap-6 mb-20"
            style={{ animation: "slideInScale 0.8s ease-out" }}
          >
            {/* Floating icon */}
            <div
              className="relative mb-4"
              style={{ animation: "float 6s ease-in-out infinite" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur-2xl opacity-50 animate-glow" />
              <div className="relative bg-slate-900/80 backdrop-blur-sm p-4 rounded-2xl border border-slate-700/50">
                <Sparkles className="w-10 h-10 text-cyan-400" />
              </div>
            </div>

            <div className="relative">
              <h1
                className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-[length:200%_auto]"
                style={{ animation: "shimmerTitle 3s linear infinite" }}
              >
                Projects
              </h1>
              <div
                className="absolute -inset-6 bg-gradient-to-r from-cyan-600/20 via-purple-600/20 to-pink-600/20 blur-3xl -z-10 animate-pulse"
                style={{ animationDuration: "4s" }}
              />
            </div>

            {/* Decorative underline */}
            <div className="flex items-center gap-3">
              <span className="w-12 h-1 rounded-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
              <span className="w-24 h-1 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500" />
              <span className="w-12 h-1 rounded-full bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
            </div>

            <p
              className="text-slate-400 text-lg md:text-xl text-center max-w-2xl mt-4 font-light"
              style={{ animation: "slideInScale 0.8s ease-out 0.2s both" }}
            >
              A collection of projects showcasing my development journey and
              technical expertise
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {projects.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} />
            ))}
          </div>

          {/* View more button */}
        </div>
      </section>
    </>
  );
}
