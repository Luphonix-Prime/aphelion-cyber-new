import { Link } from 'wouter';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-cyber relative">
      <div className="absolute inset-0 bg-cyber-pattern opacity-10"></div>
      <div className="absolute right-0 bottom-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute left-0 top-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Strengthen Your Security Posture?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Schedule a demo today to see how Aphelion Cyber can transform your organization's security operations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/#contact" className="bg-secondary hover:bg-[#4f46e5] text-white font-medium px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-secondary/20 text-center text-lg">
              Request a Demo
            </Link>
            <Link href="/#contact" className="bg-dark hover:bg-dark-light border border-gray-700 text-white font-medium px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-dark/20 text-center text-lg">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
