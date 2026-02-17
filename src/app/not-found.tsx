"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { resumeConfig } from "@/config/resumeConfig";

export default function NotFound() {
  const { image, title, description, buttonText, buttonLink } = resumeConfig.notFoundPage;

  useEffect(() => {
    // Stop background music when entering 404 page
    (window as any).is404 = true;
    window.dispatchEvent(new Event('music:stop'));

    // Resume background music when leaving 404 page
    return () => {
      (window as any).is404 = false;
      window.dispatchEvent(new Event('music:play'));
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#fff] flex flex-col items-center justify-center p-4">
      <div className="max-w-3xl w-full text-center space-y-8">
        
        {/* GIF Container */}
        <div className="relative w-full flex justify-center">
          <img 
            src={image}
            alt="404 Page Not Found"
            className="w-full max-w-[800px] h-auto object-contain mx-auto"
          />
        </div>

        {/* Content */}
        <div className="space-y-6 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 font-serif">
            {title}
          </h1>
          
          <p className="text-gray-600 text-lg">
            {description}
          </p>
          
          <Link 
            href={buttonLink}
            className="inline-block px-10 py-4 bg-[#39ac31] text-white font-medium rounded shadow hover:bg-[#2d8a27] transition-all duration-300 hover:-translate-y-1"
          >
            {buttonText}
          </Link>
        </div>

      </div>
    </div>
  );
}
