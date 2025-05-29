"use client";

import type React from "react";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, ExternalLink, Mail, MapPin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  // Refs for scroll functionality
  const aboutRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event for header styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll functions
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#121212]">
      {/* Header */}
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#121212]/90 backdrop-blur-md py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/assets/logo.svg"
              alt="Vistruaz Logo"
              width={40}
              height={10}
              className="transition-transform duration-300 hover:scale-105"
            />
            <div className="font-bold text-xl text-white">
              <span className="text-[#8a9155]">Vistruaz</span>
            </div>
          </div>
          <nav className="hidden md:flex gap-8 items-center">
            <button
              onClick={() => scrollToSection(aboutRef)}
              className="text-sm font-medium text-gray-300 transition-colors hover:text-[#8a9155]"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection(portfolioRef)}
              className="text-sm font-medium text-gray-300 transition-colors hover:text-[#8a9155]"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection(contactRef)}
              className="text-sm font-medium text-gray-300 transition-colors hover:text-[#8a9155]"
            >
              Contact
            </button>
            <Button
              variant="outline"
              className="border-[#8a9155] text-[#8a9155] hover:bg-[#8a9155]/20 hover:text-[#a0a86b]"
            >
              Startup / Recruiter Login
            </Button>
            <Button
              variant="outline"
              className="border-[#8a9155] text-[#8a9155] hover:bg-[#8a9155]/20 hover:text-[#a0a86b]"
            >
              Candidate Login
            </Button>
          </nav>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 top-16 bg-[#121212]/95 backdrop-blur-md z-40 flex flex-col items-center justify-center space-y-8 md:hidden">
            <button
              onClick={() => scrollToSection(aboutRef)}
              className="text-xl font-medium text-white transition-colors hover:text-[#8a9155]"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection(portfolioRef)}
              className="text-xl font-medium text-white transition-colors hover:text-[#8a9155]"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection(contactRef)}
              className="text-xl font-medium text-white transition-colors hover:text-[#8a9155]"
            >
              Contact
            </button>
            <Button
              variant="outline"
              className="border-[#8a9155] text-[#8a9155] hover:bg-[#8a9155]/20 hover:text-[#a0a86b]"
            >
              Recruiter Login
            </Button>
            <Button
              variant="outline"
              className="border-[#8a9155] text-[#8a9155] hover:bg-[#8a9155]/20 hover:text-[#a0a86b]"
            >
              Candidate Login
            </Button>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#121212] via-[#1a1a1a] to-[#121212]">
          {/* Abstract background elements */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-[#62653f]/30 blur-3xl"></div>
            <div className="absolute bottom-[20%] right-[10%] w-80 h-80 rounded-full bg-[#8a9155]/20 blur-3xl"></div>
            <div className="absolute top-[40%] right-[20%] w-40 h-40 rounded-full bg-[#62653f]/20 blur-3xl"></div>
          </div>

          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block px-4 py-1 rounded-full bg-[#8a9155]/20 text-[#8a9155] text-sm font-medium mb-2">
                  Innovation & Technology
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-white">
                  <span className="text-[#8a9155]">Vistruaz</span>
                </h1>
                <p className="text-xl md:text-2xl font-medium text-gray-300">
                  Innovating Across Domains
                </p>
                <p className="text-gray-400 md:text-lg max-w-[600px]">
                  We are a parent company fostering a suite of early-stage
                  startups, driving efficiency and innovation across diverse
                  software and technology domains.
                </p>
                <div className="pt-4 flex flex-wrap gap-4">
                  <Button
                    onClick={() => scrollToSection(portfolioRef)}
                    className="bg-[#8a9155] hover:bg-[#62653f] text-white group"
                  >
                    Explore Our Ventures
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800"
                    onClick={() => scrollToSection(contactRef)}
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
              <div className="hidden lg:block relative">
                <div className="relative h-[400px] w-[400px] flex items-center justify-center">
                  <Image
                    src="/assets/logo.png"
                    alt="Vistruaz Logo"
                    width={700}
                    height={700}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <button
              onClick={() => scrollToSection(aboutRef)}
              className="flex flex-col items-center gap-2 text-gray-400 hover:text-[#8a9155] transition-colors"
            >
              <span className="text-sm">Scroll Down</span>
              <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
                <div className="w-1 h-2 bg-current rounded-full mt-2 animate-bounce"></div>
              </div>
            </button>
          </div>
        </section>

        {/* About Us Section */}
        <section
          ref={aboutRef}
          className="py-24 md:py-32 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[#1a1a1a]"></div>
          <div className="absolute left-0 top-0 w-full h-1 bg-gradient-to-r from-transparent via-[#8a9155] to-transparent opacity-30"></div>
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[#8a9155]/5 -skew-x-12 transform origin-top-right"></div>

          <div className="container relative z-10">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="md:w-1/2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-[#8a9155]/20 to-transparent rounded-lg blur-xl"></div>
                  <div className="relative bg-[#232323] border border-[#8a9155]/20 rounded-lg p-8 backdrop-blur-sm">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white mb-6">
                      <span className="text-[#8a9155]">About</span> Us
                    </h2>
                    <div className="space-y-4 text-gray-300">
                      <p>
                        At Vistruaz, we specialize in incubating and developing
                        innovative software products that drive efficiency and
                        create value across multiple domains.
                      </p>
                      <p>
                        Our approach integrates research and development into
                        our core workflows, allowing us to stay at the forefront
                        of technological advancements and deliver cutting-edge
                        solutions to complex problems.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#232323] border border-[#8a9155]/10 rounded-lg p-6 transform hover:scale-105 transition-transform">
                    <div className="w-12 h-12 bg-[#8a9155]/20 rounded-full flex items-center justify-center mb-4">
                      <div className="w-6 h-6 bg-[#8a9155] rounded-full"></div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Innovation
                    </h3>
                    <p className="text-gray-400">
                      Pushing boundaries with forward-thinking solutions
                    </p>
                  </div>
                  <div className="bg-[#232323] border border-[#8a9155]/10 rounded-lg p-6 transform hover:scale-105 transition-transform">
                    <div className="w-12 h-12 bg-[#8a9155]/20 rounded-full flex items-center justify-center mb-4">
                      <div className="w-6 h-6 bg-[#8a9155] rounded-full"></div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Efficiency
                    </h3>
                    <p className="text-gray-400">
                      Optimizing processes for maximum productivity
                    </p>
                  </div>
                  <div className="bg-[#232323] border border-[#8a9155]/10 rounded-lg p-6 transform hover:scale-105 transition-transform">
                    <div className="w-12 h-12 bg-[#8a9155]/20 rounded-full flex items-center justify-center mb-4">
                      <div className="w-6 h-6 bg-[#8a9155] rounded-full"></div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Research
                    </h3>
                    <p className="text-gray-400">
                      Continuous exploration of emerging technologies
                    </p>
                  </div>
                  <div className="bg-[#232323] border border-[#8a9155]/10 rounded-lg p-6 transform hover:scale-105 transition-transform">
                    <div className="w-12 h-12 bg-[#8a9155]/20 rounded-full flex items-center justify-center mb-4">
                      <div className="w-6 h-6 bg-[#8a9155] rounded-full"></div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Growth
                    </h3>
                    <p className="text-gray-400">
                      Scaling ventures from concept to market success
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section
          ref={portfolioRef}
          className="py-24 md:py-32 relative overflow-hidden bg-[#121212]"
        >
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute top-[30%] left-[15%] w-64 h-64 rounded-full bg-[#62653f]/30 blur-3xl"></div>
            <div className="absolute bottom-[10%] right-[20%] w-80 h-80 rounded-full bg-[#8a9155]/20 blur-3xl"></div>
          </div>

          <div className="container relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1 rounded-full bg-[#8a9155]/20 text-[#8a9155] text-sm font-medium mb-4">
                Our Ventures
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Innovative <span className="text-[#8a9155]">Portfolio</span>
              </h2>
              <div className="mt-4 max-w-2xl mx-auto">
                <p className="text-gray-400">
                  Explore our suite of cutting-edge software products designed
                  to solve complex problems across various domains
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Asvatthi.com */}
              <Card className="bg-[#1a1a1a] border-[#333333] text-white overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8a9155]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <CardHeader className="relative z-10">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl font-bold text-white">
                      Asvatthi
                    </CardTitle>
                    <ExternalLink className="h-5 w-5 text-[#8a9155]" />
                  </div>
                  <CardDescription className="text-gray-400">
                    Modern Documentation Tool
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="h-1 w-16 bg-[#8a9155] mb-4"></div>
                  <p className="text-gray-300">
                    A complete solution for generating, managing, and sharing
                    code documentation. Seamlessly connects to repositories via
                    HTTPS, SSH, or OAuth for GitHub, GitLab, and Bitbucket.
                  </p>
                </CardContent>
                <CardFooter className="relative z-10">
                  <Link
                    href="https://asvatthi.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-[#232323] hover:bg-[#333333] text-white border border-[#444444]">
                      Visit Website
                      <ArrowRight className="ml-2 h-4 w-4 opacity-70" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Numerical Labs */}
              <Card className="bg-[#1a1a1a] border-[#333333] text-white overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8a9155]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <CardHeader className="relative z-10">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl font-bold text-white">
                      Numerikal Labs
                    </CardTitle>
                    <ExternalLink className="h-5 w-5 text-[#8a9155]" />
                  </div>
                  <CardDescription className="text-gray-400">
                    Quantum Computing Research
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="h-1 w-16 bg-[#8a9155] mb-4"></div>
                  <p className="text-gray-300">
                    Pioneering research in quantum computing algorithms and
                    applications. Developing next-generation computational
                    models that solve complex problems beyond the capabilities
                    of classical computing.
                  </p>
                </CardContent>
                <CardFooter className="relative z-10">
                  <Link
                    href="https://numerikal-labs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-[#232323] hover:bg-[#333333] text-white border border-[#444444]">
                      Visit Website
                      <ArrowRight className="ml-2 h-4 w-4 opacity-70" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Upcoming Projects */}
              <Card className="bg-[#1a1a1a] border-[#333333] text-white overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8a9155]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl font-bold text-white">
                    Upcoming Projects
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Stay Tuned
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="h-1 w-16 bg-[#8a9155]/50 mb-4"></div>
                  <p className="text-gray-300">
                    We have more exciting projects in development. These
                    innovative solutions will be showcased here soon as they
                    reach maturity.
                  </p>
                </CardContent>
                <CardFooter className="relative z-10">
                  <Button
                    disabled
                    className="bg-[#232323] text-gray-500 border border-[#333333] cursor-not-allowed"
                  >
                    Coming Soon
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          ref={contactRef}
          className="py-24 md:py-32 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[#1a1a1a]"></div>
          <div className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-transparent via-[#8a9155] to-transparent opacity-30"></div>

          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto">
              <div className="bg-[#232323] border border-[#444444] rounded-xl overflow-hidden">
                <div className="p-8 md:p-12">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                      Get in <span className="text-[#8a9155]">Touch</span>
                    </h2>
                    <p className="mt-4 text-gray-400">
                      Interested in our ventures or have a potential
                      collaboration? We'd love to hear from you.
                    </p>
                  </div>

                  <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                    <div className="flex items-center gap-4 text-gray-300 group">
                      <div className="w-12 h-12 rounded-full bg-[#8a9155]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#8a9155]/30 transition-colors">
                        <MapPin className="h-5 w-5 text-[#8a9155]" />
                      </div>
                      <div>
                        <h3 className="font-medium text-white mb-1">
                          Our Location
                        </h3>
                        <p className="text-gray-400">
                          8 The Green, Suite A, Dover, Delaware, 19901
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-gray-300 group">
                      <div className="w-12 h-12 rounded-full bg-[#8a9155]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#8a9155]/30 transition-colors">
                        <Mail className="h-5 w-5 text-[#8a9155]" />
                      </div>
                      <div>
                        <h3 className="font-medium text-white mb-1">
                          Email Us
                        </h3>
                        <Button
                          variant="link"
                          className="text-[#8a9155] p-0 h-auto font-normal hover:text-[#a0a86b]"
                          onClick={() =>
                            (window.location.href = "mailto:info@vistruaz.com")
                          }
                        >
                          info@vistruaz.com
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 flex justify-center">
                    <Button
                      className="bg-[#8a9155] hover:bg-[#62653f] text-white px-8 py-6 h-auto text-lg group"
                      onClick={() =>
                        (window.location.href = "mailto:info@vistruaz.com")
                      }
                    >
                      <Mail className="mr-2 h-5 w-5" /> Contact Us
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#333333] py-8 bg-[#121212]">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="font-bold text-xl text-white">
                <span className="text-[#8a9155]">Vistruaz</span> LLC
              </div>
            </div>
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} Vistruaz LLC. All rights reserved.
            </div>
            <div className="flex gap-6">
              <button
                onClick={() => scrollToSection(aboutRef)}
                className="text-sm text-gray-400 hover:text-[#8a9155] transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection(portfolioRef)}
                className="text-sm text-gray-400 hover:text-[#8a9155] transition-colors"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection(contactRef)}
                className="text-sm text-gray-400 hover:text-[#8a9155] transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
