import { useEffect } from 'react';
import { Link } from 'wouter';
import Particles from '@/components/common/Particles';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-cyber-pattern opacity-30"></div>
      <Particles />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              Advanced <span className="text-gradient">Cybersecurity</span> for the Digital Enterprise
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-xl">
              Protect your organization with our comprehensive security platform. Detect, respond, and remediate threats before they impact your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/#contact" className="bg-secondary hover:bg-[#4f46e5] text-white font-medium px-8 py-3 rounded-lg transition-all shadow-lg hover:shadow-secondary/20 text-center">
                Request a Demo
              </Link>
              <Link href="/solutions" className="bg-dark-light hover:bg-dark border border-gray-700 text-white font-medium px-8 py-3 rounded-lg transition-all shadow-lg hover:shadow-dark/20 text-center">
                View Solutions
              </Link>
            </div>
            <div className="mt-12">
              <p className="text-sm text-gray-400 mb-4">Trusted by leading organizations</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="opacity-70 hover:opacity-100 transition-opacity">
                  <div className="h-8 bg-gray-600/20 rounded flex items-center justify-center text-gray-400">ACME Corp</div>
                </div>
                <div className="opacity-70 hover:opacity-100 transition-opacity">
                  <div className="h-8 bg-gray-600/20 rounded flex items-center justify-center text-gray-400">TechGiant</div>
                </div>
                <div className="opacity-70 hover:opacity-100 transition-opacity">
                  <div className="h-8 bg-gray-600/20 rounded flex items-center justify-center text-gray-400">GlobalSec</div>
                </div>
                <div className="opacity-70 hover:opacity-100 transition-opacity">
                  <div className="h-8 bg-gray-600/20 rounded flex items-center justify-center text-gray-400">CyberShield</div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            {/* A futuristic cybersecurity dashboard with data visualization */}
            <img 
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=800&q=80" 
              alt="Cybersecurity dashboard interface" 
              className="rounded-2xl shadow-2xl border border-gray-700 animate-float"
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
