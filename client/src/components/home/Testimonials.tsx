export default function Testimonials() {
  const testimonials = [
    {
      quote: "Aphelion Cyber has transformed our security operations. We now have complete visibility into our threat landscape and can respond to incidents in minutes, not hours.",
      name: "Jane Doe",
      title: "CISO, Enterprise Corp",
      initials: "JD"
    },
    {
      quote: "The compliance management features alone have saved us countless hours of manual work. But the real value is in the comprehensive threat protection.",
      name: "Michael Smith",
      title: "Director of IT, HealthSecure Inc",
      initials: "MS"
    },
    {
      quote: "After implementing Aphelion Cyber, we've seen a 78% reduction in security incidents and dramatically improved our mean time to remediate.",
      name: "Alex Johnson",
      title: "Security Lead, FinTech Global",
      initials: "AJ"
    }
  ];
  
  return (
    <section className="py-20 bg-dark-light relative">
      <div className="absolute inset-0 bg-cyber-pattern opacity-10"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-secondary/20 text-secondary px-4 py-1 rounded-full text-sm font-medium mb-6 inline-block">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Trusted by Security Leaders</h2>
          <p className="text-lg text-gray-300">Hear what our customers have to say about how Aphelion Cyber has transformed their security posture.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-dark p-8 rounded-xl border border-gray-800 card-hover">
              <div className="flex items-center mb-6">
                <div className="text-secondary">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>
              </div>
              <blockquote className="text-gray-300 mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-xl font-bold text-white mr-4">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
