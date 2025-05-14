import { Helmet } from "react-helmet";

export default function Pricing() {
  return (
    <>
      <Helmet>
        <title>Pricing | Aphelion Cyber Security</title>
        <meta name="description" content="Explore our flexible pricing plans for cybersecurity services designed to fit organizations of all sizes." />
      </Helmet>
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Pricing</h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-12">
            Flexible pricing plans designed to fit organizations of all sizes.
          </p>
          
          <div className="bg-dark-light p-12 rounded-xl border border-gray-800 text-center">
            <h2 className="text-2xl font-bold mb-6">Pricing Page Coming Soon</h2>
            <p className="text-gray-300">
              We're currently building this page. Please check back later for detailed pricing information.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
