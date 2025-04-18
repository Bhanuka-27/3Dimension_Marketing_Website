import { DollarSign, Zap, Brain, CheckCircle, Users, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard = ({ icon, title, description }: BenefitCardProps) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl hover:shadow-xl hover:shadow-blue-500/20 transition-all hover:scale-105">
      <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 pt-16">
      {/* About Header */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-center text-white mb-6 animate-glow">About 3Dimension</h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16">
            We're revolutionizing architectural visualization through cutting-edge AI technology and innovative 3D modeling solutions.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-gray-300 mb-6">
                Founded in 2023, 3Dimension emerged from a simple yet powerful idea: make architectural visualization accessible to everyone. Our team of architects, developers, and AI specialists came together to bridge the gap between traditional blueprints and modern 3D visualization.
              </p>
              <p className="text-gray-300">
                Today, we're proud to serve thousands of architects, designers, and construction professionals worldwide, helping them bring their visions to life with our innovative platform.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800/30 backdrop-blur-lg p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
                <div className="text-gray-300">Accuracy Rate</div>
              </div>
              <div className="bg-gray-800/30 backdrop-blur-lg p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">98%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
              <div className="bg-gray-800/30 backdrop-blur-lg p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">60%</div>
                <div className="text-gray-300">Time Saved</div>
              </div>
              <div className="bg-gray-800/30 backdrop-blur-lg p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-16 animate-glow">Why Choose 3Dimension</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BenefitCard
              icon={<DollarSign />}
              title="Cost Effective"
              description="Save up to 60% on visualization costs by automating the 3D modeling process"
            />
            <BenefitCard
              icon={<Zap />}
              title="Real-Time Processing"
              description="Get instant results with our advanced AI-powered processing engine"
            />
            <BenefitCard
              icon={<Brain />}
              title="Intelligent Detection"
              description="Industry-leading accuracy in detecting architectural elements"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <Users className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Customer First</h3>
              <p className="text-gray-300">We prioritize our customers' needs and continuously improve based on their feedback</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <CheckCircle className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Quality Excellence</h3>
              <p className="text-gray-300">We maintain the highest standards in our technology and service delivery</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Globe className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Global Impact</h3>
              <p className="text-gray-300">We're committed to making architectural visualization accessible worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Experience the Future of Architecture?</h2>
          <p className="text-xl text-gray-300 mb-8">Join thousands of satisfied professionals who trust 3Dimension</p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-500 transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
          >
            Start Your Journey <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
