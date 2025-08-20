import { Mail, Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Michael Rodriguez",
    role: "Lead Statistical Researcher",
    specialty: "Biostatistics & Clinical Trials",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    email: "m.rodriguez@sir-science.org",
    description: "15+ years in pharmaceutical research and FDA regulatory submissions"
  },
  {
    name: "Dr. Emily Chen",
    role: "Data Science Director",
    specialty: "Machine Learning & AI Analytics",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    email: "e.chen@sir-science.org",
    description: "Expert in predictive modeling and deep learning applications"
  },
  {
    name: "Dr. James Wilson",
    role: "Senior Research Analyst",
    specialty: "Time Series & Econometrics",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    email: "j.wilson@sir-science.org",
    description: "Specialized in financial modeling and economic forecasting"
  },
  {
    name: "Dr. Sarah Patel",
    role: "Research Methodologist",
    specialty: "Experimental Design & Quality Control",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    email: "s.patel@sir-science.org",
    description: "Expert in survey methodology and statistical quality assurance"
  },
  {
    name: "Dr. David Thompson",
    role: "Computational Statistician",
    specialty: "Big Data & High-Performance Computing",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    email: "d.thompson@sir-science.org",
    description: "Specialist in distributed computing and scalable statistical algorithms"
  }
];

export default function TeamSection() {
  return (
    <section id="team" className="pt-8 pb-4 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-portfolio-primary mb-4">Our Expert Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our world-class team of statistical researchers and data scientists driving innovation in research methodology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 fade-in overflow-hidden"
            >
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-portfolio-primary mb-2">{member.name}</h3>
                <div className="text-portfolio-secondary font-semibold mb-1">{member.role}</div>
                <div className="text-sm text-portfolio-accent mb-3">{member.specialty}</div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.description}</p>
                <div className="flex items-center space-x-3">
                  <a 
                    href={`mailto:${member.email}`}
                    className="w-8 h-8 bg-portfolio-secondary/10 rounded-full flex items-center justify-center hover:bg-portfolio-secondary/20 transition-colors duration-200"
                  >
                    <Mail className="h-4 w-4 text-portfolio-secondary" />
                  </a>
                  <a 
                    href="#"
                    className="w-8 h-8 bg-portfolio-secondary/10 rounded-full flex items-center justify-center hover:bg-portfolio-secondary/20 transition-colors duration-200"
                  >
                    <Linkedin className="h-4 w-4 text-portfolio-secondary" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-portfolio-primary to-portfolio-secondary rounded-2xl p-8 text-white text-center fade-in">
          <h3 className="text-2xl font-bold mb-4">Collaborative Excellence</h3>
          <p className="text-xl mb-6 opacity-90">
            Our interdisciplinary team combines decades of experience across statistics, data science, and domain expertise to deliver exceptional research outcomes.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">75+</div>
              <div className="opacity-90">Years Combined Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">200+</div>
              <div className="opacity-90">Research Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="opacity-90">Published Papers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}