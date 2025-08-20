import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, ScatterChart, Scatter } from 'recharts';
import { BarChart3, Database, Users } from "lucide-react";

const outcomeData = [
  { month: 'Jan', recoveryRate: 78, confidenceInterval: 73 },
  { month: 'Feb', recoveryRate: 82, confidenceInterval: 77 },
  { month: 'Mar', recoveryRate: 85, confidenceInterval: 80 },
  { month: 'Apr', recoveryRate: 88, confidenceInterval: 83 },
  { month: 'May', recoveryRate: 91, confidenceInterval: 86 },
  { month: 'Jun', recoveryRate: 89, confidenceInterval: 84 },
  { month: 'Jul', recoveryRate: 94, confidenceInterval: 89 },
  { month: 'Aug', recoveryRate: 96, confidenceInterval: 91 },
  { month: 'Sep', recoveryRate: 93, confidenceInterval: 88 },
  { month: 'Oct', recoveryRate: 97, confidenceInterval: 92 },
  { month: 'Nov', recoveryRate: 95, confidenceInterval: 90 },
  { month: 'Dec', recoveryRate: 98, confidenceInterval: 93 }
];

const riskData = [
  { category: 'Very Low', probability: 15 },
  { category: 'Low', probability: 35 },
  { category: 'Medium', probability: 30 },
  { category: 'High', probability: 15 },
  { category: 'Very High', probability: 5 }
];

const correlationData = [
  { temperature: 15, humidity: 85, precipitation: 25 },
  { temperature: 20, humidity: 78, precipitation: 18 },
  { temperature: 25, humidity: 65, precipitation: 12 },
  { temperature: 30, humidity: 52, precipitation: 8 },
  { temperature: 35, humidity: 38, precipitation: 3 },
  { temperature: 18, humidity: 82, precipitation: 22 },
  { temperature: 22, humidity: 75, precipitation: 15 },
  { temperature: 28, humidity: 58, precipitation: 10 },
  { temperature: 32, humidity: 45, precipitation: 5 },
  { temperature: 16, humidity: 88, precipitation: 28 },
  { temperature: 24, humidity: 68, precipitation: 14 },
  { temperature: 29, humidity: 55, precipitation: 9 }
];

export default function VisualizationsSection() {
  return (
    <section id="visualizations" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-portfolio-primary mb-4">Interactive Data Visualizations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore interactive charts and visualizations that demonstrate my analytical capabilities and data storytelling expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg fade-in">
            <h3 className="text-2xl font-bold text-portfolio-primary mb-6">Patient Outcome Trends</h3>
            <div className="h-80 mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={outcomeData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis domain={[70, 100]} />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="recoveryRate" 
                    stroke="#3498DB" 
                    strokeWidth={3}
                    name="Recovery Rate %" 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="confidenceInterval" 
                    stroke="#E74C3C" 
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    name="Confidence Interval" 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-gray-600">Statistical analysis showing improvement in patient outcomes over 24-month study period with 95% confidence intervals.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg fade-in">
            <h3 className="text-2xl font-bold text-portfolio-primary mb-6">Risk Distribution Analysis</h3>
            <div className="h-80 mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={riskData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="category" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="probability" fill="#27AE60" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-gray-600">Probability distribution of financial risk factors using Bayesian inference and Monte Carlo simulation methods.</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg fade-in mb-16">
          <h3 className="text-2xl font-bold text-portfolio-primary mb-6 text-center">Climate Data Correlation Matrix</h3>
          <div className="h-96 mb-4">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart data={correlationData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="temperature" name="Temperature" unit="°C" />
                <YAxis name="Humidity/Precipitation" unit="%" />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Legend />
                <Scatter name="Temperature vs Humidity" dataKey="humidity" fill="#3498DB" />
                <Scatter name="Temperature vs Precipitation" dataKey="precipitation" fill="#E74C3C" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
          <p className="text-gray-600 text-center">Correlation analysis of multiple climate variables across global monitoring stations using hierarchical clustering.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg fade-in">
            <div className="w-16 h-16 bg-portfolio-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="h-8 w-8 text-portfolio-secondary" />
            </div>
            <h4 className="text-xl font-semibold text-portfolio-primary mb-2">50+ Visualizations</h4>
            <p className="text-gray-600">Interactive charts and dashboards created for research publications and presentations</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg fade-in">
            <div className="w-16 h-16 bg-portfolio-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Database className="h-8 w-8 text-portfolio-success" />
            </div>
            <h4 className="text-xl font-semibold text-portfolio-primary mb-2">1TB+ Data Analyzed</h4>
            <p className="text-gray-600">Large-scale datasets processed and visualized across multiple research domains</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg fade-in">
            <div className="w-16 h-16 bg-portfolio-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-portfolio-accent" />
            </div>
            <h4 className="text-xl font-semibold text-portfolio-primary mb-2">25+ Collaborations</h4>
            <p className="text-gray-600">Cross-disciplinary partnerships with researchers, institutions, and industry leaders</p>
          </div>
        </div>
      </div>
    </section>
  );
}
