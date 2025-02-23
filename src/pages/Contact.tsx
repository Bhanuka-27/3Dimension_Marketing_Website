import { Phone, Mail, MapPin, Clock, Instagram, Linkedin } from 'lucide-react';

interface ContactInfo {
  icon: JSX.Element;
  title: string;
  details: string;
  link?: string;
}

interface SocialLink {
  platform: string;
  icon: JSX.Element;
  url: string;
  color: string;
}

const Contact = () => {
  const contactInfo: ContactInfo[] = [
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      details: '+94 779 078 188'
    },
    {
      icon: <Mail size={24} />,
      title: 'Email',
      details: '3dimension25tech@gmail.com',
      link: 'mailto:3dimension25tech@gmail.com'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Office',
      details: 'Colombo, Sri Lanka'
    },
    {
      icon: <Clock size={24} />,
      title: 'Business Hours',
      details: 'Mon-Fri: 9:00 AM - 6:00 PM'
    }
  ];

  const socialLinks: SocialLink[] = [
    {
      platform: 'Instagram',
      url: 'https://www.instagram.com/3dimension1.0/',
      icon: <Instagram size={24} />,
      color: 'hover:text-pink-400'
    },
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/company/3dimension1-0',
      icon: <Linkedin size={24} />,
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-100 mb-4">Contact Us</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get in touch with us. We're here to help and answer any questions you might have.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 space-y-8 border border-gray-800 shadow-xl shadow-blue-900/10">
            <h2 className="text-2xl font-semibold text-gray-100 mb-6">Contact Information</h2>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-blue-400 mt-1">{info.icon}</div>
                  <div>
                    <h3 className="text-gray-100 font-medium">{info.title}</h3>
                    {info.link ? (
                      <a href={info.link} className="text-gray-400 hover:text-blue-400 transition-colors">
                        {info.details}
                      </a>
                    ) : (
                      <p className="text-gray-400">{info.details}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media Links */}
            <div className="pt-6 border-t border-gray-800">
              <h3 className="text-gray-100 font-medium mb-4">Connect With Us</h3>
              <div className="flex space-x-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 transition-colors ${social.color} group`}
                    title={social.platform}
                  >
                    <div className="transform transition-transform group-hover:scale-110">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
