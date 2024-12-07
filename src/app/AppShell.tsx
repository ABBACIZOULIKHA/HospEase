"use client";
import { useEffect, useState } from "react";
import TopNavbar from "./(components)/TopNavbar";
import LeftNavbar from "./(components)/LeftNavbar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [isLeftNavbarOpen, setIsLeftNavbarOpen] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsLeftNavbarOpen(false); 
      } else {
        setIsLeftNavbarOpen(true); 
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const toggleLeftNavbar = () => setIsLeftNavbarOpen(!isLeftNavbarOpen);
           
  return (
    <div className="flex flex-col bg-graybg">
     
      <TopNavbar toggleLeftNavbar={toggleLeftNavbar} />
      
      <div className="flex">
        <LeftNavbar isOpen={isLeftNavbarOpen} />
        <div
          className={`transition-all duration-300 absolute right-0 mx-2 pt-20 pb-4 bg-graybg h-auto md:px-4 lg:px-8 ${isLeftNavbarOpen ? 'w-4/5' : 'w-full'} ml-auto`}
        >
          {children}
          <div className="flex flex-row text-gray-500 justify-between pt-10">
            <p> Copyright © HospEase 2024</p>
            <p>Privacy Policy · Terms & Conditions</p>
          </div>
        </div>
      </div>
    </div>
  );
}
