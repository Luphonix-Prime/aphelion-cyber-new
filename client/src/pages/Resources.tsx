import { Helmet } from "react-helmet";

export default function Resources() {
  return (
    <>
      <Helmet>
        <title>Resources | Aphelion Cyber Security</title>
        <meta name="description" content="Access cybersecurity resources, guides, whitepapers, and best practices to strengthen your security posture." />
      </Helmet>
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Resources</h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-12">
            Access guides, whitepapers, and best practices to strengthen your security posture.
          </p>
          
          <div className="bg-dark-light p-12 rounded-xl border border-gray-800 text-center">
            <h2 className="text-2xl font-bold mb-6">Resources Page Coming Soon</h2>
            <p className="text-gray-300">
              We're currently building this page. Please check back later for valuable security resources.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
