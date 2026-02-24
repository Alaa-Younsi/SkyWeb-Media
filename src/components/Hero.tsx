import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-skyblue-900 mb-6">
              Elevate Your Digital Presence with{' '}
              <span className="bg-gradient-to-r from-skyblue-600 to-cyan-500 bg-clip-text text-transparent">
                SkyWeb Media
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              SkyWeb Media is a premier digital marketing agency specializing in cutting-edge 
              web development and stunning graphic design. We leverage strategic social media 
              marketing services to propel businesses toward their goals and beyond.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">
                Start Your Project
              </button>
              <button className="btn-secondary">
                View Our Work
              </button>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-skyblue-500 to-cyan-400 rounded-2xl h-80 md:h-96 relative overflow-hidden">
              {/* Abstract background elements */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-24 h-24 bg-white rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-white rounded-full"></div>
              </div>
              
              {/* Floating UI elements */}
              <div className="absolute top-1/4 left-1/4 bg-white p-4 rounded-xl shadow-lg transform -translate-x-1/2 animate-bounce">
                <div className="w-8 h-8 bg-skyblue-500 rounded-lg mb-2"></div>
                <div className="w-20 h-2 bg-gray-200 rounded mb-1"></div>
                <div className="w-16 h-2 bg-gray-200 rounded"></div>
              </div>
              
              <div className="absolute bottom-1/4 right-1/4 bg-white p-4 rounded-xl shadow-lg transform translate-x-1/2 animate-bounce" style={{animationDelay: '0.2s'}}>
                <div className="flex space-x-2 mb-2">
                  <div className="w-4 h-4 bg-cyan-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-skyblue-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-skyblue-600 rounded-full"></div>
                </div>
                <div className="w-20 h-2 bg-gray-200 rounded mb-1"></div>
                <div className="w-16 h-2 bg-gray-200 rounded"></div>
              </div>
            </div>
            
            {/* Stats overlay */}
            <div className="mt-4 w-fit mx-auto bg-white p-6 rounded-xl shadow-xl md:mt-0 md:mx-0 md:absolute md:-bottom-6 md:-right-6">
              <div className="text-3xl font-bold text-skyblue-700">200+</div>
              <div className="text-sm text-gray-600">Projects Delivered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;