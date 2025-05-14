export default function Features() {
  const features = [
    {
      title: "Threat Detection",
      description: "Identify potential security threats before they impact your business with our advanced AI-powered detection system.",
      icon: "ri-shield-check-line"
    },
    {
      title: "Vulnerability Management",
      description: "Continuously scan your infrastructure for weaknesses and prioritize fixes based on risk assessment.",
      icon: "ri-server-line"
    },
    {
      title: "Compliance Management",
      description: "Streamline your compliance efforts with automated assessments and comprehensive reporting tools.",
      icon: "ri-file-lock-line"
    },
    {
      title: "24/7 Monitoring",
      description: "Our security operations center provides round-the-clock monitoring and rapid incident response.",
      icon: "ri-24-hours-line"
    },
    {
      title: "Access Control",
      description: "Implement zero-trust security models with granular access controls and multi-factor authentication.",
      icon: "ri-user-settings-line"
    },
    {
      title: "Risk Analytics",
      description: "Gain actionable insights with advanced risk analytics and detailed security posture reporting.",
      icon: "ri-line-chart-line"
    }
  ];
  
  return (
    <section className="py-20 bg-dark-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive Security Platform</h2>
          <p className="text-lg text-gray-300">Our all-in-one platform provides the tools and insights you need to protect your organization from evolving cyber threats.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-dark p-8 rounded-xl border border-gray-800 card-hover">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-6">
                <i className={`${feature.icon} text-2xl text-secondary`}></i>
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-300 mb-6">{feature.description}</p>
              <a href="#" className="flex items-center text-secondary font-medium hover:text-accent transition-colors">
                Learn more
                <i className="ri-arrow-right-line ml-2"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
