import { Linkedin } from 'lucide-react';

interface TeamMemberProps {
  image: string;
  name: string;
  role: string;
  social: {
    linkedin?: string;
  };
}

const TeamMember = ({ image, name, role, social }: TeamMemberProps) => {
  return (
    <div 
      className="relative group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg p-6 rounded-xl transition-all duration-300 hover:translate-y-[-8px]"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-600/10 to-gray-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <img
        src={image}
        alt={name}
        className="w-32 h-32 rounded-2xl mx-auto mb-4 object-cover ring-2 ring-gray-500/30 group-hover:ring-gray-400 transition-all"
      />
      <h3 className="text-lg font-semibold text-white">{name}</h3>
      <p className="text-gray-300 font-medium">{role}</p>
      <div className="flex justify-center gap-4 mt-4">
        {social.linkedin && (
          <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-100 transition-colors">
            <Linkedin size={20} />
          </a>
        )}
      </div>
      {/* Decorative shapes */}
      <div className="absolute -top-2 -right-2 w-4 h-4 bg-gray-500/20 rounded-full blur-sm" />
      <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gray-400/20 rounded-full blur-sm" />
    </div>
  );
};

const Team = () => {
  const teamMembers: TeamMemberProps[] = [
    {
      image: "/images/team/member1.jpg",
      name: "Bhanuka Wijerathne",
      role: "Team Leader",
      social: {
        linkedin: ""
      }
    },
    {
      image: "/images/team/member2.jpg",
      name: "Chamani Wanniarachchi",
      role: "Backend and Technical Developer",
      social: {
        linkedin: ""
      }
    },
    {
      image: "/images/team/member3.jpg",
      name: "Pubudu Vithanage",
      role: "3D Developer",
      social: {
        linkedin: ""
      }
    },
    {
      image: "/images/team/member4.jpg",
      name: "Chamath Gunasekara",
      role: "Frontend and Technical Developer",
      social: {
        linkedin: ""
      }
    },
    {
      image: "/images/team/member5.jpg",
      name: "Imashi Ariyasinghe",
      role: "Automation And Technical Developer",
      social: {
        linkedin: ""
      }
    },
    {
      image: "/images/team/member6.jpg",
      name: "Nithika Wikramasinghe",
      role: "Technical and Automation developer",
      social: {
        linkedin: ""
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 pt-16">
      {/* Decorative shapes */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-gray-500/10 rounded-full blur-3xl" />
      <div className="absolute top-40 right-0 w-96 h-96 bg-gray-400/10 rounded-full blur-3xl" />
      
      {/* Team Header */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-center text-white mb-6">Our Team</h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16">
            Meet the passionate experts behind 3Dimension who are revolutionizing architectural visualization
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
