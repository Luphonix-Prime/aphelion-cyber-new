import { Helmet } from "react-helmet";

export default function Solutions() {
  return (
    <>
      <Helmet>
        <title>Solutions | Aphelion Cyber Security</title>
        <meta name="description" content="Industry-specific cybersecurity solutions for healthcare, financial services, government, retail, and enterprise organizations." />
      </Helmet>
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Our Solutions</h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-12">
            Industry-specific security solutions tailored to your organization's unique needs.
          </p>
          
          <div className="bg-dark-light p-12 rounded-xl border border-gray-800 text-center">
            <h2 className="text-2xl font-bold mb-6">Solutions Page Coming Soon</h2>
            <p className="text-gray-300">
              We're currently building this page. Please check back later for more information about our industry-specific solutions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
