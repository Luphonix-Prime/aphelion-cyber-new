import { Link } from 'wouter';

export default function SecuritySolutions() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-secondary/20 text-secondary px-4 py-1 rounded-full text-sm font-medium mb-6 inline-block">Solutions</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Tailored Security Solutions</h2>
          <p className="text-lg text-gray-300">We provide specialized security solutions for industries with unique compliance requirements and threat landscapes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Solution 1 */}
          <div className="bg-dark-light p-8 rounded-2xl border border-gray-800 overflow-hidden relative card-hover">
            {/* A healthcare security graphic with medical data protection */}
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300&q=80" 
              alt="Healthcare Cybersecurity" 
              className="w-full h-48 object-cover rounded-xl mb-6"
            />
            <h3 className="text-2xl font-bold mb-4">Healthcare Security</h3>
            <p className="text-gray-300 mb-6">
              Protect patient data and ensure HIPAA compliance with our specialized healthcare security solutions.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <i className="ri-check-line text-secondary mr-2 mt-1"></i>
                <span className="text-gray-300">HIPAA compliance automation</span>
              </li>
              <li className="flex items-start">
                <i className="ri-check-line text-secondary mr-2 mt-1"></i>
                <span className="text-gray-300">Medical device security</span>
              </li>
              <li className="flex items-start">
                <i className="ri-check-line text-secondary mr-2 mt-1"></i>
                <span className="text-gray-300">PHI data protection</span>
              </li>
            </ul>
            <Link href="/solutions" className="inline-flex items-center text-secondary hover:text-accent transition-colors font-medium">
              Learn more
              <i className="ri-arrow-right-line ml-2"></i>
            </Link>
          </div>

          {/* Solution 2 */}
          <div className="bg-dark-light p-8 rounded-2xl border border-gray-800 overflow-hidden relative card-hover">
            {/* A financial security graphic with digital fraud protection */}
            <img 
              src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300&q=80" 
              alt="Financial Services Cybersecurity" 
              className="w-full h-48 object-cover rounded-xl mb-6"
            />
            <h3 className="text-2xl font-bold mb-4">Financial Services</h3>
            <p className="text-gray-300 mb-6">
              Secure financial data and transactions with advanced threat detection and regulatory compliance.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <i className="ri-check-line text-secondary mr-2 mt-1"></i>
                <span className="text-gray-300">PCI DSS compliance</span>
              </li>
              <li className="flex items-start">
                <i className="ri-check-line text-secondary mr-2 mt-1"></i>
                <span className="text-gray-300">Fraud detection & prevention</span>
              </li>
              <li className="flex items-start">
                <i className="ri-check-line text-secondary mr-2 mt-1"></i>
                <span className="text-gray-300">Zero trust implementation</span>
              </li>
            </ul>
            <Link href="/solutions" className="inline-flex items-center text-secondary hover:text-accent transition-colors font-medium">
              Learn more
              <i className="ri-arrow-right-line ml-2"></i>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Solution 3 */}
          <div className="bg-dark-light p-6 rounded-xl border border-gray-800 card-hover">
            <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-6">
              <i className="ri-government-line text-2xl text-secondary"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Government</h3>
            <p className="text-gray-300 mb-6">
              Specialized security for government agencies with FedRAMP compliance and advanced threat protection.
            </p>
            <Link href="/solutions" className="inline-flex items-center text-secondary hover:text-accent transition-colors font-medium">
              Learn more
              <i className="ri-arrow-right-line ml-2"></i>
            </Link>
          </div>

          {/* Solution 4 */}
          <div className="bg-dark-light p-6 rounded-xl border border-gray-800 card-hover">
            <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-6">
              <i className="ri-store-2-line text-2xl text-secondary"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Retail</h3>
            <p className="text-gray-300 mb-6">
              Protect customer data and point-of-sale systems with dedicated retail security solutions.
            </p>
            <Link href="/solutions" className="inline-flex items-center text-secondary hover:text-accent transition-colors font-medium">
              Learn more
              <i className="ri-arrow-right-line ml-2"></i>
            </Link>
          </div>

          {/* Solution 5 */}
          <div className="bg-dark-light p-6 rounded-xl border border-gray-800 card-hover">
            <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-6">
              <i className="ri-building-line text-2xl text-secondary"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Enterprise</h3>
            <p className="text-gray-300 mb-6">
              Comprehensive security management for large organizations with complex infrastructure needs.
            </p>
            <Link href="/solutions" className="inline-flex items-center text-secondary hover:text-accent transition-colors font-medium">
              Learn more
              <i className="ri-arrow-right-line ml-2"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
