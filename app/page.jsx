import Image from "next/image";
import profileImage from "../public/profile-image.png";
import Link from "next/link";
import { Linkedin, Github } from "lucide-react";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Project from "@/components/Project";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen max-w-10xl mt-[10rem]">
      <section id="hero" className="scroll-mt-24">
        <Hero />
      </section>
      <section id="skills" className="scroll-mt-10">
        <Skills />
      </section>
      <section id="projects" className="scroll-mt-10">
        <Project />
      </section>
      <section id="contact" className="scroll-mt-10">
        <Contact />
      </section>
    </div>
  );
}
