import { useEffect } from 'react';

export default function Particles() {
  useEffect(() => {
    const createParticles = () => {
      const particlesContainer = document.getElementById('particles');
      if (!particlesContainer) return;
      
      // Clear any existing particles
      particlesContainer.innerHTML = '';
      
      const particleCount = 50;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random size between 1-4px
        const size = Math.random() * 3 + 1;
        
        // Style the particle
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.background = i % 2 === 0 ? 'rgba(99, 102, 241, 0.4)' : 'rgba(139, 92, 246, 0.4)';
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animation = `pulse-glow ${(Math.random() * 2) + 2}s infinite ease-in-out`;
        
        particlesContainer.appendChild(particle);
      }
    };
    
    // Create particles on mount
    createParticles();
    
    // Re-create particles on window resize
    window.addEventListener('resize', createParticles);
    
    return () => {
      window.removeEventListener('resize', createParticles);
    };
  }, []);

  return <div id="particles" aria-hidden="true"></div>;
}
