import { Link } from 'wouter';

export default function Footer() {
  return (
    <footer className="bg-dark-light py-12 mt-8 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold text-white">Aphelion<span className="text-secondary">Cyber</span></span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Comprehensive cybersecurity solutions for the modern enterprise. Protecting your digital assets from evolving threats.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-dark flex items-center justify-center hover:bg-secondary/20 transition-colors">
                <i className="ri-linkedin-fill text-xl text-gray-300 hover:text-secondary"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark flex items-center justify-center hover:bg-secondary/20 transition-colors">
                <i className="ri-twitter-fill text-xl text-gray-300 hover:text-secondary"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark flex items-center justify-center hover:bg-secondary/20 transition-colors">
                <i className="ri-facebook-fill text-xl text-gray-300 hover:text-secondary"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark flex items-center justify-center hover:bg-secondary/20 transition-colors">
                <i className="ri-github-fill text-xl text-gray-300 hover:text-secondary"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Platform</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Threat Detection</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Vulnerability Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Compliance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Risk Assessment</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Security Automation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Solutions</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Healthcare</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Financial Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Government</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Retail</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Enterprise</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Press</a></li>
              <li><Link href="/#contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">© 2023 Aphelion Cyber. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
