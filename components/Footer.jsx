"use client";
import React from "react";
import Link from "next/link";
import { Linkedin, Github, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes pulse-subtle {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>

      <footer className="relative w-full bg-slate-900/50 backdrop-blur-sm border-t border-slate-800/50 mt-20">
        {/* Gradient line at top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />

        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col items-center gap-8">
            {/* Social Links */}
            <div
              className="flex items-center gap-4"
              style={{ animation: "fadeIn 0.8s ease-out" }}
            >
              <Link
                href="https://www.linkedin.com/in/aboubacar-traore-495736252"
                target="_blank"
                className="group relative p-3 rounded-full bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 rounded-full transition-colors duration-300" />
                <Linkedin
                  className="relative w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors duration-300"
                  strokeWidth={1.5}
                />
              </Link>

              <Link
                href="https://github.com/leodk293"
                target="_blank"
                className="group relative p-3 rounded-full bg-slate-800/50 border border-slate-700/50 hover:border-slate-500/50 transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <div className="absolute inset-0 bg-slate-500/0 group-hover:bg-slate-500/10 rounded-full transition-colors duration-300" />
                <Github
                  className="relative w-5 h-5 text-slate-400 group-hover:text-slate-300 transition-colors duration-300"
                  strokeWidth={1.5}
                />
              </Link>

              <Link
                href="mailto:aboubatraore04@gmail.com"
                className="group relative p-3 rounded-full bg-slate-800/50 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/10 rounded-full transition-colors duration-300" />
                <Mail
                  className="relative w-5 h-5 text-slate-400 group-hover:text-purple-400 transition-colors duration-300"
                  strokeWidth={1.5}
                />
              </Link>
            </div>

            {/* Divider */}
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

            {/* Copyright */}
            <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-slate-400">
              <p className="flex items-center gap-2">
                © {new Date().getFullYear()} Traore Aboubacar.
              </p>
            </div>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="group mt-4 p-2 rounded-full bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              aria-label="Retour en haut"
            >
              <ArrowUp
                className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors duration-300"
                strokeWidth={1.5}
              />
            </button>
          </div>
        </div>

        {/* Bottom gradient glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      </footer>
    </>
  );
}
