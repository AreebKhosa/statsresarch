import { BarChart3, Database, Brain, PieChart, Calculator, GitBranch } from "lucide-react";

const expertiseAreas = [
  {
    icon: BarChart3,
    title: "Predictive Modeling",
    description: "Advanced regression analysis, time series forecasting, and machine learning algorithms for predictive analytics.",
    tools: ["Python", "R", "TensorFlow"],
    color: "portfolio-secondary"
  },
  {
    icon: Database,
    title: "Biostatistics",
    description: "Clinical trial design, survival analysis, and epidemiological studies with focus on healthcare outcomes.",
    tools: ["SAS", "SPSS", "Stata"],
    color: "portfolio-success"
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Deep learning, neural networks, and AI-driven statistical analysis for complex pattern recognition.",
    tools: ["PyTorch", "Scikit-learn", "Keras"],
    color: "portfolio-accent"
  },
  {
    icon: PieChart,
    title: "Data Visualization",
    description: "Interactive dashboards, statistical graphics, and data storytelling for executive presentations.",
    tools: ["Tableau", "D3.js", "Power BI"],
    color: "portfolio-secondary"
  },
  {
    icon: Calculator,
    title: "Experimental Design",
    description: "A/B testing, factorial designs, and statistical power analysis for robust experimental frameworks.",
    tools: ["DOE", "ANOVA", "Minitab"],
    color: "portfolio-success"
  },
  {
    icon: GitBranch,
    title: "Time Series Analysis",
    description: "Forecasting models, trend analysis, and temporal pattern recognition for sequential data insights.",
    tools: ["ARIMA", "Prophet", "LSTM"],
    color: "portfolio-accent"
  }
];

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-portfolio-primary mb-4">Research Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized in advanced statistical methods and computational analytics across multiple domains
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 fade-in"
              >
                <div className={`w-16 h-16 bg-${area.color}/10 rounded-lg flex items-center justify-center mb-6`}>
                  <IconComponent className={`h-8 w-8 text-${area.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-portfolio-primary mb-4">{area.title}</h3>
                <p className="text-gray-600 mb-4">{area.description}</p>
                <div className="flex flex-wrap gap-2">
                  {area.tools.map((tool, toolIndex) => (
                    <span 
                      key={toolIndex}
                      className={`bg-${area.color}/10 text-${area.color} px-3 py-1 rounded-full text-sm`}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
