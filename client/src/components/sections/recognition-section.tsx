export default function RecognitionSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-portfolio-primary mb-4">Recognition & Impact</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Published research, awards, and professional recognition in the statistical and data science community
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6 fade-in">
            <div className="text-4xl font-bold text-portfolio-secondary mb-2">45+</div>
            <div className="text-lg font-semibold text-portfolio-primary mb-1">Publications</div>
            <div className="text-gray-600">Peer-reviewed articles in top journals</div>
          </div>
          <div className="text-center p-6 fade-in">
            <div className="text-4xl font-bold text-portfolio-success mb-2">2,500+</div>
            <div className="text-lg font-semibold text-portfolio-primary mb-1">Citations</div>
            <div className="text-gray-600">Research impact across disciplines</div>
          </div>
          <div className="text-center p-6 fade-in">
            <div className="text-4xl font-bold text-portfolio-accent mb-2">8</div>
            <div className="text-lg font-semibold text-portfolio-primary mb-1">Awards</div>
            <div className="text-gray-600">Professional excellence recognition</div>
          </div>
          <div className="text-center p-6 fade-in">
            <div className="text-4xl font-bold text-portfolio-secondary mb-2">15</div>
            <div className="text-lg font-semibold text-portfolio-primary mb-1">Keynote Talks</div>
            <div className="text-gray-600">International conference presentations</div>
          </div>
        </div>

        
      </div>
    </section>
  );
}
