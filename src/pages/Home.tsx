import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 pt-16 fade-in">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2400&q=80')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-blue-900/90 to-gray-900" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32 relative">
          <h1 className="text-6xl font-bold text-white mb-8 animate-glow">
            Transform 2D Blueprints into
            <span className="text-blue-400"> Interactive 3D Models</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in">
            Bridge the gap between technical architectural plans and accessible visualization tools
            to enhance spatial understanding and decision-making.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/services" className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-500 transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 flex items-center gap-2">
              Get Started <ArrowRight size={20} />
            </Link>
            <button className="bg-gray-800/50 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-700/50 transition-all hover:scale-105 backdrop-blur-lg">
              Watch Demo
            </button>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2400&q=80"
            alt="3D Architectural Visualization"
            className="w-full h-[400px] object-cover animate-float"
          />
        </div>
      </header>

      {/* Overview Cards */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?auto=format&fit=crop&w=2400&q=80')] bg-cover bg-fixed opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-blue-900/95 to-gray-900" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-xl hover:shadow-xl hover:shadow-blue-500/20 transition-all hover:scale-105">
              <h3 className="text-2xl font-bold text-white mb-4">Services</h3>
              <p className="text-gray-300 mb-4">Explore our comprehensive suite of 3D modeling and visualization services.</p>
              <Link to="/services" className="text-blue-400 hover:text-blue-300 flex items-center gap-2">
                Learn More <ArrowRight size={20} />
              </Link>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-xl hover:shadow-xl hover:shadow-blue-500/20 transition-all hover:scale-105">
              <h3 className="text-2xl font-bold text-white mb-4">About Us</h3>
              <p className="text-gray-300 mb-4">Learn about our mission to revolutionize architectural visualization.</p>
              <Link to="/about" className="text-blue-400 hover:text-blue-300 flex items-center gap-2">
                Learn More <ArrowRight size={20} />
              </Link>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-xl hover:shadow-xl hover:shadow-blue-500/20 transition-all hover:scale-105">
              <h3 className="text-2xl font-bold text-white mb-4">Our Team</h3>
              <p className="text-gray-300 mb-4">Meet the experts behind our innovative 3D visualization platform.</p>
              <Link to="/team" className="text-blue-400 hover:text-blue-300 flex items-center gap-2">
                Learn More <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
