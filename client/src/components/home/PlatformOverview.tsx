export default function PlatformOverview() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="mb-8">
              <span className="bg-secondary/20 text-secondary px-4 py-1 rounded-full text-sm font-medium">Our Platform</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Unified Security Management</h2>
            <p className="text-lg text-gray-300 mb-6">
              Aphelion Cyber provides a single pane of glass for all your security needs, eliminating tool sprawl and reducing complexity.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mr-3 mt-1">
                  <i className="ri-check-line text-secondary"></i>
                </div>
                <p className="text-gray-300">Centralized dashboard with real-time threat intelligence</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mr-3 mt-1">
                  <i className="ri-check-line text-secondary"></i>
                </div>
                <p className="text-gray-300">Automated vulnerability scanning and patch management</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mr-3 mt-1">
                  <i className="ri-check-line text-secondary"></i>
                </div>
                <p className="text-gray-300">Integrated compliance frameworks for regulatory requirements</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mr-3 mt-1">
                  <i className="ri-check-line text-secondary"></i>
                </div>
                <p className="text-gray-300">Advanced machine learning for anomaly detection</p>
              </li>
            </ul>
            
            <a href="#" className="inline-flex items-center bg-secondary hover:bg-[#4f46e5] text-white font-medium px-6 py-3 rounded-lg transition-colors">
              Learn More About Our Platform
              <i className="ri-arrow-right-line ml-2"></i>
            </a>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            {/* A cybersecurity platform dashboard interface with threat monitoring */}
            <img 
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=800&q=80" 
              alt="Cybersecurity platform dashboard" 
              className="rounded-2xl shadow-2xl border border-gray-700"
            />
            <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
