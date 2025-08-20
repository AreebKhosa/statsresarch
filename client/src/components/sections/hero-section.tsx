import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section id="home" className="gradient-bg text-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center" style={{ marginTop: "100px" }}>
          <div className="fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transforming Data into{" "}
              <span className="text-portfolio-secondary">Insights</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-gray-300 leading-relaxed">
              Premier research institute with expert team specializing in advanced analytics, 
              machine learning, and evidence-based statistical solutions.
            </p>
          </div>
          {/* <div className="fade-in lg:pl-8">
            <img 
              src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.questionpro.com%2Fblog%2Fstatistical-analysis-methods%2F&psig=AOvVaw3_OR9gEbBLBNpHwibQLc6r&ust=1755779572611000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCKDZiviymY8DFQAAAAAdAAAAABAE" 
              alt="Professional researcher at work" 
              className="rounded-2xl shadow-2xl w-full h-auto max-w-lg mx-auto" 
            />
          </div> */}
        </div>
      </div>
    </section>
  );
}
