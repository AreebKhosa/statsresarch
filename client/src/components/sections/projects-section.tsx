import { Calendar, Users, TrendingUp, Database, Globe, Clock, Eye, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const featuredProjects = [
  {
    title: "Healthcare Outcomes Predictive Model",
    category: "Healthcare Analytics",
    status: "Published",
    statusColor: "portfolio-success",
    categoryColor: "portfolio-secondary",
    description: "Developed a machine learning model to predict patient readmission rates using electronic health records. Achieved 89% accuracy with significant cost savings for healthcare systems.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    stats: [
      { icon: Calendar, label: "2023" },
      { icon: Users, label: "15,000 patients" },
      { icon: TrendingUp, label: "89% accuracy" }
    ]
  },
  {
    title: "Financial Risk Assessment Study",
    category: "Financial Analytics",
    status: "Award Winner",
    statusColor: "portfolio-success",
    categoryColor: "portfolio-accent",
    description: "Comprehensive Bayesian analysis of market volatility patterns during economic uncertainty periods. Won the 2023 Statistical Excellence Award for innovative methodology.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    stats: [
      { icon: Calendar, label: "2023" },
      { icon: Database, label: "500GB data" },
      { icon: Award, label: "Award winner" }
    ]
  },
  {
    title: "Climate Change Impact Analysis",
    category: "Environmental Science",
    status: "Ongoing",
    statusColor: "portfolio-secondary",
    categoryColor: "portfolio-success",
    description: "Multi-decade time series analysis of climate patterns using advanced statistical modeling. Collaboration with NASA and NOAA for global environmental monitoring.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    stats: [
      { icon: Calendar, label: "2023" },
      { icon: Globe, label: "Global dataset" },
      { icon: Clock, label: "50+ years" }
    ]
  },
  {
    title: "Energy Optimization Research",
    category: "Energy Analytics",
    status: "Peer Reviewed",
    statusColor: "portfolio-accent",
    categoryColor: "portfolio-secondary",
    description: "Statistical optimization of energy consumption patterns in smart grids using machine learning and predictive modeling. Published in top-tier journal with high impact factor.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    stats: [
      { icon: Calendar, label: "2022" },
      { icon: TrendingUp, label: "25% efficiency" },
      { icon: Eye, label: "5K citations" }
    ]
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-portfolio-primary mb-4">Featured Research Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore my latest statistical research and analytical case studies that have driven significant insights and innovations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {featuredProjects.map((project, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 fade-in"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-64 object-cover" 
              />
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`bg-${project.categoryColor}/10 text-${project.categoryColor} px-3 py-1 rounded-full text-sm font-medium`}>
                    {project.category}
                  </span>
                  <span className={`bg-${project.statusColor}/10 text-${project.statusColor} px-3 py-1 rounded-full text-sm font-medium`}>
                    {project.status}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-portfolio-primary mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    {project.stats.map((stat, statIndex) => {
                      const IconComponent = stat.icon;
                      return (
                        <span key={statIndex} className="flex items-center gap-1">
                          <IconComponent className="h-4 w-4" />
                          {stat.label}
                        </span>
                      );
                    })}
                  </div>
                  <Button variant="ghost" className="text-portfolio-secondary hover:text-portfolio-primary font-semibold">
                    View Details →
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 fade-in">
          <Button className="bg-portfolio-primary hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
            View All Research Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
