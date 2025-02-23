import { ArrowRight, Upload, Cog, Box, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="bg-gray-800/30 backdrop-blur-lg p-8 rounded-xl">
    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 pt-16">
      {/* Services Header */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2400&q=80')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-blue-900/90 to-gray-900" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h1 className="text-5xl font-bold text-center text-white mb-6 animate-glow">Our Services</h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16">
            Transform your architectural blueprints into interactive 3D models with our comprehensive suite of services.
          </p>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2400&q=80')] bg-cover bg-fixed opacity-5" />
        <div className="absolute inset-0 bg-gray-900/95" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-4xl font-bold text-center text-white mb-16 animate-glow">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Upload />}
              title="Upload Blueprint"
              description="Simply upload your 2D architectural blueprint to get started"
            />
            <FeatureCard
              icon={<Cog />}
              title="Processing"
              description="Advanced AI processes and analyzes your blueprint"
            />
            <FeatureCard
              icon={<Box />}
              title="3D Generation"
              description="Automatic conversion into an interactive 3D model"
            />
            <FeatureCard
              icon={<Building2 />}
              title="Customize"
              description="Modify and customize your 3D model in real-time"
            />
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=2400&q=80')] bg-cover bg-center bg-fixed opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-blue-900/95 to-gray-900" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Detailed Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/30 backdrop-blur-lg p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">Blueprint Conversion</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-blue-400 mt-1 flex-shrink-0" />
                  <span>Support for all major CAD file formats including AutoCAD, Revit, and SketchUp</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-blue-400 mt-1 flex-shrink-0" />
                  <span>Automatic detection of walls, doors, windows, and other architectural elements</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-blue-400 mt-1 flex-shrink-0" />
                  <span>High-accuracy measurements and scale preservation</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-lg p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">3D Modeling</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-blue-400 mt-1 flex-shrink-0" />
                  <span>Real-time 3D model generation with customizable materials and textures</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-blue-400 mt-1 flex-shrink-0" />
                  <span>Interactive viewing with zoom, pan, and rotate capabilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-blue-400 mt-1 flex-shrink-0" />
                  <span>Export options for various 3D file formats</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-lg p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">Customization</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-blue-400 mt-1 flex-shrink-0" />
                  <span>Modify materials, colors, and textures in real-time</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-blue-400 mt-1 flex-shrink-0" />
                  <span>Add or remove architectural elements</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-blue-400 mt-1 flex-shrink-0" />
                  <span>Adjust lighting and environmental settings</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-lg p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">Collaboration</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-blue-400 mt-1 flex-shrink-0" />
                  <span>Share models with team members and clients</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-blue-400 mt-1 flex-shrink-0" />
                  <span>Real-time commenting and feedback system</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-blue-400 mt-1 flex-shrink-0" />
                  <span>Version control and change tracking</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2400&q=80')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-blue-600/90 backdrop-blur-sm" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Blueprints?</h2>
          <p className="text-xl text-gray-200 mb-8">
            Click below to get started with our services.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-500 transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
          >
            Get Started Now <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
