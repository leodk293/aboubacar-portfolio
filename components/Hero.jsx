'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Github, Download, Mail, ArrowRight, Sparkles } from "lucide-react";
import profileImage from "../public/profile-image.png";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

   const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Traore-Aboubacar-2026.pdf";
    link.download = "Traore_Aboubacar.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
        }

        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>

      <section 
        className="w-full min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s', animationDelay: '1s' }} />
          
          {/* Cursor spotlight effect */}
          <div 
            className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl transition-all duration-300 ease-out pointer-events-none"
            style={{
              left: mousePosition.x - 192,
              top: mousePosition.y - 192,
            }}
          />

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center justify-center">
            
            {/* Left side - Profile Image */}
            <div 
              className="flex flex-col items-center gap-6"
              style={{
                animation: isVisible ? 'fadeInLeft 1s ease-out' : 'none'
              }}
            >
              {/* Profile image container */}
              <div className="relative group">
                {/* Animated glow rings */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-700 animate-pulse" style={{ animationDuration: '3s' }} />
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-700" style={{ animation: 'pulse-glow 4s ease-in-out infinite' }} />
                
                {/* Image wrapper with border */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full p-1 bg-[length:200%_200%]" style={{ animation: 'gradient-shift 3s ease infinite' }}>
                    <div className="w-full h-full rounded-full bg-slate-900" />
                  </div>
                  
                  <div className="relative rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 p-1 bg-[length:200%_200%] transition-all duration-700 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-blue-500/50" style={{ animation: 'gradient-shift 3s ease infinite' }}>
                    <div className="rounded-full overflow-hidden bg-slate-900">
                      <Image
                        src={profileImage}
                        alt="Photo de profil de Traore Aboubacar"
                        width={300}
                        height={300}
                        priority
                        className="rounded-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  </div>

                  {/* Floating badge */}
                  <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-3 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-12" style={{ animation: 'float 3s ease-in-out infinite' }}>
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="flex flex-row gap-4">
                <Link
                  target="_blank"
                  className="group relative overflow-hidden rounded-full p-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-blue-500/50"
                  href={"https://www.linkedin.com/in/aboubacar-traore-495736252"}
                  aria-label="LinkedIn"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <Linkedin className="relative w-5 h-5 text-white" strokeWidth={2} />
                </Link>
                
                <Link
                  target="_blank"
                  className="group relative overflow-hidden rounded-full p-3 bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-slate-500/50"
                  href={"https://github.com/leodk293"}
                  aria-label="GitHub"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <Github className="relative w-5 h-5 text-white" strokeWidth={2} />
                </Link>
              </div>
            </div>

            {/* Right side - Content */}
            <div 
              className="flex-1 max-w-2xl"
              style={{
                animation: isVisible ? 'fadeInRight 1s ease-out 0.2s both' : 'none'
              }}
            >
              <div className="relative">
                {/* Decorative element */}
                <div className="absolute -top-6 -left-4 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl" />
                
                {/* Name with gradient */}
                <div className="relative mb-6">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-[length:200%_auto] mb-2" style={{ animation: 'gradient-shift 3s ease infinite' }}>
                    Traore Aboubacar
                  </h1>
                  <div className="flex items-center gap-3 mt-4">
                    <span className="h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                    <span className="h-1 w-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
                  </div>
                </div>

                {/* Subtitle */}
                <h2 className="text-xl sm:text-2xl font-semibold text-slate-300 mb-6 leading-relaxed">
                  Étudiant en informatique a l&apos;ISGA Marrakech &amp; Software Engineer passionné
                </h2>

                {/* Description with enhanced styling */}
                <div className="space-y-4 text-slate-400 leading-relaxed mb-8">
                  <p className="text-base sm:text-lg">
                    J&apos;ai acquis une solide expérience à travers la réalisation de
                    projets concrets et d&apos;applications web modernes.
                    Spécialisé en frontend avec{" "}
                    <span className="relative inline-block group/tech">
                      <span className="font-semibold text-blue-400 transition-colors duration-300 group-hover/tech:text-blue-300">React</span>
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover/tech:w-full transition-all duration-300" />
                    </span>
                    ,{" "}
                    <span className="relative inline-block group/tech">
                      <span className="font-semibold text-blue-400 transition-colors duration-300 group-hover/tech:text-blue-300">Next.js</span>
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover/tech:w-full transition-all duration-300" />
                    </span>
                    {" "}et{" "}
                    <span className="relative inline-block group/tech">
                      <span className="font-semibold text-blue-400 transition-colors duration-300 group-hover/tech:text-blue-300">Tailwind CSS</span>
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover/tech:w-full transition-all duration-300" />
                    </span>
                    , j'ai conçu plusieurs{" "}
                    <Link
                      href="#projects"
                      className="relative inline-block group/link font-medium text-blue-400 transition-colors duration-300 hover:text-blue-300"
                    >
                      projets
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left" />
                    </Link>
                    {" "}robustes et élégants.
                  </p>
                  
                  <p className="text-base sm:text-lg">
                    Curieux et motivé, je m&apos;intéresse de plus en plus aux applications
                    intégrant l&apos;intelligence artificielle ainsi qu&apos;aux solutions web
                    performantes. J&apos;aime apprendre en continu, relever de nouveaux défis
                    techniques, et transformer des idées en produits concrets.
                  </p>
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap gap-4">
                 
                  <button
                    onClick={handleDownload}
                    className="group cursor-pointer relative px-6 py-3 rounded-xl font-semibold text-white overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    <span className="relative flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      Download CV
                    </span>
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" style={{ animation: 'shimmer 2s infinite' }} />
                  </button>
                
                  
                  <button className="group relative px-6 py-3 rounded-xl font-semibold text-white border-2 border-slate-600 overflow-hidden transition-all duration-500 hover:scale-105 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/20">
                    <div className="absolute inset-0 bg-slate-800/50 backdrop-blur-sm" />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    <Link href={'#contact'} className="relative flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Contact
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </button>
                </div>

                {/* Decorative corner element */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 opacity-20 pointer-events-none">
                  <div className="absolute bottom-0 right-0 w-16 h-0.5 bg-gradient-to-l from-blue-500 to-transparent" />
                  <div className="absolute bottom-0 right-0 w-0.5 h-16 bg-gradient-to-t from-blue-500 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/3 w-2 h-2 rounded-full bg-blue-400/30 animate-ping" style={{ animationDuration: '3s', animationDelay: '0s' }} />
          <div className="absolute top-2/3 right-1/4 w-2 h-2 rounded-full bg-purple-400/30 animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
          <div className="absolute bottom-1/3 left-1/4 w-2 h-2 rounded-full bg-blue-400/30 animate-ping" style={{ animationDuration: '5s', animationDelay: '2s' }} />
        </div>
      </section>
    </>
  );
}