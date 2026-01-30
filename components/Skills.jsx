"use client";
import Image from "next/image";
import React, { useState } from "react";
import wordpress from "../public/wordpress.png";
import laravel from "../public/laravel.png";
import react from "../public/react.png";
import taiwind from "../public/tailwind.png";
import mongodb from "../public/mongodb.png";
import mysql from "../public/mysql.png";
import nodejs from "../public/nodejs.png";
import nextjs from "../public/nexjs.png";
import figma from "../public/figma.png";
import bootstrap from "../public/bootstrap.png";
import git from "../public/git.png";

const SkillCard = ({ name, logo, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group cursor-pointer relative"
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-slate-700/50 p-8 transition-all duration-500 hover:scale-105 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-purple-600/0 to-blue-600/0 opacity-0 transition-opacity duration-500 group-hover:opacity-10" />

        {/* Glowing orb effect */}
        <div
          className="absolute -inset-20 bg-blue-500/20 blur-3xl rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            transform: isHovered ? "scale(1.5)" : "scale(1)",
            transition: "transform 0.5s ease-out",
          }}
        />

        <div className="relative flex flex-col items-center gap-5">
          {/* Logo container with rotation effect */}
          <div className="relative w-20 h-20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative w-full h-full flex items-center justify-center bg-slate-800/50 rounded-xl border border-slate-700/50 group-hover:border-blue-500/50 transition-colors duration-500">
              <Image
                alt={name}
                src={logo}
                width={50}
                height={50}
                className="object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Skill name with gradient text effect */}
          <p className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300 transition-all duration-500 group-hover:from-blue-400 group-hover:to-purple-400">
            {name}
          </p>
        </div>

        {/* Shine effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            style={{
              transform: isHovered ? "translateX(100%)" : "translateX(-100%)",
              transition: "transform 0.7s ease-out",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default function Skills() {
  const skills = [
    { name: "WordPress", logo: wordpress },
    { name: "Laravel", logo: laravel },
    { name: "React", logo: react },
    { name: "Git", logo: git },
    { name: "Bootstrap", logo: bootstrap },
    { name: "Tailwind CSS", logo: taiwind },
    { name: "Node.js", logo: nodejs },
    { name: "MongoDB", logo: mongodb },
    { name: "MySQL", logo: mysql },
    { name: "Next.js", logo: nextjs },
    { name: "Figma", logo: figma },
  ];

  return (
    <>
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
      `}</style>

      <section className="w-full min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: "4s" }}
          />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: "6s", animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: "8s", animationDelay: "2s" }}
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto">
          {/* Header section */}
          <div
            className="flex flex-col items-center gap-6 mb-16"
            style={{ animation: "fadeInUp 0.8s ease-out" }}
          >
            <div className="relative">
              <h1 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-[length:200%_auto] animate-shimmer">
                Skills
              </h1>
              <div
                className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-2xl -z-10 animate-pulse"
                style={{ animationDuration: "3s" }}
              />
            </div>

            {/* Decorative underline */}
            <div className="flex items-center gap-3">
              <span className="w-12 h-1 rounded-full bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
              <span className="w-20 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
              <span className="w-12 h-1 rounded-full bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
            </div>

            <p
              className="text-slate-400 text-lg md:text-xl text-center max-w-2xl mt-4 font-light"
              style={{ animation: "fadeInUp 0.8s ease-out 0.2s both" }}
            >
              Technologies and tools I work with to bring ideas to life
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {skills.map((skill, index) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                logo={skill.logo}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
