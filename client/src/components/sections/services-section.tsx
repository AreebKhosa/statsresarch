import { PenTool, BarChart3, GraduationCap, CheckCircle } from "lucide-react";

const servicesData = [
  {
    icon: PenTool,
    title: "Write-up and Plagiarism Removal",
    color: "portfolio-secondary",
    services: [
      "Research thesis and article write-up",
      "Plagiarism elimination and AI-content refinement", 
      "Research paper formatting and referencing",
      "Journal selection and submission guidance",
      "Proofreading and language polishing for publication"
    ]
  },
  {
    icon: BarChart3,
    title: "Data Analysis and Interpretation",
    color: "portfolio-success",
    services: [
      "Collaborative research design and development",
      "Statistical consulting and end-to-end project support",
      "Advanced statistical analysis and interpretation",
      "Data modeling and predictive analytics",
      "Interactive data visualization and reporting"
    ]
  },
  {
    icon: GraduationCap,
    title: "Training and Tutoring",
    color: "portfolio-accent",
    services: [
      "Training in modern statistical tools, methods, and software",
      "Personalized tutoring in data science and analytics",
      "Hands-on workshops in Python, R, SPSS, and more",
      "Peer-review support and publication readiness coaching",
      "Access to open educational and research-enhancing resources"
    ]
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-portfolio-primary mb-4">Our Core Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive statistical consulting and research support services tailored to your specific needs
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 fade-in"
              >
                <div className={`w-16 h-16 bg-${service.color}/10 rounded-lg flex items-center justify-center mb-6`}>
                  <IconComponent className={`h-8 w-8 text-${service.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-portfolio-primary mb-6">{service.title}</h3>
                <ul className="space-y-3">
                  {service.services.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <CheckCircle className={`h-5 w-5 text-${service.color} flex-shrink-0 mt-0.5`} />
                      <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary rounded-2xl p-8 text-white text-center fade-in">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Research Project?</h3>
          <p className="text-xl mb-6 opacity-90">
            Let's discuss how our comprehensive services can support your research goals and accelerate your success.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-portfolio-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}